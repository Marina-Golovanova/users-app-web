import { SelectNumberPages } from "./SelectNumberPages";

import type { ComponentMeta, Story } from "@storybook/react";
import type { ISelectNumberPagesProps } from "./SelectNumberPages";

export default {
  title: "SelectNumberPages",
  component: SelectNumberPages,
} as ComponentMeta<typeof SelectNumberPages>;

const Template: Story<ISelectNumberPagesProps> = (props) => {
  return <SelectNumberPages {...props} />;
};

export const Simple = Template.bind({});

Simple.args = {
  options: ["10", "50", "100"],
  value: "10",
};
