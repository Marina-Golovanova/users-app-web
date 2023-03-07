import styles from "./users-list-layout.module.scss";

export const UsersListLayout: React.FC<React.PropsWithChildren> = (props) => {
  return <div className={styles.usersListLayout}>{props.children}</div>;
};
