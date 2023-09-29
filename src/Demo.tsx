import { useState } from "react";
import Form from "./FormBuilder/Form/Form";
import { IForm, IFormSchema } from "./FormBuilder/Form/Form.types";
import { InputTypes } from "./FormBuilder/Types/Field";

export function Demo() {
  const [user, setUser] = useState();

  const checkIfUserExists = async ({ input, options }) => {
    const doesExist = await checkExternalUserExists(input);
    return !doesExist;
  };

  async function checkExternalUserExists(input) {
    return input === "Mohamed";
  }

  const formSchema: IFormSchema = {
    title: "Register",
    clearBtn: true,
    dev: true,
    fields: [
      {
        fieldSchema: {
          type: InputTypes.TEXT,
          name: "username",
          label: "Username",
          placeHolder: "Enter your username",
          helpText: "Choose a unique username",
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
      // {
      //   type: "email",
      //   name: "email",
      //   label: "Email",
      //   placeHolder: "Enter your Email",
      //   validationSchema: {
      //     customValidators: [
      //       {
      //         name: "checkIfUserExists",
      //         errorMessage: "Email already exists",
      //         // validate: checkIfUserExists,
      //       },
      //     ],
      //     isRequired: true,
      //   },
      // },
      // {
      //   type: "password",
      //   name: "password",
      //   label: "Password",
      //   placeHolder: "Enter your username",
      //   helpText: "Choose a unique username",
      //   validationSchema: {
      //     isRequired: true,
      //     password: {
      //       hasNumber: true,
      //       minLength: 6,
      //     },
      //   },
      // },
      // {
      //   type: "password",
      //   name: "confirmPassword",
      //   label: "Confirm Password",
      //   validationSchema: {
      //     isRequired: true,
      //     matchField: { name: "Password", value: user?.password },
      //   },
      // },
    ],
  };

  const handleFormSubmit = async () => {
    console.log("user", user);
    alert("Submitted");

    //   const res = await RegisterUser(user);
    //   if (!res) return;
    //   dispatch({ type: "LOGIN", payload: res });
    //   setNotifications({
    //     action: "ADD",
    //     payload: { message: "Logged In.", type: "success" },
    //   });
    //   console.log("should redirect?");
    //   navigate("/");
  };

  return (
    <>
      <div>Demo Page</div>
      <Form schema={formSchema} values={user} setValues={setUser} handleFormSubmit={handleFormSubmit}></Form>
    </>
  );
}
