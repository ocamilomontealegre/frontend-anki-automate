import type { HTMLProps } from "react";

export interface IButton extends HTMLProps<HTMLButtonElement> {
  readonly text: string;
  readonly type?: "submit" | "reset" | "button";
}
