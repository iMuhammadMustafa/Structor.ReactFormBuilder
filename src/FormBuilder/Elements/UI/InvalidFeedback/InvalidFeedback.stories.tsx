import { Meta, StoryObj } from "@storybook/react";

import InvalidFeedback from "./InvalidFeedback";
import { InvalidFeedbackMockProps } from "./InvalidFeedback.mocks";

const meta: Meta<typeof InvalidFeedback> = {
  title: "FormBuilder/UI/InvalidFeedback",
  component: InvalidFeedback,
  // decorators: [
  //   Story => {
  //     return (
  //       <form className="">
  //         <div className="col-2 text-center">
  //           <input type="text" className="form-control is-invalid" value="Wrong Input"></input>
  //           <Story />
  //         </div>
  //       </form>
  //     );
  //   },
  // ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: { ...InvalidFeedbackMockProps.Base },
  render: args => {
    return (
      <WrapperForm isError={true}>
        <InvalidFeedback {...args} />
      </WrapperForm>
    );
  },
};
export const NoErrors: Story = {
  args: { ...InvalidFeedbackMockProps.NoErrors },
  render: args => {
    return (
      <WrapperForm isError={false}>
        <InvalidFeedback {...args} />
      </WrapperForm>
    );
  },
};
export const WithChildren: Story = {
  args: { ...InvalidFeedbackMockProps.WithChildren },
  render: args => {
    return (
      <WrapperForm isError={true}>
        <InvalidFeedback {...args} />
      </WrapperForm>
    );
  },
};

type WrapperFormProps = {
  isError: boolean;
  children?: React.ReactNode;
};
const WrapperForm: React.FC<WrapperFormProps> = ({ isError, children }) => {
  return (
    <form className="">
      <div className="col-2 text-center">
        <input
          type="text"
          className={`form-control ${isError ? "is-invalid" : ""}`}
          value={`${isError ? "Error" : "No Error"}`}
        ></input>
        {children}
      </div>
    </form>
  );
};
