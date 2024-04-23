# Structor: React Form Builder

Structor is a series of repositories that I inteded them to be building blocks for future projects.

This is a form builder for React, It's aimed to be very developer friendly and straight forward; you pass a schema in the form of Javascript Object to the Form Component and it builds the form.
This schema includes the types of fields and the built in or custom validation you need for the exact input field.

It's aimed to be a very robust and well structred form builder.

It's as simple as defining the schema and pass it to form, there are of course the typescript restrictions to make it error proof as I possibly can.

[Documentation](https://reactformbuilder.muhammadmustafa.dev/?path=/docs/form-form--docs)

[Demo](https://reactformbuilder.muhammadmustafa.dev/?path=/story/form-form--base)

NPM: [![https://nodei.co/npm/structor-reactformbuilder.png?mini=true&downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/structor-reactformbuilder.png?mini=truedownloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/structor-reactformbuilder)

# How to use the library

### 1. Install the library using npm or yarn.

```bash
npm install structor-reactformbuilder

yarn add structor-reactformbuilder
```

### 2. Import required components

```tsx
import { Form, InputTypes } from "structor-reactformbuilder";
```

### 3. Create the [Form Schema](#form-schema)

_Example of a full Schema to directly copy [below](#Full-Schema-In-Action)_

```tsx
let formSchema = {
  title: "Register",
  fields: [
    {
      fieldSchema: {
        type: InputTypes.TEXT,
        name: "username",
        label: "Username",
        placeHolder: "Enter your username",
      },
      validationSchema: {
        isRequired: true,
        customValidators: [
          {
            name: "checkIfUserExists",
            errorMessage: "Username already exists",
            validate: checkIfUserExists,
          },
        ],
      },
    },
  ],
};
```

### 4. Use the [Form Component](#form-component)

#### Form Component

Is the base component, Usage:

```tsx
const [values, setValues] = useState({});

const handleFormSubmit = (values: any) => {
  console.log(values);
};

<Form schema={formSchema} values={user} setValues={setUser} handleFormSubmit={handleFormSubmit} />;
```

The end result will be:

```tsx

<h1 className={defaultStyles?.title}>{title}</h1>
<form onSubmit={handleSubmit} noValidate className={defaultStyles?.form}>

  {/** For Each Field **/}
  <div className={fieldWrapper}>
    {/** Label **/}
    <label id={id + "-label"} htmlFor={id} className={labelStyles} >
    {/** Input Wrapper **/}
    <div className={inputWrapper}>
      {/** Input **/}
      <input className={`${inputStyles} ${isValid ? "is-valid" : ""} ${isInvalid ? "is-invalid" : ""}`}/>
      {/** Help Text **/}
      <div id={id + "-helpText"} className={helpTextStyles}>
        {text}
      </div>
      {/** Valid Feedback if the errors array is empty and input is touched. You need to override valid-feedback css Class **/}
      <div className="valid-feedback">
        {text}
      </div>
      {/** Invalid Feedback if the input is touched and for each error this will appear. You need to override invalid-feedback css Class **/}
      <>
        {errors &&
          errors.map((error, index) => (
            <div key={error.name + index} id={id + "-invalidFeedback" + index} className="invalid-feedback">
              {error.message}
            </div>
          ))}
      </>
    </div>
  </div>


  {/** Buttons **/}
  <div className={defaultStyles?.buttons?.wrapper}>
    <Button type="submit" className={defaultStyles?.buttons?.submit} />
    {clearBtn && <Button type="reset" onClick={handleClear} className={defaultStyles?.buttons?.clear} />}
  </div>
</form>

```

#### Form Schema

Schema is a JSON object that defines the form structure. It is used to generate the form and validate the form data.

```tsx
IFormSchema {
  title?: string;               // Title of the form
  fields: Array<IFieldBuilder>; // Array of fields
  dev?: boolean;                // Show dev tools
  clearBtn?: boolean;           // Show clear button
  defaultStyles?: IFormStyles; // Default styles for the form and inputs
}
```

Styles will have the following structure: (You should provide the css classes as a string)

```tsx
IFormStyles {
  title?: string;           // Title of the form
  form?: string;            // Form wrapper
  buttons?: {               // Buttons
    wrapper?: string;       // Wrapper
    submit?: string;        // Submit button
    clear?: string;         // Clear button
  };
  inputs?: IStylesSchema;
}
```

The input styles will have the following structure: (Default styles are used if no styles are provided)

```tsx
IStylesSchema {
  fieldWrapper?: string;
  inputWrapper?: string;
  input?: string;
  label?: string;
  placeHolder?: string;
  helpText?: string;
}
```

The fields should have the following structure:

```tsx
IFieldBuilder {
  fieldSchema: IField;
  validationSchema?: IValidationSchema;
  IStylesSchema?: IStylesSchema;
}
```

#### Example of a FieldBuilder:

```tsx
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
            name: "checkIfUserExists",                  // Name of the custom Validator
            errorMessage: "Username already exists",    // Error Message
            validate: checkIfUserExists,                // The function that will be called to validate the field
          },
        ],
        isRequired: true,
      },
      stylesSchema: {
        fieldWrapper: "mb-3 row",
        inputWrapper: "col-sm-10",
        input: "form-control",
        label: "col-sm-2 col-form-label",
        placeHolder: "",
        helpText: "form-text",
      }
```

```tsx
export interface IField {
  id?: string;
  name: string;
  value?: any;
  placeHolder?: string;
  helpText?: string;
  type: InputTypes;
  label?: string;
  options?: Array<IOption>;
  errors?: Array<IError>;
  validationSchema?: IValidationSchema;
  parentName?: string;
  children?: React.ReactNode;
}

interface IOption {
  label: string;
  value: string;
}

enum InputTypes {
  TEXT = "text",
  EMAIL = "email",
  CHECKBOX = "checkbox",
  PASSWORD = "password",
  DROPDOWN = "dropdown",
  GROUP = "group",
  BUTTON = "button",
}
```

#### The Validation Schema:

```tsx
interface IValidationSchema {
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  isRequired?: boolean;
  isEmail?: boolean;
  password?: IPasswordValidationSchema;
  matchField?: {
    name: string;
    value: string;
  };
  customValidators?: Array<ICustomValidator>;
}

interface IPasswordValidationSchema {
  isRequired?: boolean;
  hasNumber?: boolean;
  hasLowerCase?: boolean;
  hasUpperCase?: boolean;
  minLength?: number;
  maxLength?: number;
  hasSymbols?: boolean;
}
interface ICustomValidator {
  name: string;
  errorMessage: string;
  validate: ({ input, options }: any) => Promise<boolean>;
}
```

#### The Custom Validator should have the following structure:

It should return a boolean value that is true if the field is valid and false if it is not.

```tsx
const checkIfUserExists = async ({ input, options }: any) => {
  const doesExist = await checkExternalUserExists(input);
  return !doesExist;
};
```

#### Full Schema In Action

```tsx
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
```
