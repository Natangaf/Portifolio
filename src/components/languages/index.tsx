import React from "react"
import { StylesLanguage } from "../language/style";
import { StylesLanguages } from "./style";

export function Languages() {
  return (
    <StylesLanguages>
      <StylesLanguage typelanguage="HTML | CSS | JAVASCRIPT" value="100"/>
      <StylesLanguage typelanguage="REACT.JS | REACT NATIVE" value="50"/>
      <StylesLanguage typelanguage="NODE.JS | NODE EXPRESS" value="30"/>
    </StylesLanguages>
  );
}
