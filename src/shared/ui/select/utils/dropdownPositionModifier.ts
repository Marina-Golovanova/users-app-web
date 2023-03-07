import { Modifier } from "react-popper";

export const dropdownPositionModifier: Modifier<string> = {
  name: "dropdownPositionModifier",
  enabled: true,
  phase: "beforeRead",
  fn: ({ state }) =>
    state.placement === "top-start"
      ? { ...state, placement: "top-end" }
      : state,
};
