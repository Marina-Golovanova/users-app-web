import cn from "classnames";
import { DeleteIcon } from "../icons/DeleteIcon";

import styles from "./filter.module.scss";

export type IFilterProps = {
  name?: string;
  values: string[];
  size?: "s" | "m";
  filterIcon?: React.ReactNode;
  filterIconSize?: "s" | "m";
  isResetAvailable?: boolean;
  wrapperRef?: React.MutableRefObject<HTMLDivElement | null>;
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
    <div className={styles.filterLayout} ref={props.wrapperRef}>
      <div
        className={cn(styles.filter, styles[size])}
        onClick={props.onFilterClick}
      >
        {props.name && <div className={styles.filterName}>{props.name}</div>}
        {props.values.map((value) => (
          <div className={styles.filterValue} key={value}>
            {value}
          </div>
        ))}
        {!!props.values.length && props.isResetAvailable && (
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
