import { InputTypes } from "@FormBuilder/Types/Field";
import { action } from "@storybook/addon-actions";

import { IDropdown } from "./Dropdown";

const Base: IDropdown = {
  id: "Dropdown",
  name: "Gender",
  type: InputTypes.DROPDOWN,
  label: "Gender",
  options: [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Prefer Not To Choose", value: "nothing" },
  ],
  placeHolder: "Pick a gender",
  handleChange: (e: any) => {
    console.log("Submit", e.target);
    action("submit")(e.target.value);
  },
};

const Invalid: IDropdown = {
  ...Base,
  validationSchema: { isRequired: true },
  isTouched: true,
  errors: [{ fieldName: Base.name, name: "required", message: "This field is required" }],
};

const DropdownMockProps = {
  Base,
  Invalid,
};

export default DropdownMockProps;
