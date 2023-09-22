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
    ref: null, //Some Incompatibility between Storybook and React.HTMLProps<HTMLInputElement>?
  },
};
export const WithLabel: Story = {
  args: {
    ...TextInputMockProps.TextWithLabel,
    ref: null, //Some Incompatibility between Storybook and React.HTMLProps<HTMLInputElement>?
  },
};

export const WithHelpText: Story = {
  args: {
    ...TextInputMockProps.TextWithHelpText,
    ref: null, //Some Incompatibility between Storybook and React.HTMLProps<HTMLInputElement>?
  },
};

export const WithRequired: Story = {
  args: {
    ...TextInputMockProps.TextWithRequired,
    ref: null, //Some Incompatibility between Storybook and React.HTMLProps<HTMLInputElement>?
  },
};

export const WithDisabled: Story = {
  args: {
    ...TextInputMockProps.TextWithDisabled,
    ref: null, //Some Incompatibility between Storybook and React.HTMLProps<HTMLInputElement>?
  },
};

export const WithValidFeedback: Story = {
  args: {
    ...TextInputMockProps.TextWithValidFeedBack,
    ref: null, //Some Incompatibility between Storybook and React.HTMLProps<HTMLInputElement>?
  },
};

export const WithInvalidFeedback: Story = {
  args: {
    ...TextInputMockProps.TextWithInvalidFeedBack,
    ref: null, //Some Incompatibility between Storybook and React.HTMLProps<HTMLInputElement>?
  },
};
