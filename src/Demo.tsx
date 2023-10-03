import { useState } from "react";

import "./Demo.css";
import Form from "./FormBuilder/Form/Form";
import { IForm, IFormSchema } from "./FormBuilder/Form/Form.types";
import { InputTypes } from "./FormBuilder/Types/Field";

export function Demo() {
  const [user, setUser] = useState({});
  const [errors, setSerrors] = useState([]);

  const checkIfUserExists = async ({ input, options }: any) => {
    const doesExist = await checkExternalUserExists(input);
    return !doesExist;
  };

  async function checkExternalUserExists(input: any) {
    return input === "Admin";
  }

  let formSchema: IFormSchema = {
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
          helpText: "Write Admin to see validation error",
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
          type: InputTypes.CHECKBOX,
          name: "terms",
          label: "I agree to the terms and conditions",
        },
        validationSchema: {
          isRequired: true,
        },
      },
    ],
  };

  const handleFormSubmit = async () => {
    console.log("user", user);
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

  // function output(inp) {
  //   const pre = document.createElement("pre");
  //   pre.innerHTML = inp;

  //   document.getElementById("showCodeHere")?.appendChild(pre);
  // }

  // function syntaxHighlight(json) {
  //   json = json.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  //   return json.replace(
  //     /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
  //     function (match) {
  //       let cls = "number";
  //       if (/^"/.test(match)) {
  //         if (/:$/.test(match)) {
  //           cls = "key";
  //         } else {
  //           cls = "string";
  //         }
  //       } else if (/true|false/.test(match)) {
  //         cls = "boolean";
  //       } else if (/null/.test(match)) {
  //         cls = "null";
  //       }
  //       return '<span class="' + cls + '">' + match + "</span>";
  //     },
  //   );
  // }

  // output(syntaxHighlight(JSON.stringify(formSchema)));

  const handleSChemaChange = (e: any) => {
    formSchema = e.target.value;
    console.log(e.target.value);
  };

  return (
    <>
      <div className="text-center">Structor React Form Builder</div>
      <br />
      <Form schema={formSchema} values={user} setValues={setUser} handleFormSubmit={handleFormSubmit}></Form>
      {/* <div className="row">
        {/* <div className="col-4" id="showCodeHere">
          <textarea id="showCodeHere" onChange={handleSChemaChange} value={JSON.stringify(formSchema)}></textarea>
        </div> 
        <div className="col-12"></div> 
      </div>*/}
    </>
  );
}
