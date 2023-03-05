import { InputSearch } from "../../shared/ui/input-search";
import { Pagination } from "../../shared/ui/pagination";
import { Select } from "../../shared/ui/select";
import { UserTableList } from "../../shared/ui/table-list/UserTableList";
import { UsersListLayout } from "../../shared/ui/users-list-layout";

import styles from "./users-list-page.module.scss";

export const UsersListPage: React.FC = () => {
  return (
    <UsersListLayout>
      <div className={styles.usersListPageLayout}>
        <div className={styles.inputSearchLayout}>
          <InputSearch />
        </div>

        <div className={styles.filterLayout}>
          <Select
            name="Gender equal"
            options={["male", "female"]}
            onSelectOption={() => console.log("select gender")}
          />

          <Select
            name="Nationality"
            options={["RU", "AU"]}
            onSelectOption={() => console.log("select nationality")}
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
            userTableRows={[
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
            ]}
          />
        </div>

        <div className={styles.paginationLayout}>
          <Pagination
            currentPage={1}
            totalPages={200}
            onPrevPage={() => console.log("prev")}
            onNextPage={() => console.log("next")}
          />
        </div>
      </div>
    </UsersListLayout>
  );
};
