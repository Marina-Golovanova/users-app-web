import { SearchIcon } from "../icons/SearchIcon";

const icons = [SearchIcon].map((Icon) => ({
  element: <Icon />,
  label: Icon.displayName,
}));

export { icons };
