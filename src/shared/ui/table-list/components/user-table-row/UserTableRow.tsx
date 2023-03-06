import { UserCard } from "../../../user-card";
import { UserTableCell } from "../user-table-cell";
import { UserTableGrid } from "../user-table-grid";

import type { IUser } from "../../../../domain/types";

import styles from "./user-table-row.module.scss";

export type IUserTableRowProps = IUser;

// TODO Научить компонент работать с любыми данными

export const UserTableRow: React.FC<IUserTableRowProps> = (props) => {
  return (
    <UserTableGrid variant="row">
      <UserTableCell>
        <UserCard
          firstName={props.firstName}
          lastName={props.lastName}
          avatar={props.avatar}
        />
      </UserTableCell>
      <UserTableCell>
        <span className={styles.upperCase}>{props.location}</span>
      </UserTableCell>
      <UserTableCell>{props.email}</UserTableCell>
      <UserTableCell>{props.birthday}</UserTableCell>
      <UserTableCell>{props.gender}</UserTableCell>
      <UserTableCell>{props.nationality}</UserTableCell>
      <UserTableCell>{props.phone}</UserTableCell>
    </UserTableGrid>
  );
};
