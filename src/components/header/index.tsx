
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { StyledTypography } from "../baseTypography/style"
import { StylesHeader } from "./style";
import menu from "../../assets/icons/menu.svg"
import closeMenu from "../../assets/icons/closeMenu.svg"
import { useOutClick } from "../Hooks/useOutClick";

export function Header() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useOutClick(() => setIsOpen(!isOpen))

  const slide = {
    mostrar: {
      y: 0,
    },
    esconder: {
      y: "-100%",
    },
    inicial: {
      y: "-100%",
    },
  }

  return (
    <StylesHeader >
      <div className="container">
        <div className="head">
          <div className="name">
            <StyledTypography tag="h1" classText="Title">
              Natã
            </StyledTypography>
            <StyledTypography tag="h2" classText="Title1.2">
              Fernades
            </StyledTypography>
          </div>
          <button className="bntMenu "
            onClick={() => setIsOpen(true)}
          >
            <img src={menu} alt="" />
          </button>
          <nav className="navegation">
            <Link to="/" className={location.pathname == "/" ? "selected" : ""} >HOME</Link>
            <Link to="/About" className={location.pathname == "/About" ? "selected" : ""}>SOBRE</Link>
            <Link to="/Projects" className={location.pathname == "/Projects" ? "selected" : ""}>PROJETOS</Link>
            <Link to="/Education" className={location.pathname == "/Education" ? "selected" : ""}>EDUCAÇÃO</Link>
            <Link to="/Contact" className={location.pathname == "/Contact" ? "selected" : ""}>CONTATO</Link>
          </nav>
          <AnimatePresence>
            {isOpen && (
              <motion.nav
                ref={modalRef}
                variants={slide}
                animate="mostrar"
                initial="inicial"
                exit="esconder"
                transition={{
                  type: "just"
                }}
                className="navegationReponsiv">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="bntMenu"
                >
                  <img src={closeMenu} alt="" /></button>
                <Link to="/" className={location.pathname == "/" ? "selected" : ""} >HOME</Link>
                <Link to="/About" className={location.pathname == "/About" ? "selected" : ""}>SOBRE</Link>
                <Link to="/Projects" className={location.pathname == "/Projects" ? "selected" : ""}>PROJETOS</Link>
                <Link to="/Education" className={location.pathname == "/Education" ? "selected" : ""}>EDUCAÇÃO</Link>
                <Link to="/Contact" className={location.pathname == "/Contact" ? "selected" : ""}>CONTATO</Link>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </div>
    </StylesHeader>
  );
}
