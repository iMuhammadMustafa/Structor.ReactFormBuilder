import { useArgs } from "@storybook/client-api";
import { Meta, StoryObj } from "@storybook/react";

import CheckBoxInput from "./CheckBoxInput";
import CheckBoxInputMockProps from "./CheckBoxInput.mocks";

const meta = {
  title: "Inputs/CheckBoxInput",
  component: CheckBoxInput,
} satisfies Meta<typeof CheckBoxInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...CheckBoxInputMockProps.Base,
  },
};

export const InvalidFeedback: Story = {
  args: {
    ...CheckBoxInputMockProps.Invalid,
  },
};
export const ValidFeedback: Story = {
  args: {
    ...CheckBoxInputMockProps.Valid,
  },
};

// export const InvalidFeedback: Story = {
//   args: { ...CheckBoxInputMockProps.Invalid },
//   decorators: [ (Story) => (

//     const [{ isOpen }, updateArgs] = useArgs();
//   )]
//   render: args => {
//     const handleChange = () => {

//       updateArgs({ erros: [] });
//     };
//     return <CheckBoxInput handleChange={handleChange} {...args} />;
//   },
// };
