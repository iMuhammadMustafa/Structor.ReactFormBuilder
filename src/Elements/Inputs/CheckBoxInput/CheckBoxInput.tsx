import { memo } from "react";

import HelpText from "@/Elements/UI/HelpText/HelpText";
import InvalidFeedback from "@/Elements/UI/InvalidFeedback/InvalidFeedback";
import Label from "@/Elements/UI/Label/Label";
import ValidFeedback from "@/Elements/UI/ValidFeedback/ValidFeedback";
import { IField } from "@/Types/Field";

export interface ICheckBoxInput extends IField {
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
}

function CheckBoxInput(props: ICheckBoxInput) {
  const { id, name, type, label, value, helpText, isTouched, handleChange, handleBlur, errors } = { ...props };
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
      <div className={inputWrapper}>
        <input
          id={id || name}
          name={name}
          type="checkbox"
          role={type}
          className={`${inputStyles} ${isValid ? "is-valid" : ""} ${isInvalid ? "is-invalid" : ""}`}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value || ""}
        />
        <Label id={id || name} text={label} cssClasses={labelStyles} isRequired={isRequired} />

        {helpText && <HelpText id={id || name} text={helpText} cssClasses={helpTextStyles} />}
        {(!errors || errors.length === 0) && <ValidFeedback id={id || name} />}
        {errors && errors.length > 0 && <InvalidFeedback id={id || name} errors={errors} />}
      </div>
    </div>
  );
}

/**
 * CheckBoxInput Component
 *
 * This component renders a checkbox input element with optional properties.
 *
 * @component
 * @param {string} id - The unique identifier for the checkbox input element.
 * @param {string} name - The name attribute for the checkbox input element.
 * @param {string} type - The type attribute for the checkbox input element.
 * @param {string} label - The label text associated with the checkbox.
 * @param {string} [value] - The value attribute for the checkbox input element.
 * @param {string} [helpText] - Help text to display below the checkbox.
 * @param {boolean} [isTouched] - Indicates whether the checkbox has been interacted with.
 * @param {function} [handleChange] - The function to be called when the checkbox value changes.
 * @param {function} [handleBlur] - The function to be called when the checkbox loses focus.
 * @param {React.ReactNode} [children] - Children components or elements to be rendered inside the checkbox.
 * @param {Array.<string>} [errors] - An array of error messages to display if there are validation errors.
 * @example
 * // Example usage:
 * <CheckBoxInput
 *   id="my-checkbox"
 *   name="myCheckbox"
 *   type="checkbox"
 *   label="Check this box"
 *   value="checked"
 *   helpText="Check this box to enable the feature."
 *   isTouched={true}
 *   handleChange={(event) => {
 *     console.log("Checkbox value changed:", event.target.checked);
 *   }}
 *   handleBlur={(event) => {
 *     console.log("Checkbox blurred.");
 *   }}
 *   errors= {[{ name: "required", message: "This field is required", fieldName: "CheckBoxInputInValid" }]}
 * >
 *   <span>Custom Content</span>
 * </CheckBoxInput>
 */
export default memo(CheckBoxInput);
