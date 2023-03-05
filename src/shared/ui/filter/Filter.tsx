import cn from "classnames";
import { DeleteIcon } from "../icons/DeleteIcon";

import styles from "./filter.module.scss";

export type IFilterProps = {
  name?: string;
  value?: string;
  isResetAvailable?: boolean;
  size?: "s" | "m";
  filterIcon?: React.ReactNode;
  filterIconSize?: "s" | "m";
  onFilterClick?: () => void;
  onDeleteIconClick?: () => void;
  onFilterIconClick?: () => void;
};

export const Filter: React.FC<IFilterProps> = ({
  size = "s",
  filterIconSize = "s",
  ...props
}) => {
  return (
    <div className={styles.filterLayout}>
      <div
        className={cn(styles.filter, styles[size])}
        onClick={props.onFilterClick}
      >
        {props.name && <div className={styles.filterName}>{props.name}</div>}
        {props.value && <div className={styles.filterValue}>{props.value}</div>}
        {props.value && props.isResetAvailable && (
          <DeleteIcon
            className={styles.icon}
            onClick={props.onDeleteIconClick}
          />
        )}
        {props.filterIcon && (
          <div
            className={cn(styles.icon, styles[filterIconSize])}
            onClick={props.onFilterIconClick}
          >
            {props.filterIcon}
          </div>
        )}
      </div>
    </div>
  );
};
