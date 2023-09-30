import { Meta, StoryObj } from "@storybook/react";

import Label from "./Label";
import LabelMockProps from "./Label.mocks";

const meta = {
  title: "FormBuilder/UI/Label",
  component: Label,
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = { args: { ...LabelMockProps.Base } };
export const Required: Story = { args: { ...LabelMockProps.Required } };
export const WithChildren: Story = { args: { ...LabelMockProps.WithChildren } };

// export default {
//   title: "FormBuilder/UI/Label",
//   component: Label,
// } satisfies Meta<typeof Label>;

// let Stories = {};

// Object.keys(LabelMockProps).forEach(key => {
//   Stories = {
//     ...Stories,
//     [key]: {
//       args: {
//         ...LabelMockProps[key as keyof typeof LabelMockProps],
//       },
//     },
//   };

//   exports[key] = {
//     args: {
//       ...LabelMockProps[key as keyof typeof LabelMockProps],
//     },
//   };
//   module.exports[key] = {
//     args: {
//       ...LabelMockProps[key as keyof typeof LabelMockProps],
//     },
//   };
// });

// // export const Base = Stories.Base;
// module.exports = { ...Stories };
