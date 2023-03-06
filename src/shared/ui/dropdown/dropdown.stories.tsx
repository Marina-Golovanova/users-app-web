import { action } from "@storybook/addon-actions";
import { Dropdown } from "./Dropdown";

import type { ComponentMeta, Story } from "@storybook/react";
import type { IDropdownProps } from "./Dropdown";

export default {
  title: "Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: Story<IDropdownProps> = (props) => {
  return <Dropdown {...props} />;
};

export const Simple = Template.bind({});

Simple.args = {
  options: ["male", "female"],
  onSelectOption: action("onSelectOption"),
};

export const WithScroll = Template.bind({});

WithScroll.args = {
  options: ["RU", "RS", "US", "UK", "BR", "AB", "ES"],
  values: ["RU"],
  onSelectOption: action("onSelectOption"),
};
