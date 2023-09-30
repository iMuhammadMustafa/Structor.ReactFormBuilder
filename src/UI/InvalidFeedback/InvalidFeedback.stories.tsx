import { ComponentMeta, ComponentStory } from "@storybook/react";

import InvalidFeedback, { IInvalidFeedback } from "./InvalidFeedback";
import { InvalidFeedbackMockProps } from "./InvalidFeedback.mocks";

export default {
  component: InvalidFeedback,
  title: "FormBuilder/UI/InvalidFeedback",
  argTypes: {},
} as ComponentMeta<typeof InvalidFeedback>;

const Template: ComponentStory<typeof InvalidFeedback> = args => <InvalidFeedback {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...InvalidFeedbackMockProps.base,
} as IInvalidFeedback;
