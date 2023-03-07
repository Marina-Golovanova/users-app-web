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
    isLoaded: boolean;
  };
};

export const UserTableList: React.FC<IUserTableListProps> = (props) => {
  return (
    <div className={styles.userTableList}>
      <UserTableHead userTableHeads={props.userTableHeads} />
      {props.loader.isLoading && <div className={styles.loader}>Loading..</div>}
      {!props.loader.isLoading &&
        props.loader.isLoaded &&
        !props.userTableRows.length && (
          <div className={styles.loader}>Something went wrong..</div>
        )}

      {!props.loader.isLoading &&
        props.userTableRows.map((row) => (
          <UserTableRow {...row} key={row.id} />
        ))}
    </div>
  );
};
