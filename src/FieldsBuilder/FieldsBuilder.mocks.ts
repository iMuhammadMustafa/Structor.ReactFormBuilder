import FieldBuilderMockProps from "../FieldBuilder/FieldBuilder.mocks";
import { IFieldsBuilder } from "./FieldsBuilder";

const FieldBuilderMockPropsBase = FieldBuilderMockProps.Base;
const FieldBuilderMockPropsWithWithHTMLProps = FieldBuilderMockProps.WithHTMLProps;

const Base: IFieldsBuilder = {
  fields: [FieldBuilderMockPropsBase, FieldBuilderMockPropsWithWithHTMLProps],
  values: { username: "test", email: "" },
  errors: [],
};

const WithErrors: IFieldsBuilder = {
  ...Base,
  isFormSubmit: true,
  errors: [
    { name: "Required", message: "This field is required", fieldName: "Base" },
    { name: "Required", message: "This field is required", fieldName: "username" },
  ],
};

const FieldsBuilderMockProps = {
  Base: Base,
  WithErrors: WithErrors,
};

export default FieldsBuilderMockProps;
