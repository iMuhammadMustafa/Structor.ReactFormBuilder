import { memo, useEffect, useState } from "react";

import FormLabel from "../UI/FormLabel";
import HelpText from "../UI/HelpText";
import InValidFeedback from "../UI/InValidFeedback";
import ValidFeedback from "../UI/ValidFeedback";

const TextInput = memo(function TextInput(props) {
  return <MemoizedTextInput {...props} />;
});

export function MemoizedTextInput({
  id,
  name,
  type,
  label,
  value,
  helpText,
  placeHolder,
  handleInputChange,
  handleInputBlur,
  isFormSubmit,
  isFormCleared,
  errors,
}) {
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = async e => {
    setIsTouched(true);
    await handleInputBlur({ name, value, type }, e);
  };
  const handleInput = async e => {
    await handleInputChange({ name, value, type }, e);
  };

  useEffect(() => {
    if (isFormSubmit) {
      setIsTouched(true);
      handleBlur({ target: { name: name, value: value } });
    }
  }, [isFormSubmit]);

  useEffect(() => {
    if (isFormCleared) {
      setIsTouched(false);
    }
  }, [isFormCleared]);
  return (
    <div className="mb-3 row">
      <FormLabel id={id || name} label={label} className="col-sm-2" />
      <div className="col-sm-10">
        <input
          type={type}
          className={`form-control ${isTouched && errors.length === 0 && "is-valid"} ${
            isTouched && errors.length > 0 && "is-invalid"
          }`}
          id={id || name}
          name={name}
          onChange={handleInput}
          onBlur={handleBlur}
          value={value || ""}
          placeholder={placeHolder ?? label}
        />
        {helpText && <HelpText id={id || name} helpText={helpText} />}
        {errors.length === 0 && <ValidFeedback id={id || name} />}
        {errors.length > 0 && <InValidFeedback id={id || name} errors={errors} />}
      </div>
    </div>
  );
}
export default TextInput;
