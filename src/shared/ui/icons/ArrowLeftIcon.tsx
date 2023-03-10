import React from "react";

export type IArrowLeftIconProps = React.SVGAttributes<SVGSVGElement>;

export const ArrowLeftIcon: React.FC<IArrowLeftIconProps> = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.3536 16.3536C14.1583 16.5488 13.8417 16.5488 13.6464 16.3536L9.64645 12.3536C9.55268 12.2598 9.5 12.1326 9.5 12C9.5 11.8674 9.55268 11.7402 9.64645 11.6464L13.6464 7.64645C13.8417 7.45119 14.1583 7.45119 14.3536 7.64645C14.5488 7.84171 14.5488 8.15829 14.3536 8.35355L10.7071 12L14.3536 15.6464C14.5488 15.8417 14.5488 16.1583 14.3536 16.3536Z"
        fill="currentColor"
      />
    </svg>
  );
};
