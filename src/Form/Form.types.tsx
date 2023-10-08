import { IFieldBuilder } from "@/FieldBuilder/FieldBuilder";
import { IError } from "@/Types/Error";

export interface IForm {
  values: any;
  setValues: any;
  setErrors?: any;
  schema: IFormSchema;
  handleFormSubmit: any;
  children?: React.ReactNode;
}

export interface IFormSchema {
  title?: string;
  defaultStyles?: IFormStyles;
  fields: Array<IFieldBuilder>;
  errors?: Array<IError>;
  dev?: boolean;
  clearBtn?: boolean;
}

export interface IFormState {
  isTouched: boolean;
  isSubmitted: boolean;
  isCleared: boolean;
  errors: Array<IError>;
}

export interface IFormAction {
  type: FormActionsTypes;
  payload?: any;
}

export enum FormActionsTypes {
  TOUCH = "TOUCH",
  SUBMIT = "SUBMIT",
  CLEAR = "CLEAR",
  UPDATE = "UPDATE",
  UPDATE_ERRORS = "UPDATE_ERRORS",
}

export interface IFormStyles {
  title?: string;
  form?: string;
  buttons?: {
    wrapper?: string;
    submit?: string;
    clear?: string;
  };
  inputs?: IStylesSchema;
}

export interface IStylesSchema {
  fieldWrapper?: string;
  inputWrapper?: string;
  input?: string;
  label?: string;
  placeHolder?: string;
  helpText?: string;
}
