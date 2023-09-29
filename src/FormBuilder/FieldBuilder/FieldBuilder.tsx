import { useEffect, useState } from "react";
import TextInput from "../Elements/Inputs/TextInput/TextInput";
import { ITextInput } from "../Elements/Inputs/TextInput/TextInput";
import { IField, InputTypes } from "../Types/Field";

export interface IFieldBuilder extends ITextInput {
  id: string;
  name: string;
  type: InputTypes;
  value: string;
  handleInputBlur: (target: IField, e: React.FocusEvent<HTMLInputElement>) => void;
  handleInputChange: (target: IField, e: React.ChangeEvent<HTMLInputElement>) => void;
  isFormSubmit?: boolean;
  isFormCleared?: boolean;
  children?: React.ReactNode;
}

export default function FieldBuilder(field: IFieldBuilder) {
  const { name, value, type, handleInputBlur, handleInputChange, isFormSubmit, isFormCleared, ...htmlFields } = {
    ...field,
  };
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    setIsTouched(true);
    await handleInputBlur({ name, value, type }, e);
  };
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTouched(true);
    await handleInputChange({ name, value: e.target.value, type }, e);
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

  switch (field.type) {
    case InputTypes.TEXT:
    case InputTypes.EMAIL:
    case InputTypes.PASSWORD:
      return (
        <TextInput
          {...htmlFields}
          name={name}
          value={value}
          type={type}
          isTouched={isTouched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );
    default:
      return <div>Not A defined Type</div>;
  }
}
