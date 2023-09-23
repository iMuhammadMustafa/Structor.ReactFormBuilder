// import Form from "@/Form/Form";
import { useState } from "react";
import HelpText from "./FormBuilder/Elements/UI/HelpText/HelpText";
import Label from "./FormBuilder/Elements/UI/Label/Label";
import Button from "./FormBuilder/Elements/Button/Button";
import TextInput from "./FormBuilder/Elements/Inputs/TextInput/TextInput";
import Form from "./FormBuilder/FormX/Form";

// import Form from "@Modules/FormBuilder/Components/Form/Form";
// import { InputTypes } from "@Modules/FormBuilder/Components/Form/Form.Types";

export function Demo() {
  const [user, setUser] = useState();

  // const checkIfUserExists = async ({ input, options }) => {
  //   const doesExist = await checkExternalUserExists(input);
  //   return !doesExist;
  // };

  async function checkExternalUserExists(input) {
    return input === "Mohamed";
  }

  const formSchema = {
    title: "Register",
    clearBtn: true,
    fields: [
      {
        type: "text",
        name: "username",
        label: "Username",
        placeHolder: "Enter your username",
        helpText: "Choose a unique username",
        validationSchema: {
          customValidators: [
            {
              name: "checkIfUserExists",
              errorMessage: "Username already exists",
              // validate: checkIfUserExists,
            },
          ],
          isRequired: true,
        },
      },
      {
        type: "email",
        name: "email",
        label: "Email",
        placeHolder: "Enter your Email",
        validationSchema: {
          customValidators: [
            {
              name: "checkIfUserExists",
              errorMessage: "Email already exists",
              // validate: checkIfUserExists,
            },
          ],
          isRequired: true,
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
            minLength: 6,
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
    ],
  };

  const handleFormSubmit = async () => {
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
      {/* <Form schema={formSchema} values={user} setValues={setUser} handleFormSubmit={handleFormSubmit}></Form> */}
      {/* <> */}
      {/* <form className="">
          <div className="col-2 ">
            <TextInput
              id="11212"
              type="text"
              name="username"
              label="Username"
              placeHolder="Enter your username"
              handleChange={e => console.log(e)}
            />
            <input type="text" className="form-control" id="validationCustom03" />
            <div className="invalid-feedback">Hello Invalid</div>
            <div className="valid-feedback">Valid</div>
          </div>
        </form>
        <div>This is Demo</div>
        <Button id="11212" type="submit" />
        <Label id="11212" htmlFor="Hello">
          HelloX
        </Label>

        <div className="row mb-3 col-5">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" />
          </div>
        </div> */}

      {/* <Form.TextInput
            value="500"
            type={"text"}
            name={"username"}
            label={"Username"}
            placeHolder={"Enter your username"}
            // helpText={"Choose a unique username"}
          /> */}
      {/* <Form.HelpText id="11212" /> */}
      {/* </> */}
      {/* </Form> */}
    </>
  );
}
