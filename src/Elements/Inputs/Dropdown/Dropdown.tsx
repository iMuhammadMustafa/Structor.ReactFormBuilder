import { memo } from "react";

import HelpText from "@/Elements/UI/HelpText/HelpText";
import InvalidFeedback from "@/Elements/UI/InvalidFeedback/InvalidFeedback";
import Label from "@/Elements/UI/Label/Label";
import ValidFeedback from "@/Elements/UI/ValidFeedback/ValidFeedback";
import { IField } from "@/Types/Field";

export interface IDropdown extends IField {
  placeHolder?: string;
  helpText?: string;
  isTouched?: boolean;
  handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  htmlProps?: React.SelectHTMLAttributes<HTMLSelectElement>;
  children?: React.ReactNode;
}

function Dropdown(props: IDropdown) {
  const { id, name, placeHolder, label, value, options, helpText, isTouched, handleChange, handleBlur, errors } = {
    ...props,
  };

  const isValid = isTouched && errors?.length === 0;
  const isInvalid = isTouched && errors && errors?.length > 0;

  const isRequired = props?.validationSchema?.isRequired ?? false;

  return (
    <div className="mb-3 row">
      {label && <Label id={id || name} text={label} isRequired={isRequired} cssClasses="col-sm-2" />}
      <div className="col-sm-10">
        <select
          className={`form-select ${isValid && "is-valid"} ${isInvalid && "is-invalid"}`}
          aria-label="Default select"
          id={id || name}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value || ""}
        >
          <option value="" disabled>
            {placeHolder ?? label}
          </option>
          {options?.map(option => {
            return (
              <option key={name + "option" + option.value} value={option.value}>
                {option.label}
              </option>
            );
          })}
        </select>

        {helpText && <HelpText id={id || name} text={helpText} />}
        {isValid && <ValidFeedback id={id || name} />}
        {isInvalid && <InvalidFeedback id={id || name} errors={errors} />}
      </div>
    </div>
  );
}

export default memo(Dropdown);
