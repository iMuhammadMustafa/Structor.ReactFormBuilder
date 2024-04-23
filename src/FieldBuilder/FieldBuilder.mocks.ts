import { action } from "@storybook/addon-actions";

import { IField, InputTypes } from "../Types/Field";
import { IFieldBuilder } from "./FieldBuilder";

const Base: IFieldBuilder = {
  fieldSchema: {
    id: "Base",
    name: "Base",
    label: "Base",
    type: InputTypes.TEXT,
    value: "",
  },
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
  fieldSchema: {
    ...Base.fieldSchema,
    name: "WithHTMLProps",
    label: "With HTML Props",
    // htmlProps: { disabled: true, required: true, placeholder: "Disabled" },
  },
};

const WithErrors: IFieldBuilder = {
  ...Base,
  isFormSubmit: true,
  fieldSchema: {
    ...Base.fieldSchema,
    name: "username",
    label: "With Error",
    errors: [
      { name: "Required", message: "This field is required", text: "This field is required", fieldName: "username" },
      { name: "Required", message: "This field is required", text: "This field is required", fieldName: "email" },
    ],
  },
};

const FieldBuilderMockProps = {
  Base: Base,
  WithHTMLProps: WithHTMLProps,
  WithErrors: WithErrors,
};

export default FieldBuilderMockProps;
