import { UserTableList } from "./UserTableList";

import type { ComponentMeta, Story } from "@storybook/react";
import type { IUserTableListProps } from "./UserTableList";

export default {
  title: "UserTableList",
  component: UserTableList,
} as ComponentMeta<typeof UserTableList>;

const Template: Story<IUserTableListProps> = (props) => {
  return <UserTableList {...props} />;
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
  userTableRows: [
    {
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
    },
    {
      firstName: "Zaire",
      lastName: "Botosh",
      avatar:
        "https://anime-star.ru/wp-content/uploads/2021/12/Nyashnye-anime-avatarki-tyan_04.jpg",
      location: "Timeless 1111111111",
      email: "asd@gmail.com",
      birthday: "14.04.1992",
      gender: "male",
      nationality: "BR",
      phone: "(272) 790-0888",
    },
    {
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
    },
    {
      firstName: "Zaire",
      lastName: "Botoshsdffffdsdf",
      avatar:
        "https://anime-star.ru/wp-content/uploads/2021/12/Nyashnye-anime-avatarki-tyan_04.jpg",
      location: "Timeless 1",
      email: "asd@gmail.com",
      birthday: "14.04.1992",
      gender: "male",
      nationality: "BR",
      phone: "(272) 790-0888",
    },
    {
      firstName: "Zaire",
      lastName: "Botosh",
      avatar:
        "https://anime-star.ru/wp-content/uploads/2021/12/Nyashnye-anime-avatarki-tyan_04.jpg",
      location: "Timeless 1",
      email: "asdfsdfasdfdd@gmail.com",
      birthday: "14.04.1992",
      gender: "male",
      nationality: "BR",
      phone: "(272) 790-0888",
    },
    {
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
    },
    {
      firstName: "Zaire",
      lastName: "Botosh",
      avatar:
        "https://anime-star.ru/wp-content/uploads/2021/12/Nyashnye-anime-avatarki-tyan_04.jpg",
      location: "Timeless 1111111111",
      email: "asd@gmail.com",
      birthday: "14.04.1992",
      gender: "male",
      nationality: "BR",
      phone: "(272) 790-0888",
    },
    {
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
    },
    {
      firstName: "Zaire",
      lastName: "Botoshsdffffdsdf",
      avatar:
        "https://anime-star.ru/wp-content/uploads/2021/12/Nyashnye-anime-avatarki-tyan_04.jpg",
      location: "Timeless 1",
      email: "asd@gmail.com",
      birthday: "14.04.1992",
      gender: "male",
      nationality: "BR",
      phone: "(272) 790-0888",
    },
    {
      firstName: "Zaire",
      lastName: "Botosh",
      avatar:
        "https://anime-star.ru/wp-content/uploads/2021/12/Nyashnye-anime-avatarki-tyan_04.jpg",
      location: "Timeless 1",
      email: "asdfsdfasdfdd@gmail.com",
      birthday: "14.04.1992",
      gender: "male",
      nationality: "BR",
      phone: "(272) 790-0888",
    },
  ],
};
