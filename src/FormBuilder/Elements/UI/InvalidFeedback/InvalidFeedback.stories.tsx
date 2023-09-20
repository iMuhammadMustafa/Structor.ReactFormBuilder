import { Meta, StoryObj } from "@storybook/react";
import InvalidFeedback from "./InvalidFeedback";
import { InvalidFeedbackMockProps } from "./InvalidFeedback.mocks";

const meta: Meta<typeof InvalidFeedback> = {
  title: "FormBuilder/UI/InvalidFeedback",
  component: InvalidFeedback,
  decorators: [
    story => {
      return (
        <form className="">
          <div className="col-2 text-center">
            <input type="text" className="form-control is-invalid" value="Wrong Input"></input>
            {story()}
          </div>
        </form>
      );
    },
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = { args: { ...InvalidFeedbackMockProps.Base } };
export const NoErrors: Story = { args: { ...InvalidFeedbackMockProps.NoErrors } };
export const WithChildren: Story = { args: { ...InvalidFeedbackMockProps.WithChildren } };
