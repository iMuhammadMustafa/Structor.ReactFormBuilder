import { Meta, StoryObj } from "@storybook/react";

import Form from "./Form";
import FormMockProps from "./Form.mocks";

const meta = {
  title: "Form/Form",
  component: Form,
} satisfies Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...FormMockProps.Base,
  },
};
