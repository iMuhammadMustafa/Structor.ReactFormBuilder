import { memo } from "react";

export interface IValidFeedback extends React.HTMLProps<HTMLDivElement> {
  id: string;
  text?: string;
  cssClasses?: string;
  children?: React.ReactNode;
}

const ValidFeedback: React.FC<IValidFeedback> = ({
  id,
  text = "Looks good!",
  cssClasses = "valid-feedback",
  children,
  ...htmlProps
}) => {
  return (
    <div id={id + "-validFeeback"} className={cssClasses} {...htmlProps}>
      {text}
      {children}
    </div>
  );
};

/**
 * A React component that displays a valid feedback message to the user.
 *
 * @param id - The ID of the valid feedback element (required).
 * @param text - The valid feedback message to display (optional; defaults to "Looks good!").
 * @param children - The child component(s) to include in the valid feedback element (optional).
 * @param cssClasses - The CSS classes to apply to the valid feedback element (optional; defaults to "valid-feedback").
 * @param htmlProps - Any other HTML properties to include in the div element (optional).
 * @returns A memoized div element with the specified ID and CSS classes, containing the valid feedback message and/or child component(s).
 */
export default memo(ValidFeedback);
