import { Select } from "../select";
import { ArrowDownIcon } from "../icons/ArrowDownIcon";

import type { ISelectProps } from "../select";

import styles from "./select-number-pages.module.scss";

export const SelectNumberPages: React.FC<ISelectProps> = (props) => {
  return (
    <div className={styles.selectNumberPagesLayout}>
      <span className={styles.label}>Rows per page:</span>
      <Select
        {...props}
        filterIcon={<ArrowDownIcon />}
        filterIconSize="m"
        size="m"
      />
    </div>
  );
};
