import React from "react";
import cn from "classnames";

import styles from "./input-text.module.scss";

export const InputText = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function InputText(props, ref) {
  return (
    <input
      className={cn(styles.input, props.className)}
      type="text"
      ref={ref}
      {...props}
    />
  );
});
