import { useState } from "react";

import "./Demo.css";
import Form from "./Form/Form";
import { IForm, IFormSchema } from "./Form/Form.types";
import { InputTypes } from "./Types/Field";

export function Demo() {
  const [user, setUser] = useState({
    password: "",
  });
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
      <div className="container text-light col-7">
        <Form schema={formSchema} values={user} setValues={setUser} handleFormSubmit={handleFormSubmit}></Form>
      </div>
      {/* <div className="row">
        {/* <div className="col-4" id="showCodeHere">
          <textarea id="showCodeHere" onChange={handleSChemaChange} value={JSON.stringify(formSchema)}></textarea>
        </div> 
        <div className="col-12"></div> 
      </div>*/}
    </>
  );
}
