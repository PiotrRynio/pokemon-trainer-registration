import { baseColors } from "@/styles/theme/base/baseColors";

export const baseShadows = {
  focused: `0 0 0 4px ${baseColors.primaryLight}`, // check in mockup and colors.ts
  dialog: "0 4px 10px 2px rgba(0, 0, 0, 0.1)",
} as const;
