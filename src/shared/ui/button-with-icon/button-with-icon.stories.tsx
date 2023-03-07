import { action } from "@storybook/addon-actions";
import { ButtonWithIcon } from "./ButtonWithIcon";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";

import type { ComponentMeta, Story } from "@storybook/react";
import type { IButtonWithIconProps } from "./ButtonWithIcon";

export default {
  title: "ButtonWithIcon",
  component: ButtonWithIcon,
} as ComponentMeta<typeof ButtonWithIcon>;

const SimpleTemplate: Story<IButtonWithIconProps> = (props) => {
  return <ButtonWithIcon {...props} />;
};

export const Simple = SimpleTemplate.bind({});

Simple.args = {
  icon: <ArrowLeftIcon />,
  onClick: action("onClick"),
};
