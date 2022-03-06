import React from "react";
import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
type ButtonProps = Pick<MuiButtonProps, "children" | "color" | "variant">;
const Button = ({ children, ...rest }: ButtonProps) => {
  return <MuiButton {...rest}>{children}</MuiButton>;
};

export default Button;
