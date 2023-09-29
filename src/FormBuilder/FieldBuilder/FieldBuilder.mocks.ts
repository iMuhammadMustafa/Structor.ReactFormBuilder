import { IFieldBuilder } from "./FieldBuilder";
import { IField, InputTypes } from "../Types/Field";
import { action } from "@storybook/addon-actions";

const Base: IFieldBuilder = {
  id: "Base",
  name: "Base",
  label: "Base",
  type: InputTypes.TEXT,
  value: "",

  handleInputBlur: (target: IField, e: React.FocusEvent<HTMLInputElement>) => {
    const stringMessage = `handleInputBlur called for target: ${JSON.stringify(target)} name ${e.target.name} `;
    action("handleInputBlur")(stringMessage);
  },
  handleInputChange: (target: IField, e: React.ChangeEvent<HTMLInputElement>) => {
    const stringMessage = `handleInputChange called for target: ${JSON.stringify(target)} with value: ${
      e.target.value
    }`;
    action("handleInputChange")(stringMessage);
  },
};

const WithHTMLProps: IFieldBuilder = {
  ...Base,
  name: "WithHTMLProps",
  label: "With HTML Props",
  htmlProps: { disabled: true, required: true, placeholder: "Disabled" },
};

const WithErrors: IFieldBuilder = {
  ...Base,
  label: "With Error",
  name: "username",
  isFormSubmit: true,
  errors: [
    { name: "Required", message: "This field is required", text: "This field is required", field: "username" },
    { name: "Required", message: "This field is required", text: "This field is required", field: "email" },
  ],
};

const FieldBuilderMockProps = {
  Base: Base,
  WithHTMLProps: WithHTMLProps,
  WithErrors: WithErrors,
};

export default FieldBuilderMockProps;
