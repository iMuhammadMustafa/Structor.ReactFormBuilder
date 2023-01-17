import { useReducer, useRef } from "react";

import FormButtons from "../UI/FormButtons";
import { InputTypes } from "./Form.Types";
import FormBuilder from "./FormBuilder";

export default function Form({ values, setValues, schema: { title, fields }, handleFormSubmit, children }) {
  const [formState, formStateAction] = useReducer(formReducer, formInitialState);

  const handleSubmit = async e => {
    e.preventDefault();
    handleFormSubmit(e);
  };

  const handleInputBlur = async (field, e) => {
    // console.log("----------------Blur---------------");
    // console.log(field);
    // console.log("----------------------------------");
  };

  const timerRef = useRef();
  const handleInputChange = async (field, e) => {
    console.log(field);
    formStateAction({ type: formActions.UPDATE });
    updateValues(field);

    // let field = fields.find((field) => field.name === target.name);
    // // if (!field) {
    // //   field = fields.find((field) => field.name === target.name.match(/.+?(?=[[])/)[0]);
    // //   // if (field.type === InputTypes.GROUP) {
    // //   //   field = field.fields.find((field) => field.name === target.name);
    // //   // }
    // // }
    // clearTimeout(timerRef.current);
    // timerRef.current = setTimeout(async () => {
    //   const inputErrors = await ValidateFormInputs(formState.errors, field, target.value);
    //   formStateAction({ type: formActions.UPDATE_ERRORS, payload: inputErrors });
    // }, 1000);
  };

  const updateValues = field => {
    const { name, type, value, checked, parentName } = { ...field };
    switch (type) {
      case InputTypes.CHECKBOX:
        setValues({ ...values, [name]: checked });
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

  return (
    <div className="container text-light col-7">
      <DevInfo
        isTouched={formState.isTouched}
        isSubmitted={formState.isSubmitted}
        errors={formState.errors}
        values={values}
      />

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

        <button className="btn btn-primary mx-2 btn-sm">Submit</button>
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
