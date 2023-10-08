# Structor: React Form Builder

Structor is a series of repositories that I inteded them to be building blocks for future projects.

[Documentation](https://reactformbuilder.muhammadmustafa.dev/?path=/docs/form-form--docs)

[Demo](https://reactformbuilder.muhammadmustafa.dev/?path=/story/form-form--base)

NPM: [![https://nodei.co/npm/structor-reactformbuilder.png?mini=true&downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/structor-reactformbuilder.png?mini=truedownloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/structor-reactformbuilder)

```bash
npm install --dev structor-reactformbuilder
```
```bash
yarn add --dev structor-reactformbuilder
```

## React Form Builder

This is a form builder for React, It's aimed to be very developer friendly and straight forward; you pass a schema in the form of Javascript Object to the Form Component and it builds the form. 
This schema includes the types of fields and the built in or custom validation you need for the exact input field. 

It's aimed to be a very robust and well structred form builder. 

It's as simple as defining the schema and pass it to form, there are of course the typescript restrictions to make it error proof as I possibly can. 
```jsx
  const formSchema = {
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
      {
        fieldSchema: {
          type: InputTypes.PASSWORD,
          name: "password",
          label: "Password",
          placeHolder: "Enter your password",
          helpText: "Password should be at least 8 characters long, has numbers and symbols in it",
        },
        validationSchema: {
          isRequired: true,
          passowrd: {
            hasNumber: true,
            minLength: 8,
            hasSymbol: true,
          }
        },
      },
      {
        fieldSchema: {
          type: InputTypes.PASSWORD,
          name: "password",
          label: "confirm Password",
          placeHolder: "Re-enter your password",
          helpText: "This should match the password you entered above",
        },
        validationSchema: {
          isRequired: true,
          matchField: { name: "Password", value: user?.password },
        },
      },
    ],
  };

   <Form schema={formSchema} values={user} setValues={setUser} handleFormSubmit={handleFormSubmit}></Form>
```


# Features
   - Storybook stories availabe
   - Has the following field types TestInput, Password, Email, Checkbox, Dropdown, Button and Gorup (WIP)
   - ...  


### **Dev Environment:**

- ⚡️ [Vite](https://vitejs.dev/)
- ⚛️ [React v18](https://beta.reactjs.org/) with [TypeScript](https://www.typescriptlang.org/)
- 🧪 [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- 🇸  [Storybook](https://storybook.js.org/) Storybook is a frontend workshop for building UI components and pages in isolation.
- ⚙️ [Dev tools](#dev-tools)
  - <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/ESLint_logo.svg/1200px-ESLint_logo.svg.png" width="22"> ESLint
  - <img src="https://prettier.io/icon.png" width="22"> Prettier
  - 🧰 Path alias

## Dev tools

- **ESLint**
  Check the [.eslintrc.json](blob/main/.eslintrc.json) file for more information.
- **Prettier**
  Check the [.prettierrc.json](blob/main/.prettierrc.json) file for more information.
  Configured with to automatically order and group imports by the given rules (check the `importOrder`)
- **Path Alias**
  Globally configured in tsconfig.paths.json
