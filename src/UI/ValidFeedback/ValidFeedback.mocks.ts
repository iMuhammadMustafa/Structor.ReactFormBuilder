import { IValidFeedback } from "./ValidFeedback";

const base: IValidFeedback = {
  id: "TestValidFeedback",
  text: "This is a valid feedback text",
  children: "This is a valid feedback Children",
  cssClasses: "valid-feedback",
};

export const ValidFeedbackMockProps = {
  base,
};
