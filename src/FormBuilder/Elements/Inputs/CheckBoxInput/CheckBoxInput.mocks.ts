import { InputTypes } from "@FormBuilder/Types/Field";
import { action } from "@storybook/addon-actions";
import { useArgs } from "@storybook/client-api";

import { ICheckBoxInput } from "./CheckBoxInput";

const Base: ICheckBoxInput = {
  id: "CheckBoxInput",
  name: "CheckBoxInput",
  type: InputTypes.CHECKBOX,
  label: "Do you agree to the terms and conditions?",
  helpText: "Please read the terms and conditions before agreeing.",
  children: "Base",
};

const Invalid: ICheckBoxInput = {
  ...Base,
  id: "CheckBoxInputInValid",
  name: "CheckBoxInputInValid",
  isTouched: true,
  errors: [{ name: "required", message: "This field is required", fieldName: "CheckBoxInputInValid" }],

  handleChange: e => {
    action("handleChange")((Invalid.errors = []));
  },
};

const Valid: ICheckBoxInput = {
  ...Base,
  id: "CheckBoxInputInValid",
  name: "CheckBoxInputInValid",
  isTouched: true,
  validationSchema: {
    isRequired: false,
  },
};

const CheckBoxInputMockProps = {
  Base,
  Invalid,
  Valid,
};

export default CheckBoxInputMockProps;
