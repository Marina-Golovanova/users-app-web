import cn from "classnames";

import styles from "./user-table-grid.module.scss";

export type IUserTableGridProps = React.PropsWithChildren & {
  variant: "head" | "row";
};

export const UserTableGrid: React.FC<IUserTableGridProps> = (props) => {
  return (
    <div className={cn(styles.userTableGrid, styles[props.variant])}>
      {props.children}
    </div>
  );
};
