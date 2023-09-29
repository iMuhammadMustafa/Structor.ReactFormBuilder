import { Meta, StoryObj } from "@storybook/react";

import FieldsBuilder from "./FieldsBuilder";
import FieldsBuilderMockProps from "./FieldsBuilder.mocks";

const meta = {
  title: "FormBuilder/FieldsBuilder",
  component: FieldsBuilder,
} satisfies Meta<typeof FieldsBuilder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...FieldsBuilderMockProps.Base,
  },
};

export const WithErrors: Story = {
  args: {
    ...FieldsBuilderMockProps.WithErrors,
  },
};
