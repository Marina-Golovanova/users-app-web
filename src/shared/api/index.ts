import { v4 as uuidv4 } from "uuid";
import { IUser } from "../domain/types";

export type IRequestUsersFilters = {
  nationalities: IUser["nationality"][];
  gender: string[];
  results: string;
  page: number;
};

export const requestUsers = async (props: IRequestUsersFilters) => {
  const pageFilter = `?page=${props.page}&results=${props.results}&seed=abs`;

  const genderFilter = props.gender.length
    ? `&gender=${props.gender.join()}`
    : "";

  const nationalityFilter = props.nationalities.length
    ? `&nat=${props.nationalities.join()}`
    : "";

  const res = await fetch(
    `https://randomuser.me/api/${pageFilter}${genderFilter}${nationalityFilter}`
  );

  const response: { results: any[] } = await res.json();

  if (res.ok) {
    const userList = response.results.map<IUser>((user) => ({
      id: uuidv4(),
      firstName: user.name.first,
      lastName: user.name.last,
      avatar: user.picture.thumbnail,
      location: user.location.city,
      email: user.email,
      birthday: new Date(user.dob.date).toLocaleDateString("ru"),
      gender: user.gender as IUser["gender"],
      nationality: user.nat,
      phone: user.phone,
    }));

    return {
      userList,
    };
  }

  throw new Error("Something went wrong");
};
