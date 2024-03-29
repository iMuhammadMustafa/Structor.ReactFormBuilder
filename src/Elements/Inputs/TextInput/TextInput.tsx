import { memo } from "react";

import { IError } from "@/Types/Error";
import { IField, InputTypes } from "@/Types/Field";

import HelpText from "../../UI/HelpText/HelpText";
import InvalidFeedback from "../../UI/InvalidFeedback/InvalidFeedback";
import Label from "../../UI/Label/Label";
import ValidFeedback from "../../UI/ValidFeedback/ValidFeedback";

export interface ITextInput extends IField {
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  htmlProps?: React.HTMLProps<HTMLInputElement>;
}

function TextInput({
  id,
  name,
  type = InputTypes.TEXT,
  label,
  value = "",
  helpText,
  placeHolder,
  isTouched,
  handleChange,
  handleBlur,
  errors,
  defaultStyles,
  stylesSchema,
  // cssClasses = "form-control",
  htmlProps,
  ...props
}: ITextInput) {
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
      {label && <Label id={id || name} cssClasses={labelStyles} text={label} isRequired={isRequired} />}
      <div className={inputWrapper}>
        <input
          type={type}
          className={`${inputStyles} ${isValid ? "is-valid" : ""} ${isInvalid ? "is-invalid" : ""}`}
          id={id || name}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          value={value}
          placeholder={placeHolder ?? label ?? name}
          {...htmlProps}
        />
        {helpText && <HelpText id={id || name} text={helpText} cssClasses={helpTextStyles} />}
        {(!errors || errors?.length === 0) && <ValidFeedback id={id || name} />}
        {errors && errors?.length > 0 && <InvalidFeedback id={id || name} errors={errors} />}
      </div>
    </div>
  );
}

/**
 * A text input component for forms.
 *
 * @component
 * @param {object} props - The props for this component.
 * @param {string} id - The unique identifier for the input element.
 * @param {string} name - The name of the input element.
 * @param {string} type="text" - The type of the input element (default is "text").
 * @param {string} label - The label for the input element. (optionals)
 * @param {string} value="" - The current value of the input element (default is an empty string).
 * @param {string} helpText - Additional help text to display below the input.
 * @param {string} placeHolder - The placeholder text for the input element (default is the label or name).
 * @param {boolean} isTouched - Indicates whether the input has been touched (default is false).
 * @param {function} handleChange - A callback function to handle input changes.
 * @param {function} handleBlur - A callback function to handle input blur events.
 * @param {Array<IError>} errors - An array of error objects to display.
 * @param {string} cssClasses="form-control" - Additional CSS classes to apply to the input element (default is "form-control").
 * @param {React.ReactNode} children - Additional children elements.
 * @returns {JSX.Element} A React element representing the text input component.
 * @example
 * // Example usage of TextInput component:
 * <TextInput
 *   id="username"
 *   name="username"
 *   type="text"
 *   label="Username"
 *   value={usernameValue}
 *   helpText="Enter your username"
 *   isTouched={isUsernameTouched}
 *   handleChange={handleUsernameChange}
 *   handleBlur={handleUsernameBlur}
 *   errors={usernameErrors}
 *   cssClasses="custom-input"
 * >
 *   //* Additional child elements *
 * </TextInput>
 */
export default memo(TextInput);
