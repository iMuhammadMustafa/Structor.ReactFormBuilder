import { memo } from "react";

import HelpText from "@/Elements/UI/HelpText/HelpText";
import InvalidFeedback from "@/Elements/UI/InvalidFeedback/InvalidFeedback";
import Label from "@/Elements/UI/Label/Label";
import ValidFeedback from "@/Elements/UI/ValidFeedback/ValidFeedback";
import { IField } from "@/Types/Field";

export interface IDropdown extends IField {
  handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  htmlProps?: any;
}

function Dropdown(props: IDropdown) {
  const { id, name, placeHolder, label, value, options, helpText, isTouched, handleChange, handleBlur, errors } = {
    ...props,
  };
  const { defaultStyles, stylesSchema } = { ...props };

  const isValid = isTouched && errors?.length === 0;
  const isInvalid = isTouched && errors && errors?.length > 0;

  const isRequired = props?.validationSchema?.isRequired ?? false;

  const fieldWrapper = stylesSchema?.fieldWrapper ?? defaultStyles?.inputs?.fieldWrapper;
  const inputWrapper = stylesSchema?.inputWrapper ?? defaultStyles?.inputs?.inputWrapper;
  const inputStyles = stylesSchema?.input ?? defaultStyles?.inputs?.input;
  const labelStyles = stylesSchema?.label ?? defaultStyles?.inputs?.label;
  const helpTextStyles = stylesSchema?.helpText ?? defaultStyles?.inputs?.helpText;

  return (
    <div className={fieldWrapper}>
      {label && <Label id={id || name} text={label} isRequired={isRequired} cssClasses={labelStyles} />}
      <div className={inputWrapper}>
        <select
          className={`${inputStyles} ${isValid && "is-valid"} ${isInvalid && "is-invalid"}`}
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

        {helpText && <HelpText id={id || name} text={helpText} cssClasses={helpTextStyles} />}
        {isValid && <ValidFeedback id={id || name} />}
        {isInvalid && <InvalidFeedback id={id || name} errors={errors} />}
      </div>
    </div>
  );
}

export default memo(Dropdown);
