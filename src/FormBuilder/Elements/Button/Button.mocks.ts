import { IButtons } from "./IButton.interface";
import { action } from "@storybook/addon-actions";

const Submit: IButtons = {
  id: "form-submit",
  text: "Submit",
  type: "submit",
  cssClasses: "btn btn-primary mx-2 btn-sm",
  onClick: e => {
    console.log("Submit", e.target);
    action("submit")(e);
  },
};

const Clear: IButtons = {
  id: "form-clear",
  text: "Clear",
  type: "reset",
  cssClasses: "btn btn-danger mx-2 btn-sm",
  onClick: e => {
    console.log("Clear");
    action("clear")(e);
  },
};

export const ButtonsMockProps = {
  Submit,
  Clear,
};
