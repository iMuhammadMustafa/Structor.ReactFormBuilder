import { memo } from "react";

export interface IButtons {
  id?: string;
  text?: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  cssClasses?: string;
  htmlProps?: React.HTMLFactory<HTMLDivElement>;
  children?: React.ReactNode;
}

const Buttons: React.FC<IButtons> = ({
  id,
  text,
  type = "button",
  cssClasses = "btn btn-primary mx-2 btn-sm",
  onClick,
  children,
  htmlProps,
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
        text = "Click";
    }
  }

  return (
    <>
      <button type={type} id={id} className={cssClasses} onClick={onClick} {...htmlProps}>
        {text}
        {children}
      </button>
    </>
  );
};

/**
 * Buttons Component
 *
 * This component renders a button element with optional properties.
 *
 * @component
 * @param {string} [id] - The id attribute for the button element.
 * @param {string} [text] - The text displayed on the button. Defaults to "Click" if not provided.
 * @param {"button" | "submit" | "reset" | undefined} [type] - The type of button. Defaults to "button".
 * @param {function} [onClick] - The function to be called when the button is clicked.
 * @param {string} [cssClasses] - Additional CSS classes to be applied to the button.
 * @param {Object} [htmlProps] - Additional HTML properties to be applied to the button.
 * @param {React.ReactNode} [children] - Children components or elements to be rendered inside the button.
 * @example
 * // Example usage:
 * <Buttons
 *   id="my-button"
 *   text="Click Me"
 *   type="button"
 *   cssClasses="custom-button"
 *   onClick={(event) => {
 *     console.log("Button clicked!");
 *   }}
 * >
 *   <span>Custom Content</span>
 * </Buttons>
 */
export default memo(Buttons);
