import { IHelpText } from "./HelpText";

const Base: IHelpText = {
  id: "help-text-id",
  text: "Help text",
  cssClasses: "help-text css-classes",
};

const WithChildren: IHelpText = {
  ...Base,
  children: "Help text with children",
};

export const HelpTextMockProps = {
  Base,
  WithChildren,
};
