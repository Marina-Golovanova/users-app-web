import { InputSearch } from "./InputSearch";
import { action } from "@storybook/addon-actions";

import type { ComponentMeta, Story } from "@storybook/react";
import type { IInputSearchProps } from "./InputSearch";

export default {
  title: "InputSearch",
  component: InputSearch,
} as ComponentMeta<typeof InputSearch>;

const Template: Story<IInputSearchProps> = (props) => {
  return <InputSearch {...props} />;
};

export const Simple = Template.bind({});

Simple.args = {
  placeholder: "Search",
  onSearch: action("search"),
};
