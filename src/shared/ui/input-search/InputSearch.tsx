import React from "react";
import { SearchIcon } from "../icons/SearchIcon";
import { InputText } from "../input-text";

import styles from "./input-search.module.scss";

export const InputSearch = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function InputSearch(props, ref) {
  return (
    <InputText ref={ref} {...props}>
      <SearchIcon className={styles.inputSearchIcon} />
    </InputText>
  );
});
