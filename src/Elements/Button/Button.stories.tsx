import { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";
import { ButtonsMockProps } from "./Button.mocks";

const meta: Meta<typeof Button> = {
  title: "UI/Buttons",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      story: { inline: true }, // render the story in an iframe
      canvas: { sourceState: "shown" }, // start with the source open
      source: { type: "code" }, // forces the raw source code (rather than the rendered JSX).
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Base: Story = { args: { ...ButtonsMockProps.Base } };
export const Submit: Story = { args: { ...ButtonsMockProps.Submit } };
export const Clear: Story = { args: { ...ButtonsMockProps.Clear } };
