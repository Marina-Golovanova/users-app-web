import { ArrowLeftIcon } from "../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../icons/ArrowRightIcon";
import { SearchIcon } from "../icons/SearchIcon";

const icons = [ArrowLeftIcon, ArrowRightIcon, SearchIcon].map((Icon) => ({
  element: <Icon />,
  label: Icon.displayName,
}));

export { icons };
