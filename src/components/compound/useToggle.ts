import { use } from "react";
import { ToggleContext } from "./ToggleContext";

export const useToggle = () => {
  const context = use(ToggleContext);

  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }

  const { on, toggle } = context;
  return {
    on,
    toggle,
  };
};
