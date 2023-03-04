import { action } from "@storybook/addon-actions";
import { Filter } from "./Filter";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";

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

export const PageFilter = Template.bind({});

PageFilter.args = {
  value: "10",
  size: "m",
  filterIcon: <ArrowDownIcon />,
  filterIconSize: "m",
  label: "Rows per page:",
  onFilterClick: action("onFilter"),
  onFilterIconClick: action("onFilterIcon"),
};
