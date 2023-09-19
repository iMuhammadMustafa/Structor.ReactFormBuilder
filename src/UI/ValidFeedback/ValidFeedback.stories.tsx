import { ComponentMeta, ComponentStory } from "@storybook/react";

import ValidFeedback, { IValidFeedback } from "./ValidFeedback";
import { ValidFeedbackMockProps } from "./ValidFeedback.mocks";

export default {
  component: ValidFeedback,
  title: "FormBuilder/UI/ValidFeedback",
  argTypes: {},
} as ComponentMeta<typeof ValidFeedback>;

const Template: ComponentStory<typeof ValidFeedback> = args => <ValidFeedback {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...ValidFeedbackMockProps.base,
} as IValidFeedback;
