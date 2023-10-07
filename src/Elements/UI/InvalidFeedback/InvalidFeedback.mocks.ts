import { IInvalidFeedback } from "./InvalidFeedback";

const Base: IInvalidFeedback = {
  id: "invalid-feedback-Test",
  errors: [
    {
      id: "invalid-feedback-Test-error-1",
      text: "Invalid Feedback Test error 1",
      message: "Invalid Feedback Test error 1",
      field: "Test",
    },
  ],
  cssClasses: "invalid-feedback",
};

const WithChildren: IInvalidFeedback = {
  id: "invalid-feedback-Test",
  errors: [
    {
      id: "invalid-feedback-Test-error-1",
      text: "Invalid Feedback Test error 1",
      message: "Invalid Feedback Test error 1",
      field: "Test",
    },
  ],
  children: "Invalid Feedback Test",
};

const NoErrors: IInvalidFeedback = {
  id: "invalid-feedback-Test",
  errors: [],
};

export const InvalidFeedbackMockProps = {
  Base,
  WithChildren,
  NoErrors,
};
