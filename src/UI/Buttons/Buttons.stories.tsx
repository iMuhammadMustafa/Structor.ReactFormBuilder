import { ComponentMeta, ComponentStory } from "@storybook/react";

import Buttons, { IButtons } from "./Buttons";
import { ButtonsMockProps } from "./Buttons.mocks";

export default {
  component: Buttons,
  title: "FormBuilder/UI/Buttons",
  argTypes: { onClickSubmit: { action: "Submit clicked" }, onClickClear: { action: "Clear clicked" } },
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = args => <Buttons {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...ButtonsMockProps.base,
} as IButtons;
