import { Meta, StoryObj } from "@storybook/react";

import FormBuilder from "./FormBuilder";
import FormBuilderMockProps from "./FormBuilder.mocks";

const meta = {
  title: "FormBuilder",
  component: FormBuilder,
} satisfies Meta<typeof FormBuilder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...FormBuilderMockProps.Base,
  },
};
