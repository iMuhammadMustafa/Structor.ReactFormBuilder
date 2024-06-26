import { useReducer, useRef, useState } from "react";

import Button from "@/Elements/Button/Button";
import FieldsBuilder from "@/FieldsBuilder/FieldsBuilder";
import { ValidateFormInputs } from "@/Services/Validation.Service";
import { IError } from "@/Types/Error";
import { IField, InputTypes } from "@/Types/Field";

import DevInfo from "./DevInfo";
import { FormActionsTypes, IForm, IFormAction, IFormState } from "./Form.types";

export default function Form({
  values,
  setValues,
  schema: { title, fields, defaultStyles, clearBtn, dev = false },
  handleFormSubmit,
  children,
}: IForm) {
  const initialState = {
    isTouched: false,
    isSubmitted: false,
    isCleared: false,
    errors: [],
  };
  const [formValues, setFormValues] = useState<any>({});

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

      inputErrors = await ValidateFormInputs(inputErrors, input, values ? values[field.fieldSchema.name] : "");
    }
    formStateDispatch({ type: FormActionsTypes.UPDATE_ERRORS, payload: inputErrors });
  };

  const handleClear = () => {
    setValues({});
    setFormValues({});
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

  const timerRef = useRef<null | ReturnType<typeof setTimeout>>(null);
  const handleInputChange = async (field: IField, e: React.ChangeEvent<HTMLInputElement>) => {
    formStateDispatch({ type: FormActionsTypes.UPDATE });

    updateValues(field, e);

    const formField = fields.find(formField => formField.fieldSchema.name === field.name);
    const inputField = {
      name: formField?.fieldSchema.name,
      label: formField?.fieldSchema.label,
      validationSchema: formField?.validationSchema,
    };
    clearTimeout(timerRef.current as ReturnType<typeof setTimeout>);

    timerRef.current = setTimeout(
      async () => {
        const inputErrors = await ValidateFormInputs(formState.errors, inputField, field.value);
        formStateDispatch({ type: FormActionsTypes.UPDATE_ERRORS, payload: inputErrors });
      },
      field.type == InputTypes.CHECKBOX ? 0 : 1000,
    );

    // switch (field.type) {
    //   case InputTypes.CHECKBOX: {
    //     const inputErrors = await ValidateFormInputs(formState.errors, inputField, field.value);
    //     formStateDispatch({ type: FormActionsTypes.UPDATE_ERRORS, payload: inputErrors });
    //     break;
    //   }
    //   default:
    //     timerRef.current = setTimeout(async () => {
    //       const inputErrors = await ValidateFormInputs(formState.errors, inputField, field.value);
    //       formStateDispatch({ type: FormActionsTypes.UPDATE_ERRORS, payload: inputErrors });
    //     }, field.type == InputTypes.CHECKBOX ? 0 : 1000);
    // }
  };

  const updateValues = (field: IField, _e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, parentName } = { ...field };
    switch (type) {
      case InputTypes.CHECKBOX:
        setFormValues({ ...formValues, [name]: value });
        setValues(formValues);
        break;
      // case InputTypes.GROUP:
      case InputTypes.TEXT:
      case InputTypes.EMAIL:
      case InputTypes.PASSWORD:
      default: {
        if (parentName) {
          setFormValues({ ...formValues, [parentName]: { ...formValues?.parentName, [name]: value } });
        } else {
          setFormValues({ ...formValues, [name]: value });
        }
        setValues(formValues);
      }
      // parentName
      //   ? setValues({ ...values, [parentName]: { ...values?.parentName, [name]: value } })
      //   : setValues({ ...values, [name]: value });
    }
  };

  return (
    <>
      {dev && (
        <DevInfo
          isTouched={formState.isTouched}
          isSubmitted={formState.isSubmitted}
          errors={formState.errors}
          values={formValues}
        />
      )}

      <h1 className={defaultStyles?.title}>{title}</h1>
      <form onSubmit={handleSubmit} noValidate className={defaultStyles?.form}>
        <FieldsBuilder
          fields={fields}
          isFormSubmit={formState.isSubmitted}
          isFormCleared={formState.isCleared}
          setValues={setFormValues}
          values={formValues}
          defaultStyles={defaultStyles}
          handleInputChange={handleInputChange}
          handleInputBlur={handleInputBlur}
          errors={formState.errors}
        />
        {children}

        <div className={defaultStyles?.buttons?.wrapper}>
          <Button type="submit" className={defaultStyles?.buttons?.submit} />
          {clearBtn && <Button type="reset" onClick={handleClear} className={defaultStyles?.buttons?.clear} />}
        </div>
      </form>
    </>
  );
}
