import { IError } from "./Error";

export interface IField {
  id?: string;
  name: string;
  value?: any;
  type: InputTypes;
  label?: string;
  errors?: Array<IError>;
  parentName?: string;
  children?: React.ReactNode;
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
