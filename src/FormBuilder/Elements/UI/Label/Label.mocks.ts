import { ILabel } from "./Label";

const Base: ILabel = {
  id: "label-id",
  text: "Label",
  cssClasses: "label css-classes",
};
const Required: ILabel = {
  id: "required-label-id",
  text: "Required Label",
  isRequired: true,
};
const WithChildren: ILabel = {
  id: "label-with-children-id",
  children: "Label with children",
};

const LabelMockProps = { Base, Required, WithChildren };
export default LabelMockProps;
