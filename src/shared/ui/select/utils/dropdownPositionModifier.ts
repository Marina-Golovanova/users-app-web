import { Modifier } from "react-popper";

export const dropdownPositionModifier: Modifier<string> = {
  name: "topLogger",
  enabled: true,
  phase: "main",
  fn({ state }) {
    if (state.options.placement === "bottom-start") {
      return {
        ...state,
        options: { ...state.options, placement: "bottom-end" },
      };
    }

    return {
      ...state,
      options: { ...state.options, placement: "bottom-start" },
    };
  },
};
