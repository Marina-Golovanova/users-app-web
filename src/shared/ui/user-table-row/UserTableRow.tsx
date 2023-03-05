import { IUserCardProps, UserCard } from "../user-card";
import styles from "./user-table-row.module.scss";

export type IUserTableRowProps = IUserCardProps & {
  location: string;
  email: string;
  birthday: string;
  gender: "male" | "female";
  nationality: string;
  phone: string;
};

// TODO Научить компонент работать с любыми данными

export const UserTableRow: React.FC<IUserTableRowProps> = (props) => {
  return (
    <div className={styles.userTableRow}>
      <div className={styles.userTableCell}>
        <UserCard
          firstName={props.firstName}
          lastName={props.lastName}
          avatar={props.avatar}
        />
      </div>
      <div className={styles.userTableCell}>
        <span className={styles.upperCase}>{props.location}</span>
      </div>
      <div className={styles.userTableCell}>{props.email}</div>
      <div className={styles.userTableCell}>{props.birthday}</div>
      <div className={styles.userTableCell}>{props.gender}</div>
      <div className={styles.userTableCell}>{props.nationality}</div>
      <div className={styles.userTableCell}>{props.phone}</div>
    </div>
  );
};
