export interface IField {
  name: string;
  value: string;
  type: InputTypes;
  children?: React.ReactNode;
}

export enum InputTypes {
  TEXT = "text",
  EMAIL = "email",
  CHECKBOX = "checkbox",
  PASSWORD = "password",
  DROPDOWN = "dropdown",
  GROUP = "group",
}
