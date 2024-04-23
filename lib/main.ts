// import { IError } from "../src/Types/Error";
// export type { IError };
// import { IField, IOption } from "../src/Types/Field";
// export type { IField, IOption };
import FieldBuilder from "../src/FieldBuilder/FieldBuilder";
// import {IFieldsBuilder} from "../src/FieldsBuilder/FieldsBuilder";
// export type {IFieldsBuilder};
import FieldsBuilder from "../src/FieldsBuilder/FieldsBuilder";
import Form from "../src/Form/Form";
// import {IForm,  IFormSchema,  IFormState,  IFormAction,
//         IFormStyles,  IStylesSchema} from "../src/Form/Form.types";
// export type {IForm, IFormSchema, IFormState, IFormAction, IFormStyles, IStylesSchema};
import { FormActionsTypes } from "../src/Form/Form.types";
// import { ICustomValidator, IPasswordValidationSchema, IValidationSchema } from "../src/Types/IValidationSchema";
// export type { ICustomValidator, IPasswordValidationSchema, IValidationSchema };
import {
  ValidateFormInputs,
  errorTypes,
  updateErrors,
  validateBuiltInRules,
  validateCustomRules,
  validateEmailString,
  validatePasswordString,
} from "../src/Services/Validation.Service";
import { InputTypes } from "../src/Types/Field";

export { InputTypes };

export {
  ValidateFormInputs,
  validateBuiltInRules,
  validateCustomRules,
  updateErrors,
  validateEmailString,
  validatePasswordString,
  errorTypes,
};

export { FormActionsTypes };

export { Form };

export { FieldsBuilder };

export { FieldBuilder };
// import {IFieldBuilder} from "../src/FieldBuilder/FieldBuilder";
// export type {IFieldBuilder};
