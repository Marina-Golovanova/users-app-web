import { SelectNumberPages } from "./SelectNumberPages";

import { ISelectProps } from "../select/Select";

import type { ComponentMeta, Story } from "@storybook/react";

export default {
  title: "SelectNumberPages",
  component: SelectNumberPages,
} as ComponentMeta<typeof SelectNumberPages>;

const Template: Story<ISelectProps> = (props) => {
  return <SelectNumberPages {...props} />;
};

export const Simple = Template.bind({});

Simple.args = {
  options: ["10", "50", "100"],
  values: ["10"],
};
