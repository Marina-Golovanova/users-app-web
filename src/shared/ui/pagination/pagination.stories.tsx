import { action } from "@storybook/addon-actions";
import { Pagination } from "./Pagination";

import type { ComponentMeta, Story } from "@storybook/react";
import type { IPaginationProps } from "./Pagination";

export default {
  title: "Pagination",
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: Story<IPaginationProps> = (props) => {
  return <Pagination {...props} />;
};

export const Simple = Template.bind({});

Simple.args = {
  currentPage: 1,
  totalPages: 10,
  onNextPage: action("onNextPage"),
  onPrevPage: action("onPrevPage"),
};
