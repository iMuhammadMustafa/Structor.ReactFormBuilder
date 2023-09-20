import { memo } from "react";
//extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>
//extends React.LabelHTMLAttributes<HTMLLabelElement>
//React.HTMLAttributes<HTMLLabelElement>
export interface ILabel extends React.HTMLProps<HTMLLabelElement> {
  id: string;
  text?: string;
  isRequired?: boolean;
  cssClasses?: string;
  requiredCssClasses?: string;
  children?: React.ReactNode;
}

const Label: React.FC<ILabel> = ({
  id,
  text,
  isRequired = false,
  cssClasses = "form-label",
  requiredCssClasses = "text-danger",
  children,
  ...htmlProps
}) => {
  return (
    <label id={id + "-label"} htmlFor={id} className={cssClasses} {...htmlProps}>
      {text}
      {isRequired && <span className={requiredCssClasses}> * </span>}
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
 * @param requiredCssClasses? - The CSS classes to apply to the asterisk indicating a required input (optional; defaults to "text-danger").
 * @param children? - The child component(s) to include in the label element (optional).
 * @param htmlProps - Any other HTML properties to include in the label element (optional).
 * @returns A memoized label element with the specified ID and CSS classes, containing the label text, an asterisk if the input is required, and/or child component(s).
 */
export default memo(Label);
