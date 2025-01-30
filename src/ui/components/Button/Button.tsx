import type { ReactNode } from "react";
import type { IButton } from "./models/button.interfaces";

export const Button = ({ text, ...props }: IButton): ReactNode => {
  return <button {...props}>{text}</button>;
};
