import { memo, useEffect, useState } from "react";

import FormLabel from "../../OldUI/FormLabel";
import HelpText from "../../UI/HelpText/HelpText";
// import HelpText from "../../OldUI/HelpText";
import InvalidFeedback from "../../OldUI/InValidFeedback";
import ValidFeedback from "../../OldUI/ValidFeedback";

const TextInput = memo(function TextInput(props) {
  return <MemoizedTextInput {...props} />;
});

export function MemoizedTextInput(props) {
  const { id, name, type, label, value, helpText, placeHolder, isTouched, handleChange, handleBlur, errors } = {
    ...props,
  };

  return (
    <div className="mb-3 row">
      <FormLabel id={id || name} label={label} className="col-sm-2" />
      <div className="col-sm-10">
        <input
          type={type}
          className={`form-control ${isTouched && errors?.length === 0 && "is-valid"} ${
            isTouched && errors?.length > 0 && "is-invalid"
          }`}
          id={id || name}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value || ""}
          placeholder={placeHolder ?? label}
        />
        {helpText && <HelpText id={id || name} helpText={helpText} />}
        {errors?.length === 0 && <ValidFeedback id={id || name} />}
        {errors?.length > 0 && <InvalidFeedback id={id || name} errors={errors} />}
      </div>
    </div>
  );
}
export default TextInput;
