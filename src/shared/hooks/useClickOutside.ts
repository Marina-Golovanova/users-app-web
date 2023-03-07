import { useOnClickOutside } from "usehooks-ts";

import type React from "react";

export const useClickOutside = (
  [ref, ...rest]: React.MutableRefObject<HTMLElement | null>[],
  handle: (e: MouseEvent) => void
) => {
  useOnClickOutside(ref, (e: MouseEvent) => {
    rest.forEach((ref) => {
      if (!ref.current?.contains(e.target as HTMLElement)) {
        handle(e);
      }
    });
  });
};
