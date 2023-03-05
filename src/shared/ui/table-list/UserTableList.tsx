import React from "react";
import { IUserType } from "../../domain/types";
import { UserTableHead } from "./components/user-table-head";
import { UserTableRow } from "./components/user-table-row";

import styles from "./user-table-list.module.scss";

export type IUserTableListProps = {
  userTableHeads: string[];
  userTableRows: IUserType[];
};

export const UserTableList: React.FC<IUserTableListProps> = (props) => {
  return (
    <div className={styles.userTableList}>
      <UserTableHead userTableHeads={props.userTableHeads} />
      {props.userTableRows.map((row) => (
        <UserTableRow {...row} />
      ))}
    </div>
  );
};
