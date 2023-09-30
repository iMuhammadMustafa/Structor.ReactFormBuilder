import { IError } from "@/FormBuilder/Types/Error";
import { memo } from "react";

export interface IInvalidFeedback extends React.HTMLProps<HTMLDivElement> {
  id: string;
  errors?: Array<IError>;
  cssClasses?: string;
  children?: React.ReactNode;
}

const InvalidFeedback: React.FC<IInvalidFeedback> = ({
  id,
  errors,
  cssClasses = "invalid-feedback",
  children,
  ...htmlProps
}) => {
  return (
    <>
      {errors &&
        errors.map((error, index) => (
          <div key={error.name + index} id={id + "-invalidFeedback" + index} className={cssClasses} {...htmlProps}>
            {error.message}
          </div>
        ))}
      {children}
    </>
  );
};

/**
 * A React component that displays an error message for an input element.
 *
 * @param id - The ID of the input element (required).
 * @param errors - An array of error objects containing the error message(s) to display (optional).
 * @param cssClasses - The CSS classes to apply to the error message element(s) (optional; defaults to "invalid-feedback").
 * @param children - The child component(s) to include in the error message element(s) (optional).
 * @param htmlProps - Any other HTML properties to include in the error message div element(s) (optional).
 * @returns One or more memoized error message elements with the specified IDs and CSS classes, containing the error message(s) and/or child component(s).
 */
export default memo(InvalidFeedback);
