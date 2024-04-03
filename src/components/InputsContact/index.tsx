import React, { InputHTMLAttributes } from "react";
import { StylesInputs } from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  titleInput: string;
  label: string;
}

export function InputsContact({ name, label, ...rest }: Props) {
  return (
    <StylesInputs>
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} placeholder={name} {...rest} />
    </StylesInputs>
  );
}
