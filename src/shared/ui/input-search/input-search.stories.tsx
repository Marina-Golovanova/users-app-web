import { InputSearch } from "./InputSearch";

import type { ComponentMeta, Story } from "@storybook/react";

export default {
  title: "InputSearch",
  component: InputSearch,
} as ComponentMeta<typeof InputSearch>;

const Template: Story = (props) => {
  return <InputSearch {...props} placeholder="Search" />;
};

export const Simple = Template.bind({});
