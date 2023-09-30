import { memo } from "react";
import { IButtons } from "./IButton.interface";

const Buttons: React.FC<IButtons> = ({
  id = "form-submit",
  text,
  type = "submit",
  cssClasses = "btn btn-primary mx-2 btn-sm",
  onClick,
  children,
  ...htmlProps
}) => {
  if (!text) {
    switch (type) {
      case "submit":
        text = "Submit";
        break;
      case "reset":
        text = "Clear";
        break;
      default:
        text = "?";
    }
  }

  return (
    <>
      <button id={id} type={type} className={cssClasses} onClick={e => onClick && onClick(e)} {...htmlProps}>
        {text}
        {children}
      </button>
    </>
  );
};

/**
 * @description
 * This is a memoized component that renders a button.
 *
 * @param {IButtons} props - The props object.
 * @returns {React.FC<IButtons>} - A memoized component that renders a button.
 * @example
 * <Buttons id="form-submit" text="Submit" cssClasses="btn btn-primary mx-2 btn-sm" onClick={e => console.log(e)} />
 */
export default memo(Buttons);
