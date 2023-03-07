import React from "react";
import { requestUsers } from "../../../shared/api";

import type { IUser } from "../../../shared/domain/types";

export const useUsers = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [users, setUsers] = React.useState<IUser[]>([]);

  const [pageFilter, setPageFilter] = React.useState(1);
  const [nationalityFilter, setNationalityFilter] = React.useState<
    IUser["nationality"][]
  >([]);
  const [searchFilter, setSearchFilter] = React.useState("");
  const [genderFilter, setGenderFilter] = React.useState<string[]>([]);
  const [resultsNumberFilter, setResultsNumberFilter] = React.useState("10");

  React.useEffect(() => {
    setIsLoading(true);
    setIsLoaded(true);
    requestUsers({
      nationalities: nationalityFilter,
      gender: genderFilter,
      page: pageFilter,
      results: resultsNumberFilter,
    })
      .then((data: any) => {
        setUsers(data.userList);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setIsLoaded(true);
        console.log(e);
      });
  }, [
    genderFilter,
    nationalityFilter,
    pageFilter,
    resultsNumberFilter,
    searchFilter,
  ]);

  React.useEffect(() => {
    if (searchFilter) {
      setUsers(
        users.filter(
          (user) =>
            user.firstName
              .toLowerCase()
              .startsWith(searchFilter.toLowerCase()) ||
            user.lastName.toLowerCase().startsWith(searchFilter.toLowerCase())
        )
      );
    }
  }, [searchFilter, users]);

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
    loader: {
      isLoading,
      isLoaded,
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
      resultsNumber: {
        value: resultsNumberFilter,
        setValue: setResultsNumberFilter,
      },
      page: {
        value: pageFilter,
        setValue: setPageFilter,
      },
    },
  };
};
