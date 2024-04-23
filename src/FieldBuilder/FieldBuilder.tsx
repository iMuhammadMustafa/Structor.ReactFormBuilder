import { useEffect, useState } from "react";

import CheckBoxInput from "@/Elements/Inputs/CheckBoxInput/CheckBoxInput";
import Dropdown from "@/Elements/Inputs/Dropdown/Dropdown";
import { IFormStyles, IStylesSchema } from "@/Form/Form.types";
import { IValidationSchema } from "@/Types/IValidationSchema";

import TextInput, { ITextInput } from "../Elements/Inputs/TextInput/TextInput";
import { IError } from "../Types/Error";
import { IField, InputTypes } from "../Types/Field";

export interface IFieldBuilder {
  fieldSchema: IField;
  validationSchema?: IValidationSchema;
  defaultStyles?: IFormStyles;
  stylesSchema?: IStylesSchema;
  value?: unknown;
  errors?: Array<IError>;
  handleInputBlur?:
    | ((target: IField | ITextInput, e: React.FocusEvent<HTMLInputElement>) => void)
    | ((target: IField | ITextInput, e: React.FocusEvent<HTMLSelectElement>) => void);
  handleInputChange?:
    | ((target: IField | ITextInput, e: React.ChangeEvent<HTMLInputElement>) => void)
    | ((target: IField | ITextInput, e: React.ChangeEvent<HTMLSelectElement>) => void);
  isFormSubmit?: boolean;
  isFormCleared?: boolean;
  children?: React.ReactNode;
}

export default function FieldBuilder(field: IFieldBuilder) {
  const { value, fieldSchema, handleInputBlur, handleInputChange, isFormSubmit, isFormCleared, ...htmlFields } = {
    ...field,
  };
  const { name, type } = { ...fieldSchema };
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = async (e: React.FocusEvent<any>) => {
    setIsTouched(true);
    if (handleInputBlur) {
      await handleInputBlur({ name, value, type }, e);
    }
  };
  const handleChange = async (e: React.ChangeEvent<any>) => {
    setIsTouched(true);
    if (handleInputChange) {
      switch (type) {
        case InputTypes.CHECKBOX:
          await handleInputChange({ name, value: e.target.checked, type }, e);
          break;
        default:
          await handleInputChange({ name, value: e.target.value, type }, e);
          break;
      }
    }
  };

  useEffect(() => {
    if (isFormSubmit) {
      handleBlur({ target: { name, value } } as React.FocusEvent<HTMLInputElement> & { target: { value: string } });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFormSubmit]);

  useEffect(() => {
    if (isFormCleared) {
      setIsTouched(false);
    }
  }, [isFormCleared]);

  switch (type) {
    case InputTypes.CHECKBOX:
      return (
        <CheckBoxInput
          {...field}
          {...fieldSchema}
          {...htmlFields}
          value={value}
          isTouched={isTouched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );
    case InputTypes.DROPDOWN:
      return (
        <Dropdown
          {...field}
          {...fieldSchema}
          {...htmlFields}
          value={value}
          isTouched={isTouched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );
    case InputTypes.TEXT:
    case InputTypes.EMAIL:
    case InputTypes.PASSWORD:
      return (
        <TextInput
          {...field}
          {...fieldSchema}
          {...htmlFields}
          value={value}
          isTouched={isTouched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );
    default:
      return <div>Not A defined Type</div>;
  }
}
