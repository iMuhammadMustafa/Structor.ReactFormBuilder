import { Meta, StoryObj } from "@storybook/react";

import ValidFeedback from "./ValidFeedback";
import { ValidFeedbackMockProps } from "./ValidFeedback.mocks";

const meta: Meta<typeof ValidFeedback> = {
  title: "FormBuilder/UI/ValidFeedback",
  decorators: [
    story => {
      return (
        <form>
          <div className="col-2 text-center">
            <input type="text" className="form-control is-valid" value="Correct Input"></input>
            {story()}
          </div>
        </form>
      );
    },
  ],
  component: ValidFeedback,
};

export default meta;

type Story = StoryObj<typeof meta>;

const Base: Story = { args: { ...ValidFeedbackMockProps.Base } };

export { Base };
