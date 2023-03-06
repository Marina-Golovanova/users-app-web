import React from "react";
import { requestUsers } from "../../../shared/api";

import type { IUser } from "../../../shared/domain/types";

export const useUsers = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUsers] = React.useState<IUser[]>([]);
  const [nationalities, setNationalities] = React.useState<string[]>([]);

  const [nationalityFilter, setNationalityFilter] = React.useState<
    IUser["nationality"][]
  >([]);
  const [searchFilter, setSearchFilter] = React.useState("");
  const [genderFilter, setGenderFilter] = React.useState<string[]>([]);

  React.useEffect(() => {
    setIsLoading(true);
    requestUsers({
      nationality: nationalityFilter,
      search: searchFilter,
      gender: genderFilter,
    }).then((data) => {
      setUsers(data.userList);
      setNationalities(data.nationalities);
      setIsLoading(false);
    });
  }, [genderFilter, nationalityFilter, searchFilter]);

  const handleSelectNationality = (nationality: IUser["nationality"]) => {
    if (nationalityFilter.includes(nationality)) {
      setNationalityFilter((state) =>
        state.filter((value) => value !== nationality)
      );
    } else {
      setNationalityFilter((state) => state.concat(nationality));
    }
  };

  const handleSelectGender = (gender: string) => {
    if (genderFilter.includes(gender)) {
      setGenderFilter([]);
    } else {
      setGenderFilter([gender]);
    }
  };

  return {
    users,
    nationalities,
    loader: {
      isLoading,
    },
    filters: {
      nationality: {
        value: nationalityFilter,
        setValue: handleSelectNationality,
        reset: () => setNationalityFilter([]),
      },
      search: {
        value: searchFilter,
        setValue: setSearchFilter,
      },
      gender: {
        value: genderFilter,
        setValue: handleSelectGender,
        reset: () => setGenderFilter([]),
      },
    },
  };
};
