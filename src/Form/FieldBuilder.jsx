import { useEffect, useState } from "react";

import CheckBoxInput from "../OldElements/Elements/CheckBoxInput";
import DropDown from "../OldElements/Elements/DropDown";
import InputGroup from "../OldElements/Elements/InputGroup";
import TextInput from "../OldElements/Elements/TextInput";
import { InputTypes } from "./Form.Types";

export default function FieldBuilder(props) {
  const { name, value, type, handleInputBlur, handleInputChange, isFormSubmit, isFormCleared } = { ...props };
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = async e => {
    setIsTouched(true);
    await handleInputBlur({ name, value, type }, e);
  };
  const handleChange = async e => {
    await handleInputChange({ name, value: e.target.value, type }, e);
  };

  useEffect(() => {
    if (isFormSubmit) {
      handleBlur({ target: { name: name, value: value } });
    }
  }, [isFormSubmit]);

  useEffect(() => {
    if (isFormCleared) {
      setIsTouched(false);
    }
  }, [isFormCleared]);

  switch (props.type) {
    case InputTypes.CHECKBOX:
      return (
        <CheckBoxInput
          {...props}
          isTouched={isTouched}
          setIsTouched={setIsTouched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );
    case InputTypes.DROPDOWN:
      return (
        <DropDown
          {...props}
          isTouched={isTouched}
          setIsTouched={setIsTouched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );
    case InputTypes.GROUP:
      return <InputGroup {...props} isTouched={isTouched} setIsTouched={setIsTouched} />;
    case InputTypes.TEXT:
    case InputTypes.EMAIL:
    case InputTypes.PASSWORD:
      return (
        <TextInput
          {...props}
          isTouched={isTouched}
          setIsTouched={setIsTouched}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      );
    default:
      return <div>Not A defined Type</div>;
  }
}
