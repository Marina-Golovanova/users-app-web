import { ArrowDownIcon } from "../icons/ArrowDownIcon";
import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import { SearchIcon } from "../icons/SearchIcon";

const icons = [
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  DeleteIcon,
  SearchIcon,
].map((Icon) => ({
  element: <Icon />,
  label: Icon.displayName,
}));

export { icons };
