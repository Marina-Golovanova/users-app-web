import React from "react";
import ReactDOM from "react-dom";
import { usePopper } from "react-popper";
import { useClickOutside } from "../../hooks/useClickOutside";
import { Dropdown, IDropdownProps } from "../dropdown";
import { Filter } from "../filter";
import { dropdownPositionModifier } from "./utils/dropdownPositionModifier";

import type { IFilterProps } from "../filter";

import styles from "./select.module.scss";

export type ISelectProps = IFilterProps & IDropdownProps;

export const Select: React.FC<ISelectProps> = (props) => {
  const [isDropdownVisible, setIsDropdownVisible] = React.useState(false);

  const [referenceElement, setReferenceElement] =
    React.useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] =
    React.useState<HTMLDivElement | null>(null);

  const { styles: dropdownStyles } = usePopper(
    referenceElement,
    popperElement,
    {
      placement: "bottom-start",
      modifiers: [
        dropdownPositionModifier,
        { name: "offset", options: { offset: [0, 14] } },
      ],
    }
  );

  const filterRef = React.useRef<HTMLDivElement | null>(null);
  const dropdownRef = React.useRef<HTMLDivElement | null>(null);

  useClickOutside([filterRef, dropdownRef], () => setIsDropdownVisible(false));

  return (
    <div className={styles.selectLayout}>
      <div ref={setReferenceElement}>
        <Filter
          {...props}
          wrapperRef={filterRef}
          onFilterClick={() => setIsDropdownVisible((value) => !value)}
        />
      </div>

      {isDropdownVisible &&
        ReactDOM.createPortal(
          <div ref={setPopperElement} style={dropdownStyles.popper}>
            <Dropdown
              options={props.options}
              onSelectOption={props.onSelectOption}
              values={props.values}
              wrapperRef={dropdownRef}
            />
          </div>,
          document.body
        )}
    </div>
  );
};
