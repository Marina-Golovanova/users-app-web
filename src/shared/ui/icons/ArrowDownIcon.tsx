import React from "react";

export type IArrowDownIconProps = React.SVGAttributes<SVGSVGElement>;

export const ArrowDownIcon: React.FC<IArrowDownIconProps> = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.3535 9.64645C16.5488 9.84171 16.5488 10.1583 16.3535 10.3536L12.3535 14.3536C12.1582 14.5488 11.8416 14.5488 11.6464 14.3536L7.64639 10.3536C7.45112 10.1583 7.45112 9.84171 7.64639 9.64645C7.84165 9.45118 8.15823 9.45118 8.35349 9.64645L11.9999 13.2929L15.6464 9.64645C15.8416 9.45118 16.1582 9.45118 16.3535 9.64645Z"
        fill="currentColor"
      />
    </svg>
  );
};
