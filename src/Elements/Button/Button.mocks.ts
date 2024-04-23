import { action } from "@storybook/addon-actions";

import { IButtons } from "./Button";

const Base: IButtons = {
  id: "form-base",
  className: "btn btn-primary mx-2 btn-sm",
  onClick: e => {
    console.log("Base");
    action("base")(e);
  },
};

const Submit: IButtons = {
  id: "form-submit",
  text: "Submit",
  type: "submit",
  className: "btn btn-primary mx-2 btn-sm",
  onClick: e => {
    console.log("Submit", e.target);
    action("submit")(e);
  },
};

const Clear: IButtons = {
  id: "form-clear",
  text: "Clear",
  type: "reset",
  className: "btn btn-danger mx-2 btn-sm",
  onClick: e => {
    console.log("Clear");
    action("clear")(e);
  },
};

export const ButtonsMockProps = {
  Base,
  Submit,
  Clear,
};
