import React from "react"
import { StylesLanguage } from "../language/style";
import { StylesLanguages } from "./style";

export function Languages() {
  return (
    <StylesLanguages>
      <StylesLanguage typelanguage="HTML | CSS | JAVASCRIPT" value="90" />
      <StylesLanguage typelanguage="REACT.JS | REACT NATIVE" value="90" />
      <StylesLanguage typelanguage="NODE.JS | NODE EXPRESS" value="100" />
      <StylesLanguage typelanguage="PYTHON | DJANGO" value="70" />
      <StylesLanguage typelanguage="PHP | LARAVEL " value="25" />
      <StylesLanguage typelanguage="JAVA | SPRING BOOT" value="30" />
      <StylesLanguage typelanguage="C# | .NET" value="40" />
    </StylesLanguages>
  );
}
