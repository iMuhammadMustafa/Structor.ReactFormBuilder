import { ComponentMeta, ComponentStory } from "@storybook/react";

import HelpText, { IHelpText } from "./HelpText";
import { HelpTextMockProps } from "./HelpText.mocks";

export default {
  component: HelpText,
  title: "FormBuilder/UI/HelpText",
  argTypes: {},
} as ComponentMeta<typeof HelpText>;

const Template: ComponentStory<typeof HelpText> = args => <HelpText {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...HelpTextMockProps.base,
} as IHelpText;
