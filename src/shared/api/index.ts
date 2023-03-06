import { v4 as uuidv4 } from "uuid";
import { IUser } from "../domain/types";

export type IRequestUsersFilters = {
  nationality: IUser["nationality"][];
  search: string;
  gender: string[];
};

export const requestUsers = async (props: IRequestUsersFilters) => {
  const res = await fetch("https://randomuser.me/api/?results=100");
  const response: { results: any[] } = await res.json();

  const userList = response.results.map<IUser>((user) => ({
    id: uuidv4(),
    firstName: user.name.first,
    lastName: user.name.last,
    avatar: user.picture.thumbnail,
    location: user.location.city,
    email: user.email,
    birthday: user.dob.date,
    gender: user.gender as IUser["gender"],
    nationality: user.nat,
    phone: user.phone,
  }));

  const nationalities: string[] = Array.from(
    new Set(userList.map((user) => user.nationality))
  );

  nationalities.sort();

  return {
    userList,
    nationalities,
  };
};
