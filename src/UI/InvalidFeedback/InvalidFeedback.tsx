import { memo } from "react";

export interface IInvalidFeedback {
  id: string;
  errors?: Array<any>;
  cssClasses?: string;
  children?: React.ReactNode;
}

const InvalidFeedback: React.FC<IInvalidFeedback> = ({ id, errors, cssClasses = "invalid-feedback", children }) => {
  return (
    <>
      {errors &&
        errors.map((error, index) => (
          <div key={error.message + index} id={id + "-invalidFeedback" + index} className={cssClasses}>
            {error.text}
            {children}
          </div>
        ))}
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
 * @returns One or more memoized error message elements with the specified IDs and CSS classes, containing the error message(s) and/or child component(s).
 */
export default memo(InvalidFeedback);
