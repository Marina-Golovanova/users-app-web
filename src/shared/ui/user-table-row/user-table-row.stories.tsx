import { UserTableRow } from "./UserTableRow";

import type { ComponentMeta, Story } from "@storybook/react";
import type { IUserTableRowProps } from "./UserTableRow";

export default {
  title: "UserTableRow",
  component: UserTableRow,
} as ComponentMeta<typeof UserTableRow>;

const Template: Story<IUserTableRowProps> = (props) => {
  return <UserTableRow {...props} />;
};

export const Simple = Template.bind({});

Simple.args = {
  firstName: "Zaire",
  lastName: "Botosh",
  avatar:
    "https://anime-star.ru/wp-content/uploads/2021/12/Nyashnye-anime-avatarki-tyan_04.jpg",
  location: "Timeless 1",
  email: "asd@gmail.com",
  birthday: "14.04.1992",
  gender: "male",
  nationality: "BR",
  phone: "(272) 790-0888",
};
