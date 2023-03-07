import { UserTableCell } from "../user-table-cell";
import { UserTableGrid } from "../user-table-grid";

import styles from "./user-table-head.module.scss";

export type IUserTableHeadProps = {
  userTableHeads: string[];
};

export const UserTableHead: React.FC<IUserTableHeadProps> = (props) => {
  return (
    <UserTableGrid variant="head">
      {props.userTableHeads.map((col) => (
        <UserTableCell key={col}>
          <span className={styles.userTableHeadCell}>{col}</span>
        </UserTableCell>
      ))}
    </UserTableGrid>
  );
};
