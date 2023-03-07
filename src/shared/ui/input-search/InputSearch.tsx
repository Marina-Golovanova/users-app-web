import React from "react";
import { SearchIcon } from "../icons/SearchIcon";
import { InputText } from "../input-text";

import styles from "./input-search.module.scss";

export type IInputSearchProps = {
  placeholder: string;
  onSearch: (value: string) => void;
};

export const InputSearch: React.FC<IInputSearchProps> = (props) => {
  return (
    <InputText
      placeholder={props.placeholder}
      onChange={(e) => props.onSearch(e.target.value)}
    >
      <SearchIcon className={styles.inputSearchIcon} />
    </InputText>
  );
};
