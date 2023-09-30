import { IInvalidFeedback } from "./InvalidFeedback";

const base: IInvalidFeedback = {
  id: "invalid-feedback-Test",
  errors: [
    {
      id: "invalid-feedback-Test-error-1",
      text: "Invalid Feedback Test error 1",
    },
  ],
  cssClasses: "invalid-feedback-class",
  children: "  children",
};

export const InvalidFeedbackMockProps = {
  base,
};
