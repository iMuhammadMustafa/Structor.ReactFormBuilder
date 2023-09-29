import { Meta, StoryObj } from "@storybook/react";

import FieldBuilder from "./FieldBuilder";
import FieldBuilderMockProps from "./FieldBuilder.mocks";

const meta = {
  title: "FieldBuilder",
  component: FieldBuilder,
} satisfies Meta<typeof FieldBuilder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...FieldBuilderMockProps.Base,
  },
};
export const WithHTMLProps: Story = {
  args: {
    ...FieldBuilderMockProps.WithHTMLProps,
  },
};
