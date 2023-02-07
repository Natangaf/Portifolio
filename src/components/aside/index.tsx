import React from "react";
import github from "../../assets/icons/github.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Linkedin from "../../assets/icons/Linkedin.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import { StylesAside } from "./style";

export function Aside() {
  return (
    <StylesAside>
      <a href="https://github.com/Natangaf" target="_blank">
        <img src={github} alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/natangaf" target="_blank">
        <img src={Linkedin} alt="Linkedin" />
      </a>
      <a href="https://www.instagram.com/natangaf" target="_blank">
        <img src={Instagram} alt="Instagram" />
      </a>
      <a href="https://www.facebook.com/natangaf" target="_blank">
        <img src={Facebook} alt="Facebook" />
      </a>
    </StylesAside>
  );
}
