import styles from "./user-card.module.scss";

export type IUserCardProps = {
  firstName: string;
  lastName: string;
  avatar: string;
};

export const UserCard: React.FC<IUserCardProps> = (props) => {
  const fullName = `${props.firstName} ${props.lastName}`;

  return (
    <div className={styles.userCard}>
      <img className={styles.userAvatar} src={props.avatar} alt={fullName} />
      <div className={styles.userFullName}>{fullName}</div>
    </div>
  );
};
