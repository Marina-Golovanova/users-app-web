import { action } from "@storybook/addon-actions";
import { Filter } from "./Filter";

import type { ComponentMeta, Story } from "@storybook/react";
import type { IFilterProps } from "./Filter";

export default {
  title: "Filter",
  component: Filter,
} as ComponentMeta<typeof Filter>;

const Template: Story<IFilterProps> = (props) => {
  return <Filter {...props} />;
};

export const Simple = Template.bind({});

Simple.args = {
  name: "Nationality",
};

export const WithSelectedValue = Template.bind({});

WithSelectedValue.args = {
  name: "Gender equal",
  value: "male",
  isResetAvailable: true,
  onFilterClick: action("onFilter"),
  onDeleteIconClick: action("onDelete"),
};
