import { IError } from "./Error";

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

export interface IOption {
  label: string;
  value: string;
}

export enum InputTypes {
  TEXT = "text",
  EMAIL = "email",
  CHECKBOX = "checkbox",
  PASSWORD = "password",
  DROPDOWN = "dropdown",
  GROUP = "group",
  BUTTON = "button",
}
