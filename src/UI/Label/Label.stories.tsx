import { ComponentMeta, ComponentStory } from "@storybook/react";

import Label, { ILabel } from "./Label";
import { LabelMockProps } from "./Label.mocks";

export default {
  component: Label,
  title: "FormBuilder/UI/Label",
  argTypes: {},
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = args => <Label {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...LabelMockProps.base,
} as ILabel;
