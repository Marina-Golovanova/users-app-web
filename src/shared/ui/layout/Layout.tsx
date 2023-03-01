import styles from "./layout.module.scss";

export const Layout: React.FC<React.PropsWithChildren> = (props) => {
  return <div className={styles.layout}>{props.children}</div>;
};
