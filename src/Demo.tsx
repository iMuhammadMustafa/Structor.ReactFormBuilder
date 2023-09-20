// import Form from "@/Form/Form";
import { useState } from "react";

// import Form from "@Modules/FormBuilder/Components/Form/Form";
// import { InputTypes } from "@Modules/FormBuilder/Components/Form/Form.Types";

export function Demo() {
  console.log(global);
  // const [user, setUser] = useState();

  // const checkIfUserExists = async ({ input, options }) => {
  //   const doesExist = await checkExternalUserExists(input);
  //   return !doesExist;
  // };

  // async function checkExternalUserExists(input) {
  //   return input === "Mohamed";
  // }

  // const formSchema = {
  //   title: "Register",
  //   clearBtn: true,
  //   fields: [
  //     {
  //       type: "text",
  //       name: "username",
  //       label: "Username",
  //       placeHolder: "Enter your username",
  //       helpText: "Choose a unique username",
  //       validationSchema: {
  //         customValidators: [
  //           {
  //             name: "checkIfUserExists",
  //             errorMessage: "Username already exists",
  //             validate: checkIfUserExists,
  //           },
  //         ],
  //         isRequired: true,
  //       },
  //     },
  //     {
  //       type: "email",
  //       name: "email",
  //       label: "Email",
  //       placeHolder: "Enter your Email",
  //       validationSchema: {
  //         customValidators: [
  //           {
  //             name: "checkIfUserExists",
  //             errorMessage: "Email already exists",
  //             validate: checkIfUserExists,
  //           },
  //         ],
  //         isRequired: true,
  //       },
  //     },
  //     {
  //       type: "password",
  //       name: "password",
  //       label: "Password",
  //       placeHolder: "Enter your username",
  //       helpText: "Choose a unique username",
  //       validationSchema: {
  //         isRequired: true,
  //         password: {
  //           hasNumber: true,
  //           minLength: 6,
  //         },
  //       },
  //     },
  //     {
  //       type: "password",
  //       name: "confirmPassword",
  //       label: "Confirm Password",
  //       validationSchema: {
  //         isRequired: true,
  //         matchField: { name: "Password", value: user?.password },
  //       },
  //     },
  //   ],
  // };

  // const handleFormSubmit = async () => {
  //   //   const res = await RegisterUser(user);
  //   //   if (!res) return;
  //   //   dispatch({ type: "LOGIN", payload: res });
  //   //   setNotifications({
  //   //     action: "ADD",
  //   //     payload: { message: "Logged In.", type: "success" },
  //   //   });
  //   //   console.log("should redirect?");
  //   //   navigate("/");
  // };

  return (
    <>
      {/* <Form schema={formSchema} values={user} setValues={setUser} handleFormSubmit={handleFormSubmit}> */}
      <>
        This is Demo
        {/* <Form.TextInput
            value="500"
            type={"text"}
            name={"username"}
            label={"Username"}
            placeHolder={"Enter your username"}
            // helpText={"Choose a unique username"}
          /> */}
        {/* <Form.HelpText id="11212" /> */}
      </>
      {/* </Form> */}
    </>
  );
}
