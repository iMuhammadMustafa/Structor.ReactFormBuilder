import { useEffect, useReducer, useRef } from "react";
import { FormActionsTypes, IForm, IFormAction, IFormState } from "./Form.types";
import DevInfo from "./DevInfo";
import FieldsBuilder from "../FieldsBuilder/FieldsBuilder";
import Button from "../Elements/Button/Button";
import { IError } from "../Types/Error";
import { ValidateFormInputs } from "../Services/Validation.Service";
import { IField, InputTypes } from "../Types/Field";

export default function Form({
  values,
  setValues,
  schema: { title, fields, clearBtn, dev = false },
  handleFormSubmit,
  children,
}: IForm) {
  const initialState = {
    isTouched: false,
    isSubmitted: false,
    isCleared: false,
    errors: [],
  };

  const formReducer = (state: IFormState, action: IFormAction) => {
    switch (action.type) {
      case FormActionsTypes.TOUCH:
        return { ...state, isTouched: true };
      case FormActionsTypes.SUBMIT:
        return { ...state, isTouched: true, isSubmitted: true };
      case FormActionsTypes.CLEAR:
        return { ...initialState, isCleared: true };
      case FormActionsTypes.UPDATE:
        return { ...state, isCleared: false, isSubmitted: false, isTouched: true };
      case FormActionsTypes.UPDATE_ERRORS:
        return { ...state, errors: action.payload };
      default:
        return state;
    }
  };
  const [formState, formStateDispatch] = useReducer(formReducer, initialState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    formStateDispatch({ type: FormActionsTypes.SUBMIT });
    await validateFields();

    handleFormSubmit(e);
  };

  const validateFields = async () => {
    let inputErrors: Array<IError> = [];
    for (const field of fields) {
      const input = {
        name: field.fieldSchema.name,
        label: field.fieldSchema.label,
        validationSchema: field.validationSchema,
      };
      const formValues = values ? values[field.fieldSchema.name] : "";

      inputErrors = await ValidateFormInputs(inputErrors, input, formValues);
    }
    formStateDispatch({ type: FormActionsTypes.UPDATE_ERRORS, payload: inputErrors });
  };

  const handleClear = () => {
    setValues({});
    formStateDispatch({ type: FormActionsTypes.CLEAR });
  };

  const handleInputBlur = async (field: IField) => {
    if (!formState.isTouched) formStateDispatch({ type: FormActionsTypes.UPDATE });
    const formField = fields.find(formField => formField.fieldSchema.name === field.name);

    if (formField) {
      const inputField = {
        name: formField.fieldSchema.name,
        label: formField.fieldSchema.label,
        validationSchema: formField.validationSchema,
      };
      const inputErrors = await ValidateFormInputs(formState.errors, inputField, field.value);
      formStateDispatch({ type: FormActionsTypes.UPDATE_ERRORS, payload: inputErrors });
    }
  };

  const timerRef = useRef<null | NodeJS.Timeout>(null);
  const handleInputChange = async (field: IField, e: React.ChangeEvent<HTMLInputElement>) => {
    formStateDispatch({ type: FormActionsTypes.UPDATE });

    updateValues(field, e);

    const formField = fields.find(formField => formField.fieldSchema.name === field.name);
    const inputField = {
      name: formField?.fieldSchema.name,
      label: formField?.fieldSchema.label,
      validationSchema: formField?.validationSchema,
    };
    clearTimeout(timerRef.current as NodeJS.Timeout);
    timerRef.current = setTimeout(async () => {
      const inputErrors = await ValidateFormInputs(formState.errors, inputField, field.value);
      formStateDispatch({ type: FormActionsTypes.UPDATE_ERRORS, payload: inputErrors });
    }, 1000);
  };

  const updateValues = (field: IField, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, parentName } = { ...field };
    switch (type) {
      // case InputTypes.CHECKBOX:
      //   setValues({ ...values, [name]: e.target.checked });
      //   break;
      // case InputTypes.GROUP:
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
        <FieldsBuilder
          fields={fields}
          isFormSubmit={formState.isSubmitted}
          isFormCleared={formState.isCleared}
          setValues={setValues}
          values={values}
          handleInputChange={handleInputChange}
          handleInputBlur={handleInputBlur}
          errors={formState.errors}
        />
        {children}

        <div className="text-center">
          <Button type="submit" />
          {clearBtn && <Button type="reset" onClick={handleClear} />}
        </div>
      </form>
    </div>
  );
}
