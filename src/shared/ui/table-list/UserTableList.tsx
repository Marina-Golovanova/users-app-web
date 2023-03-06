import React from "react";
import { IUser } from "../../domain/types";
import { UserTableHead } from "./components/user-table-head";
import { UserTableRow } from "./components/user-table-row";

import styles from "./user-table-list.module.scss";

export type IUserTableListProps = {
  userTableHeads: string[];
  userTableRows: IUser[];
  loader: {
    isLoading: boolean;
  };
};

export const UserTableList: React.FC<IUserTableListProps> = (props) => {
  return (
    <div className={styles.userTableList}>
      <UserTableHead userTableHeads={props.userTableHeads} />
      {props.loader.isLoading && (
        <span className={styles.loader}>Loading..</span>
      )}
      {!props.loader.isLoading &&
        props.userTableRows.map((row) => (
          <UserTableRow {...row} key={row.id} />
        ))}
    </div>
  );
};
