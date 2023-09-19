import { memo } from "react";

export interface ILabel {
  id: string;
  text?: string;
  isRequired?: boolean;
  cssClasses?: string;
  cssRequiredClasses?: string;
  children?: React.ReactNode;
}

const Label: React.FC<ILabel> = ({
  id,
  text,
  isRequired = false,
  cssClasses = "form-label",
  cssRequiredClasses = "text-danger",
  children,
}) => {
  return (
    <label id={id + "-label"} htmlFor={id} className={cssClasses}>
      {text}
      {isRequired && <span className={cssRequiredClasses}>*</span>}
      {children}
    </label>
  );
};


/**
 * A React component that displays a label for an input element.
 * 
 * @param id - The ID of the label element (required).
 * @param text - The text to display in the label element (optional).
 * @param isRequired - Whether the input element is required (optional; defaults to false).
 * @param cssClasses - The CSS classes to apply to the label element (optional; defaults to "form-label").
 * @param cssRequiredClasses - The CSS classes to apply to the asterisk indicating a required input (optional; defaults to "text-danger").
 * @param children - The child component(s) to include in the label element (optional).
 * @returns A memoized label element with the specified ID and CSS classes, containing the label text, an asterisk if the input is required, and/or child component(s).
 */
export default memo(Label);
