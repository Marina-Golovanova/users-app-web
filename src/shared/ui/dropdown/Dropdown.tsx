import React from "react";
import cn from "classnames";

import styles from "./dropdown.module.scss";

export type IDropdownProps = {
  options: string[];
  values: string[];
  onSelectOption: (option: string) => void;
};

export const Dropdown: React.FC<IDropdownProps> = (props) => {
  return (
    <div className={styles.dropdownLayout}>
      {props.values.map((el) => (
        <React.Fragment key={el}>
          <div
            className={cn(styles.option, styles.selectedOption)}
            onClick={() => props.onSelectOption(el)}
          >
            {el}
          </div>
        </React.Fragment>
      ))}

      {!!props.values.length && <div className={styles.border} />}

      {props.options.map((option) => (
        <React.Fragment key={option}>
          {!props.values.includes(option) && (
            <div
              className={cn(styles.option, styles.notSelectedOption)}
              onClick={() => props.onSelectOption(option)}
            >
              {option}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
