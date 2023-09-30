import { IButtons } from "./Buttons";

const base: IButtons = {
  submitId: "form-submit",
  submitText: "Submit",
  submitCssClasses: "btn btn-primary mx-2 btn-sm",
  onClickSubmit: e => {
    console.log("Submit", e.target);
  },
  clearBtn: true,
  clearId: "form-clear",
  clearText: "Clear",
  clearCssClasses: "btn btn-danger btn-sm",
  onClickClear: e => {
    console.log("Clear", e.target);
  },
  children: "Buttons children",
};

export const ButtonsMockProps = {
  base,
};
