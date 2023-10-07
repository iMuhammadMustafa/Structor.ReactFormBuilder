import { Meta, StoryObj } from "@storybook/react";

import TemplateComponent from "./TemplateComponent";
import TemplateComponentMockProps from "./TemplateComponent.mocks";

const meta = {
  title: "Template/TemplateComponent",
  component: TemplateComponent,
} satisfies Meta<typeof TemplateComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    ...TemplateComponentMockProps.Base,
  },
};
