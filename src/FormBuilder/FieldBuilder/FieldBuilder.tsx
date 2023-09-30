import { useEffect, useState } from "react";
import TextInput, { ITextInput } from "../Elements/Inputs/TextInput/TextInput";
import { IField, InputTypes } from "../Types/Field";
import { IError } from "../Types/Error";
import { IButtons } from "../Elements/Button/IButton.interface";

export interface IFieldBuilder {
  fieldSchema: ITextInput;
  validationSchema?: any;
  value?: string;
  errors?: Array<IError>;
  handleInputBlur?: (target: IField | ITextInput, e: React.FocusEvent<HTMLInputElement>) => void;
  handleInputChange?: (target: IField | ITextInput, e: React.ChangeEvent<HTMLInputElement>) => void;
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

  const handleBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    setIsTouched(true);
    if (handleInputBlur) {
      await handleInputBlur({ name, value, type }, e);
    }
  };
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTouched(true);
    if (handleInputChange) {
      await handleInputChange({ name, value: e.target.value, type }, e);
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
