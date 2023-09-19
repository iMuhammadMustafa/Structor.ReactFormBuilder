/* eslint-disable react/display-name */
import { memo } from "react";

import FormLabel from "../../OldUI/FormLabel";
import HelpText from "../../OldUI/HelpText";
import InvalidFeedback from "../../OldUI/InValidFeedback";
import ValidFeedback from "../../OldUI/ValidFeedback";

const CheckBoxInput = memo(props => {
  return <MemoizedCheckBoxInput {...props} />;
});

function MemoizedCheckBoxInput(props) {
  const { id, name, type, label, value, helpText, isTouched, handleChange, handleBlur, errors } = { ...props };

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
            onChange={handleChange}
            onBlur={handleBlur}
            value={value || ""}
          />
        </div>

        {helpText && <HelpText id={id || name} helpText={helpText} />}
        {errors.length === 0 && <ValidFeedback id={id || name} />}
        {errors.length > 0 && <InvalidFeedback id={id || name} errors={errors} />}
      </div>
    </div>
  );
}
export default CheckBoxInput;
