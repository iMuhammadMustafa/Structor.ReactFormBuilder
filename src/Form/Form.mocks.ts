import { useState } from "react";

import { InputTypes } from "@/Types/Field";
import { action } from "@storybook/addon-actions";

import { IForm, IFormSchema } from "./Form.types";

// const [user, setUser] = useState({});
// const [errors, setSerrors] = useState([]);
let user: any = {};
const setUser = (newValue: any) => {
  user = newValue;
};

const checkIfUserExists = async ({ input, options }: any) => {
  const doesExist = await checkExternalUserExists(input);
  return !doesExist;
};

async function checkExternalUserExists(input: any) {
  return input === "Admin";
}

const formSchema: IFormSchema = {
  title: "Register",
  clearBtn: true,
  dev: true,
  defaultStyles: {
    title: "text-center mb-3",
    form: "row",
    buttons: {
      wrapper: "text-center",
      submit: "btn btn-primary mx-2 btn-sm",
      clear: "btn btn-danger mx-2 btn-sm",
    },
    inputs: {
      fieldWrapper: "mb-3 row",
      inputWrapper: "col-sm-10",
      input: "form-control",
      label: "col-sm-2 col-form-label",
      placeHolder: "",
      helpText: "form-text",
    },
  },
  fields: [
    {
      fieldSchema: {
        type: InputTypes.TEXT,
        name: "username",
        label: "Username",
        placeHolder: "Enter your username",
        helpText: "Write Admin to see validation error",
      },
      stylesSchema: {
        fieldWrapper: "mb-3 row",
        inputWrapper: "col-sm-10",
        input: "form-control",
        label: "col-sm-2 col-form-label",
        placeHolder: "",
        helpText: "form-text",
      },
      validationSchema: {
        customValidators: [
          {
            name: "checkIfUserExists",
            errorMessage: "Username already exists",
            validate: checkIfUserExists,
          },
        ],
        isRequired: true,
      },
    },
    {
      fieldSchema: {
        type: InputTypes.EMAIL,
        name: "email",
        label: "Email",
        placeHolder: "Enter your Email",
      },
      validationSchema: {
        isRequired: true,
        isEmail: true,
      },
    },
    {
      fieldSchema: {
        type: InputTypes.PASSWORD,
        name: "password",
        label: "Password",
        placeHolder: "Password",
        helpText: "Should be at least 8 characters long, contain at least 1 number and 1 special character.",
      },
      validationSchema: {
        isRequired: true,
        password: {
          minLength: 8,
          hasNumber: true,
          hasLowerCase: true,
          hasUpperCase: true,
          hasSymbols: true,
        },
      },
    },
    {
      fieldSchema: {
        type: InputTypes.PASSWORD,
        name: "confirmPassword",
        label: "Confirm Password",
        placeHolder: "Password",
        helpText: "Should match password",
      },
      validationSchema: {
        isRequired: true,
        matchField: { name: "Password", value: user?.password },
      },
    },
    {
      fieldSchema: {
        type: InputTypes.DROPDOWN,
        name: "gender",
        label: "Gender",
        helpText: "You don't have to pick one",
        options: [
          { label: "Male", value: "male" },
          { label: "Female", value: "female" },
          { label: "Prefer Not To Choose", value: "nothing" },
        ],
      },
      stylesSchema: {
        input: "form-select",
      },
    },
    {
      fieldSchema: {
        type: InputTypes.CHECKBOX,
        name: "terms",
        label: "I agree to the terms and conditions",
      },
      validationSchema: {
        isRequired: true,
      },
      stylesSchema: {
        fieldWrapper: "mb-3 row",
        inputWrapper: "form-check col-sm-10 offset-sm-2",
        input: "form-check-input me-2 ",
        label: "form-check-label",
      },
    },
  ],
};

const handleFormSubmit = async (values: any) => {
  action("Submit")(user);
};

const Base: IForm = {
  schema: formSchema,
  values: user,
  setValues: setUser,
  handleFormSubmit: handleFormSubmit,
};

const FormMockProps = {
  Base: Base,
};

export default FormMockProps;
