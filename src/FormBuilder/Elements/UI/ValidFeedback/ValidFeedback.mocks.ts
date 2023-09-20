import { IValidFeedback } from "./ValidFeedback";

const Base: IValidFeedback = {
  id: "TestValidFeedback",
  text: "This is a valid feedback text",
  children: "This is a valid feedback Children",
  cssClasses: "valid-feedback",
};

export const ValidFeedbackMockProps = {
  Base,
};
