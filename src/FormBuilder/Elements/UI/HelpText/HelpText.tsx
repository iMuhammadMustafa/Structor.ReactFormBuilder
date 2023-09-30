import { memo } from "react";
// import FormTest from "../../Form/FormTest";

// import FormTest from "../../Form/FormTest";

export interface IHelpText {
  id: string;
  text?: string;
  cssClasses?: string;
  htmlProps?: React.HTMLFactory<HTMLDivElement>;
  children?: React.ReactNode;
}

// const MemoizedHelpText: React.FC<IHelpText> = ({ id, text, cssClasses = "form-text", children }) => {
//   return (
//     <div id={id + "-helpText"} className={cssClasses}>
//       {text}mmmmmmmmmmmm
//       {children}
//     </div>
//   );
// };

// /**
//  * A React component that provides help text to the user.
//  *
//  * @param id - The ID of the help text element (required).
//  * @param text - The text message to display (optional).
//  * @param cssClasses - The CSS classes to apply to the help text element (optional).
//  * @param children - The child component(s) to include in the help text element (optional). could be used instead of text prarameter.
//  * @returns A memoized div element with the specified ID and CSS classes, containing the text and/or child component(s).
//  */
// const HelpText = memo(MemoizedHelpText);
// export default HelpText;

/**
         * A method in first level, just for test

         */

const HelpText: React.FC<IHelpText> = ({ id, text, cssClasses = "form-text", children, htmlProps }) => {
  return (
    <div id={id + "-helpText"} className={cssClasses} {...htmlProps}>
      {text}
      {children}
    </div>
  );
};

/**
 * A React component that provides help text to the user.
 * @typedef HelpText
 * @param id - The ID of the help text element (required).
 * @param text - The text message to display (optional).
 * @param cssClasses - The CSS classes to apply to the help text element (optional).
 * @param children - The child component(s) to include in the help text element (optional). could be used instead of text prarameter.
 * @param htmlProps - Any other HTML properties to include in the help text div element (optional).
 * @returns A memoized div element with the specified ID and CSS classes, containing the text and/or child component(s).
 */
export default memo(HelpText);
