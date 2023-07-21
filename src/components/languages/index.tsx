import React from "react"
import { StylesLanguage } from "../language/style";
import { StylesLanguages } from "./style";

export function Languages() {
  return (
    <StylesLanguages>
      <StylesLanguage typelanguage="HTML | CSS | JAVASCRIPT" value="90"/>
      <StylesLanguage typelanguage="REACT.JS | REACT NATIVE" value="70"/>
      <StylesLanguage typelanguage="NODE.JS | NODE EXPRESS" value="90"/>
      <StylesLanguage typelanguage="PYTHON | DJANGO" value="70" />
      <StylesLanguage typelanguage="PHP" value="25" />
      <StylesLanguage typelanguage="JAVA" value="20" />
      <StylesLanguage typelanguage="C#" value="10" />
    </StylesLanguages>
  );
}
