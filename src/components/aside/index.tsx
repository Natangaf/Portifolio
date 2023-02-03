import React from "react";
import github from "../../assets/icons/github.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Linkedin from "../../assets/icons/Linkedin.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import { StylesAside } from "./style";

export function Aside() {
  return (
    <StylesAside>
      <a href="https://github.com/Natangaf">
        <img src={github} alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/natanga/">
        <img src={Linkedin} alt="Linkedin" />
      </a>
      <a href="https://www.instagram.com/natanga.f">
        <img src={Instagram} alt="Instagram" />
      </a>
      <a href="https://www.facebook.com/Natanque/">
        <img src={Facebook} alt="Facebook" />
      </a>
    </StylesAside>
  );
}
