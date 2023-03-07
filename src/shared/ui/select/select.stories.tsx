import { Select } from "./Select";

import type { ComponentMeta, Story } from "@storybook/react";
import type { ISelectProps } from "./Select";

export default {
  title: "Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: Story<ISelectProps> = (props) => {
  return <Select {...props} />;
};

export const Simple = Template.bind({});

Simple.args = {
  name: "Nationality",
  options: ["RU", "RS", "US", "UK", "BR", "AB", "ES"],
  values: [],
};
