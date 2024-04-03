import github from "../../assets/icons/github.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Linkedin from "../../assets/icons/Linkedin.svg";
import Instagram from "../../assets/icons/Instagram.svg";
import { Link, Logo, StylesAside } from "./style";

export function Aside() {
  return (
    <StylesAside>
      <Link href="https://github.com/Natangaf" target="_blank">
        <Logo src={github} alt="Github" />
      </Link>
      <Link href="https://www.linkedin.com/in/natangaf" target="_blank">
        <Logo src={Linkedin} alt="Linkedin" />
      </Link>
      <Link href="https://www.instagram.com/natangaf" target="_blank">
        <Logo src={Instagram} alt="Instagram" />
      </Link>
      <Link href="https://www.facebook.com/natangaf" target="_blank">
        <Logo src={Facebook} alt="Facebook" />
      </Link>
    </StylesAside>
  );
}
