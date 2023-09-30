import { useState } from "react";
import Form from "./FormBuilder/Form/Form";
import { IForm, IFormSchema } from "./FormBuilder/Form/Form.types";
import { InputTypes } from "./FormBuilder/Types/Field";
import "./Demo.css";

export function Demo() {
  const [user, setUser] = useState();
  const [errors, setSerrors] = useState([]);

  const checkIfUserExists = async ({ input, options }) => {
    const doesExist = await checkExternalUserExists(input);
    return !doesExist;
  };

  async function checkExternalUserExists(input) {
    return input === "Mohamed";
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

  const handleSChemaChange = e => {
    formSchema = e.target.value;
    console.log(e.target.value);
  };

  return (
    <>
      <div className="text-center">Structor React Form Builder</div>
      <div className="row">
        {/* <div className="col-4" id="showCodeHere">
          <textarea id="showCodeHere" onChange={handleSChemaChange} value={JSON.stringify(formSchema)}></textarea>
        </div> */}
        <div className="col-12">
          <Form schema={formSchema} values={user} setValues={setUser} handleFormSubmit={handleFormSubmit}></Form>
        </div>
      </div>
    </>
  );
}
