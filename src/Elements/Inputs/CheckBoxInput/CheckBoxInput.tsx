import { memo } from "react";

import HelpText from "@/Elements/UI/HelpText/HelpText";
import InvalidFeedback from "@/Elements/UI/InvalidFeedback/InvalidFeedback";
import Label from "@/Elements/UI/Label/Label";
import ValidFeedback from "@/Elements/UI/ValidFeedback/ValidFeedback";
import { IField } from "@/Types/Field";

export interface ICheckBoxInput extends IField {
  label?: string;
  helpText?: string;
  isTouched?: boolean;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  validationSchema?: IValidationSchema;
  children?: React.ReactNode;
}

function CheckBoxInput(props: ICheckBoxInput) {
  const { id, name, type, label, value, helpText, isTouched, handleChange, handleBlur, errors } = { ...props };

  const isValid = isTouched && errors?.length === 0;
  const isInvalid = isTouched && errors && errors?.length > 0;

  const isRequired = props?.validationSchema?.isRequired ?? false;

  return (
    <div className="mb-3">
      <div className="col-sm-10 offset-sm-2">
        <div className="form-check">
          <input
            id={id || name}
            name={name}
            type="checkbox"
            role={type}
            className={`form-check-input ${isValid ? "is-valid" : ""} ${isInvalid ? "is-invalid" : ""}`}
            onChange={handleChange}
            onBlur={handleBlur}
            value={value || ""}
          />
          <Label id={id || name} text={label} cssClasses="form-check-label" isRequired={isRequired} />

          {helpText && <HelpText id={id || name} text={helpText} />}
          {(!errors || errors.length === 0) && <ValidFeedback id={id || name} />}
          {errors && errors.length > 0 && <InvalidFeedback id={id || name} errors={errors} />}
        </div>
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
