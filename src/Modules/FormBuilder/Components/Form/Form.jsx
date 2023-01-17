import { useReducer, useRef } from "react";

import { ValidateFormInputs } from "@Modules/FormBuilder/Services/Validation.Service";

import FormButtons from "../UI/FormButtons";
import { InputTypes } from "./Form.Types";
import FormBuilder from "./FormBuilder";

export default function Form({
  values,
  setValues,
  schema: { title, fields, clearBtn, dev },
  handleFormSubmit,
  children,
}) {
  const [formState, formStateAction] = useReducer(formReducer, formInitialState);

  const handleSubmit = async e => {
    e.preventDefault();

    formStateAction({ type: formActions.SUBMIT });
    await validateFields();

    handleFormSubmit(e);
  };

  const handleClear = () => {
    setValues({});
    formStateAction({ type: formActions.CLEAR });
  };

  const handleInputBlur = async (field, e) => {
    if (!formState.isTouched) formStateAction({ type: formActions.UPDATE });
    const formField = fields.find(formField => formField.name === field.name);

    const inputErrors = await ValidateFormInputs(formState.errors, formField, field.value);
    formStateAction({ type: formActions.UPDATE_ERRORS, payload: inputErrors });
  };

  const timerRef = useRef();
  const handleInputChange = async (field, e) => {
    formStateAction({ type: formActions.UPDATE });

    updateValues(field, e);

    const formField = fields.find(formField => formField.name === field.name);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      const inputErrors = await ValidateFormInputs(formState.errors, formField, field.value);
      formStateAction({ type: formActions.UPDATE_ERRORS, payload: inputErrors });
    }, 1000);
  };

  const updateValues = (field, e) => {
    const { name, type, value, parentName } = { ...field };
    switch (type) {
      case InputTypes.CHECKBOX:
        setValues({ ...values, [name]: e.target.checked });
        break;
      case InputTypes.GROUP:
      case InputTypes.TEXT:
      case InputTypes.EMAIL:
      case InputTypes.PASSWORD:
      default:
        parentName
          ? setValues({ ...values, [parentName]: { ...values?.parentName, [name]: value } })
          : setValues({ ...values, [name]: value });
    }
  };

  const validateFields = async () => {
    let inputErrors = [];
    for (let field of fields) {
      inputErrors = await ValidateFormInputs(inputErrors, field, values ? values[field.name] : "");
    }
    formStateAction({ type: formActions.UPDATE_ERRORS, payload: inputErrors });
  };

  return (
    <div className="container text-light col-7">
      {dev && (
        <DevInfo
          isTouched={formState.isTouched}
          isSubmitted={formState.isSubmitted}
          errors={formState.errors}
          values={values}
        />
      )}

      <h1 className="text-center mb-3">{title}</h1>
      <form onSubmit={handleSubmit} noValidate className="row">
        <FormBuilder
          fields={fields}
          isFormSubmit={formState.isSubmitted}
          isFormCleared={formState.isCleared}
          setIsFormTouched={formState.setIsTouched}
          setValues={setValues}
          values={values}
          handleInputChange={handleInputChange}
          handleInputBlur={handleInputBlur}
          errors={formState.errors}
        />
        {children}

        <FormButtons clearBtn={clearBtn} clearForm={handleClear} />
      </form>
    </div>
  );
}

const formReducer = (state, action) => {
  switch (action.type) {
    case formActions.TOUCH:
      return { ...state, isTouched: true };
    case formActions.SUBMIT:
      return { ...state, isTouched: true, isSubmitted: true };
    case formActions.CLEAR:
      return { ...formInitialState, isCleared: true };
    case formActions.UPDATE:
      return { ...state, isCleared: false, isSubmitted: false, isTouched: true };
    case formActions.UPDATE_ERRORS:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};

const formActions = {
  TOUCH: "TOUCH",
  CLEAR: "CLEAR",
  SUBMIT: "SUBMIT",
  UPDATE: "UPDATE",
  UPDATE_ERRORS: "UPDATE_ERRORS",
};

const formInitialState = {
  isTouched: false,
  isCleared: false,
  isSubmitted: false,
  errors: [],
};

function DevInfo({ isTouched, isSubmitted, errors, values }) {
  return (
    <div className="my-4">
      <p>isTouched: {JSON.stringify(isTouched)}</p>
      <p>isSubmitted: {JSON.stringify(isSubmitted)}</p>
      <p>errors: {JSON.stringify(errors)}</p>
      <p>values: {JSON.stringify(values)}</p>
    </div>
  );
}
