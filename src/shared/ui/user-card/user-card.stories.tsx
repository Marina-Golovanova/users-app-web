import { UserCard } from "./UserCard";

import type { ComponentMeta, Story } from "@storybook/react";
import type { IUserCardProps } from "./UserCard";

export default {
  title: "UserCard",
  component: UserCard,
} as ComponentMeta<typeof UserCard>;

const Template: Story<IUserCardProps> = (props) => {
  return <UserCard {...props} />;
};

export const Simple = Template.bind({});

Simple.args = {
  firstName: "Zaire",
  lastName: "Botosh",
  avatar:
    "https://anime-star.ru/wp-content/uploads/2021/12/Nyashnye-anime-avatarki-tyan_04.jpg",
};
