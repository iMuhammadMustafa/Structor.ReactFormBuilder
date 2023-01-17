import { useState } from "react";

import Form from "@Modules/FormBuilder/Components/Form/Form";
import { InputTypes } from "@Modules/FormBuilder/Components/Form/Form.Types";

export function Demo() {
  const [user, setUser] = useState();

  const checkIfUserExists = async ({ input, options }) => {
    const doesExist = await checkExternalUserExists(input);
    return !doesExist;
  };

  async function checkExternalUserExists(input) {
    return input === "Mohamed";
  }

  const formSchema = {
    title: "Register",
    clearBtn: true,
    dev: true,
    fields: [
      {
        type: "text",
        name: "username1",
        label: "Username1",
        placeHolder: "Enter your username",
        helpText: "Choose a unique username",
        validationSchema: {
          customValidators: [
            {
              name: "checkIfUserExists",
              errorMessage: "Username already exists",
              validate: checkIfUserExists,
              options: { val: "Mohamed" },
            },
          ],
          isRequired: true,
          minLength: 5,
          maxLength: 20,
          pattern: /^(0|[1-9][0-9]*)$/,
        },
      },
      {
        type: "password",
        name: "password",
        label: "Password",
        placeHolder: "Enter your username",
        helpText: "Choose a unique username",
        validationSchema: {
          isRequired: true,

          password: {
            hasNumber: true,
            minLength: 5,
            maxLength: 10,
          },
        },
      },
      {
        type: "password",
        name: "confirmPassword",
        label: "Confirm Password",
        validationSchema: {
          isRequired: true,
          matchField: { name: "Password", value: user?.password },
        },
      },
      {
        type: "text",
        name: "name",
        label: "name",
        placeHolder: "name",
        validationSchema: {},
      },
      {
        type: InputTypes.CHECKBOX,
        name: "rememberme",
        label: "Remember Me",
        helpText: "Choose a unique username",
        validationSchema: {
          isRequired: true,
        },
      },
      {
        type: InputTypes.DROPDOWN,
        name: "gender",
        label: "Gender",
        placeHolder: "Please Select",

        options: [
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
        ],
      },
      {
        type: InputTypes.GROUP,
        name: "customInput",
        label: "CustomInput",
        isDynamic: "true",
        fields: [
          {
            type: "text",
            name: "username",
            label: "Username",
            placeHolder: "Enter your username",
            helpText: "Choose a unique username",
            validationSchema: {
              //   customValidators: [
              //     {
              //       name: "checkIfUserExists",
              //       errorMessage: "Username already exists",
              //       validate: checkIfUserExists,
              //       options: { val: "Mohamed" },
              //     },
              //   ],
              isRequired: true,
              // minLength: 5,
              // maxLength: 20,
              // pattern: /^(0|[1-9][0-9]*)$/,
            },
          },
        ],
      },
    ],
  };

  const handleFormSubmit = e => {
    console.log("Form Submitted");
  };

  return (
    <>
      <Form schema={formSchema} values={user} setValues={setUser} handleFormSubmit={handleFormSubmit} />
    </>
  );
}
