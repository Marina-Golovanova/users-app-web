import { InputText } from "./InputText";

import type { ComponentMeta, Story } from "@storybook/react";

export default {
  title: "InputText",
  component: InputText,
} as ComponentMeta<typeof InputText>;

const Template: Story = (props) => {
  return <InputText {...props} placeholder="Search" />;
};

export const Simple = Template.bind({});
