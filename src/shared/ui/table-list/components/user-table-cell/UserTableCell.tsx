import styles from "./user-table-cell.module.scss";

export const UserTableCell: React.FC<React.PropsWithChildren> = (props) => {
  return <div className={styles.userTableCell}>{props.children}</div>;
};
