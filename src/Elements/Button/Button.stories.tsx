import { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import { ButtonsMockProps } from "./Button.mocks";

const meta: Meta<typeof Button> = {
  title: "UI/Buttons",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Base: Story = { args: { ...ButtonsMockProps.Base } };
export const Submit: Story = { args: { ...ButtonsMockProps.Submit } };
export const Clear: Story = { args: { ...ButtonsMockProps.Clear } };
