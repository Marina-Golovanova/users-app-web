import React from "react";

export type ISearchIconProps = React.SVGAttributes<SVGSVGElement>;

export const SearchIcon: React.FC<ISearchIconProps> = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <mask
        id="mask0_124_914"
        maskUnits="userSpaceOnUse"
        x="4"
        y="4"
        width="16"
        height="16"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.1667 5C7.76091 5 5 7.76091 5 11.1667C5 14.5724 7.76091 17.3333 11.1667 17.3333C12.8384 17.3333 14.3548 16.6681 15.4655 15.5879C15.4819 15.5646 15.5006 15.5423 15.5215 15.5214C15.5423 15.5006 15.5646 15.4819 15.588 15.4655C16.6681 14.3548 17.3333 12.8384 17.3333 11.1667C17.3333 7.76091 14.5724 5 11.1667 5ZM16.5756 15.8684C17.6704 14.61 18.3333 12.9657 18.3333 11.1667C18.3333 7.20863 15.1247 4 11.1667 4C7.20863 4 4 7.20863 4 11.1667C4 15.1247 7.20863 18.3333 11.1667 18.3333C12.9657 18.3333 14.61 17.6704 15.8685 16.5755L19.1465 19.8535C19.3417 20.0488 19.6583 20.0488 19.8536 19.8535C20.0488 19.6583 20.0488 19.3417 19.8536 19.1464L16.5756 15.8684Z"
          fill="currentColor"
        />
      </mask>
      <g mask="url(#mask0_124_914)">
        <rect width="24" height="24" fill="currentColor" />
      </g>
    </svg>
  );
};
