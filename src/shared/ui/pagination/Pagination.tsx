import { ButtonWithIcon } from "../button-with-icon";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";

import styles from "./pagination.module.scss";

export type IPaginationProps = {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
};

export const Pagination: React.FC<IPaginationProps> = (props) => {
  return (
    <div className={styles.paginationLayout}>
      <ButtonWithIcon
        onClick={props.onPrevPage}
        icon={<ArrowLeftIcon />}
        disabled={props.currentPage <= 1}
      />
      <div className={styles.pagesText}>
        {props.currentPage} / {props.totalPages}
      </div>
      <ButtonWithIcon
        onClick={props.onNextPage}
        icon={<ArrowRightIcon />}
        disabled={props.currentPage >= props.totalPages}
      />
    </div>
  );
};
