import cn from "classnames";
import styles from "./button-with-icon.module.scss";

export type IButtonWithIconProps =
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: React.ReactNode;
  };

export const ButtonWithIcon: React.FC<IButtonWithIconProps> = (props) => {
  return (
    <button
      className={cn(styles.button, props.className)}
      type="button"
      {...props}
    >
      {props.icon && <div className={styles.icon}>{props.icon}</div>}
    </button>
  );
};
