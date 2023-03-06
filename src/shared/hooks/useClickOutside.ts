import React, { RefObject } from "react";

type Event = MouseEvent | TouchEvent;

export const useOnClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: (e: Event) => void
) => {
  React.useEffect(() => {
    const listener = (event: Event) => {
      if (
        !ref.current ||
        ref.current.contains((event?.target as Node) || null)
      ) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};
