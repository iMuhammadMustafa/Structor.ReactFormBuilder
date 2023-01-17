import { useEffect, useState } from "react";
import HelpText from "./UI/HelpText";
import InValidFeedback from "./UI/InValidFeedback";
import FormLabel from "./UI/Label";
import ValidFeedback from "./UI/ValidFeedback";

export default function DropDown({
  id,
  name,
  label,
  value,
  helpText,
  placeHolder,
  handleInputChange,
  handleInputBlur,
  isFormSubmit,
  isFormCleared,
  errors,
  options,
}) {
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = async (e) => {
    setIsTouched(true);
    await handleInputBlur(e);
  };
  const handleInput = async (e) => {
    await handleInputChange(e);
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
        <select
          className={`form-select ${isTouched && errors.length === 0 && "is-valid"} ${
            isTouched && errors.length > 0 && "is-invalid"
          }`}
          aria-label="Default select example"
          id={id || name}
          name={name}
          onChange={handleInput}
          onBlur={handleBlur}
          value={value || ""}
        >
          <option value="">{placeHolder ?? label}</option>
          {options?.map((option) => {
            return (
              <option key={name + "option" + option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>

        {helpText && <HelpText id={id || name} helpText={helpText} />}
        {errors.length === 0 && <ValidFeedback id={id || name} />}
        {errors.length > 0 && <InValidFeedback id={id || name} errors={errors} />}
      </div>
    </div>
  );
}
