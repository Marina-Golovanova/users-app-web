import { UserTableHead } from "./UserTableHead";

import type { ComponentMeta, Story } from "@storybook/react";
import type { IUserTableHeadProps } from "./UserTableHead";

export default {
  title: "UserTableHead",
  component: UserTableHead,
} as ComponentMeta<typeof UserTableHead>;

const Template: Story<IUserTableHeadProps> = (props) => {
  return <UserTableHead {...props} />;
};

export const Simple = Template.bind({});

Simple.args = {
  userTableHeads: [
    "Profile",
    "Location",
    "Email",
    "Birthday",
    "Gender",
    "Nationality",
    "Phone",
  ],
};
