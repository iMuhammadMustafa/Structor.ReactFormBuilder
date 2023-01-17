import { memo, useEffect, useState } from "react";
import HelpText from "./UI/HelpText";
import InValidFeedback from "./UI/InValidFeedback";
import FormLabel from "./UI/Label";
import ValidFeedback from "./UI/ValidFeedback";

const CheckBoxInput = memo((props) => {
  return <MemoizedCheckBoxInput {...props} />;
});

function MemoizedCheckBoxInput({
  id,
  name,
  type,
  label,
  value,
  helpText,
  handleInputChange,
  handleInputBlur,
  isFormSubmit,
  isFormCleared,
  errors,
}) {
  const [isTouched, setIsTouched] = useState(false);

  const handleBlur = (e) => {
    setIsTouched(true);
    handleInputBlur(e);
  };
  const handleInput = (e) => {
    handleInputChange(e);
  };

  useEffect(() => {
    if (isFormSubmit) {
      setIsTouched(true);
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
        <div className="form-check">
          <input
            id={id || name}
            name={name}
            type="checkbox"
            role={type}
            className={`form-check-input ${isTouched && errors.length === 0 && "is-valid"} ${
              isTouched && errors.length > 0 && "is-invalid"
            }`}
            onChange={handleInput}
            onBlur={handleBlur}
            value={value || ""}
          />
          {/* <label className="form-check-label" htmlFor={id || name}>
            {label}
          </label> */}
        </div>

        {helpText && <HelpText id={id || name} helpText={helpText} />}
        {errors.length === 0 && <ValidFeedback id={id || name} />}
        {errors.length > 0 && <InValidFeedback id={id || name} errors={errors} />}
      </div>
    </div>
  );
}
export default CheckBoxInput;
