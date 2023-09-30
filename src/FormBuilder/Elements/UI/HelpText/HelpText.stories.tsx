import { Meta, StoryObj } from "@storybook/react";

import HelpText from "./HelpText";
import { HelpTextMockProps } from "./HelpText.mocks";

const meta: Meta<typeof HelpText> = {
  title: "FormBuilder/UI/HelpText",
  component: HelpText,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = { args: { ...HelpTextMockProps.Base } };
export const WithChildren: Story = { args: { ...HelpTextMockProps.WithChildren } };
