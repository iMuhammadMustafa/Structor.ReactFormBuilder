import { ITextInput } from "./TextInput";

const Base: ITextInput = {
  id: "TextInput",
  name: "Text Input",
};

const TextWithLabel: ITextInput = {
  ...Base,
  label: "Label",
  placeHolder: "Placeholder",
};

const TextWithHelpText: ITextInput = {
  ...TextWithLabel,
  helpText: "Text Input Help Text",
};

const TextWithDefaultValue: ITextInput = {
  ...TextWithLabel,
  defaultValue: "Text Input Default Value",
};

const TextWithRequired: ITextInput = {
  ...TextWithLabel,
  isRequired: true,
};

const TextWithDisabled: ITextInput = {
  ...TextWithLabel,
  disabled: true,
};

const TextWithValidFeedBack: ITextInput = {
  ...TextWithLabel,
  errors: [],
  isTouched: true,
};

const TextWithInvalidFeedBack: ITextInput = {
  ...TextWithLabel,
  label: "Text Input Label",
  placeHolder: "Text Input Placeholder",
  errors: [
    {
      id: "invalid-feedback-Test-error-1",
      text: "Invalid Feedback Text",
      message: "Invalid Feedback Message",
      field: "Test",
    },
    {
      id: "invalid-feedback-Test-error-2",
      text: "Invalid Feedback Text 2",
      message: "Invalid Feedback Message 2",
      field: "Test",
    },
  ],
  isTouched: true,
};

const TextInputMockProps = {
  Base,
  TextWithLabel,
  TextWithHelpText,
  TextWithDefaultValue,
  TextWithRequired,
  TextWithDisabled,
  TextWithValidFeedBack,
  TextWithInvalidFeedBack,
};

export default TextInputMockProps;
