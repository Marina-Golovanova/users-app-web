import cn from "classnames";

import styles from "./dropdown.module.scss";

export type IDropdownProps = {
  options: string[];
  selectedOption?: string;
  onSelectOption: (option: string) => void;
};

export const Dropdown: React.FC<IDropdownProps> = (props) => {
  return (
    <div className={styles.dropdownLayout}>
      {props.selectedOption && (
        <>
          <div className={cn(styles.option, styles.selectedOption)}>
            {props.selectedOption}
          </div>
          <div className={styles.border} />
        </>
      )}

      {props.options.map((option) => (
        <>
          {option !== props.selectedOption && (
            <div
              className={cn(styles.option, styles.notSelectedOption)}
              onClick={() => props.onSelectOption(option)}
            >
              {option}
            </div>
          )}
        </>
      ))}
    </div>
  );
};
