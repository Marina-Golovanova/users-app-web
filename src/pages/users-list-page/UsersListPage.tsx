import { InputSearch } from "../../shared/ui/input-search";
import { Pagination } from "../../shared/ui/pagination";
import { Select } from "../../shared/ui/select";
import { SelectNumberPages } from "../../shared/ui/select-number-pages";
import { UserTableList } from "../../shared/ui/table-list/UserTableList";
import { UsersListLayout } from "../../shared/ui/users-list-layout";
import { nationalities } from "./constants";
import { useUsers } from "./hooks";

import styles from "./users-list-page.module.scss";

const testMaxUsersNumber = 5000;

export const UsersListPage: React.FC = () => {
  const { users, loader, filters } = useUsers();
  const totalPages = Math.ceil(
    testMaxUsersNumber / Number(filters.resultsNumber.value)
  );

  return (
    <UsersListLayout>
      <div className={styles.usersListPageLayout}>
        <div className={styles.inputSearchLayout}>
          <InputSearch
            placeholder="Search"
            onSearch={filters.search.setValue}
          />
        </div>

        <div className={styles.filterLayout}>
          <Select
            name="Gender equal"
            values={filters.gender.value}
            options={["male", "female"]}
            isResetAvailable={true}
            onSelectOption={filters.gender.setValue}
            onDeleteIconClick={filters.gender.reset}
          />

          <Select
            name="Nationality"
            values={filters.nationality.value}
            options={nationalities}
            isResetAvailable={true}
            onSelectOption={filters.nationality.setValue}
            onDeleteIconClick={filters.nationality.reset}
          />
        </div>

        <div className={styles.userTableListLayout}>
          <UserTableList
            userTableHeads={[
              "Profile",
              "Location",
              "Email",
              "Birthday",
              "Gender",
              "Nationality",
              "Phone",
            ]}
            userTableRows={users}
            loader={loader}
          />
        </div>

        <div className={styles.paginationLayout}>
          <div />

          <div className={styles.paginationCell}>
            <Pagination
              currentPage={filters.page.value}
              totalPages={totalPages}
              onPrevPage={() => filters.page.setValue(filters.page.value - 1)}
              onNextPage={() => filters.page.setValue(filters.page.value + 1)}
            />
          </div>

          <div className={styles.pagesSelectCell}>
            <SelectNumberPages
              values={[String(filters.resultsNumber.value)]}
              options={["10", "50", "100"]}
              onSelectOption={filters.resultsNumber.setValue}
            />
          </div>
        </div>
      </div>
    </UsersListLayout>
  );
};
