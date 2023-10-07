import { Meta, StoryObj } from "@storybook/react";

import Dropdown from "./Dropdown";
import DropdownMockProps from "./Dropdown.mocks";

const meta = {
  title: "FormBuilder/Inputs/Dropdown",
  component: Dropdown,
  decorators: [
    Story => (
      <div className="col-6 offset-3">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...DropdownMockProps.Base,
  },
};

export const Invalid: Story = {
  args: {
    ...DropdownMockProps.Invalid,
  },
};
