import { Meta, StoryObj } from "@storybook/react";

import TextInput from "./TextInput";
import TextInputMockProps from "./TextInput.mocks";

const meta = {
  title: "FormBuilder/Inputs/TextInput",
  component: TextInput,
  decorators: [
    Story => (
      <div className="col-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...TextInputMockProps.Base,
  },
};
export const WithLabel: Story = {
  args: {
    ...TextInputMockProps.TextWithLabel,
  },
};

export const WithHelpText: Story = {
  args: {
    ...TextInputMockProps.TextWithHelpText,
  },
};

export const WithRequired: Story = {
  args: {
    ...TextInputMockProps.TextWithRequired,
  },
};

export const WithDisabled: Story = {
  args: {
    ...TextInputMockProps.TextWithDisabled,
  },
};

export const WithValidFeedback: Story = {
  args: {
    ...TextInputMockProps.TextWithValidFeedBack,
  },
};

export const WithInvalidFeedback: Story = {
  args: {
    ...TextInputMockProps.TextWithInvalidFeedBack,
  },
};
