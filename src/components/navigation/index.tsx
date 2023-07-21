import { useState } from "react";
import { FullpageContext, Slide, FullpageNumber } from '@ap.cx/react-fullpage';
import { AnimatePresence, motion } from "framer-motion";
import { useOutClick } from "../Hooks/useOutClick";
import { useLocation } from "react-router-dom";
import closeMenu from "../../assets/icons/closeMenu.svg";
import menu from "../../assets/icons/menu.svg";
import { StylesNav } from "./style";

interface MenuItem {
    label: string;
    slideIndex: number;
}
export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useOutClick(() => setIsOpen(false));

    const menuItems: MenuItem[] = [
        { label: "HOME", slideIndex: 0 },
        { label: "SOBRE", slideIndex: 1 },
        { label: "PROJETOS", slideIndex: 2 },
        { label: "EDUCAÇÃO", slideIndex: 3 },
        { label: "CONTATO", slideIndex: 4 },
    ];

    const handleMenuClick = (ctx: Slide, slideIndex: number) => {
        ctx.goto(ctx.slides[slideIndex], true);
    };


    return (
        <StylesNav>
            <FullpageNumber/>
            <div className="navigation">
                <FullpageContext.Consumer>
                    {(ctx: Slide) => { 
                    
                        return menuItems.map((item) => (
                            <button
                                key={item.slideIndex}
                                className={ctx.number === item.slideIndex ? 'selected' : ''}
                                onClick={() => handleMenuClick(ctx, item.slideIndex)}
                            >
                                {item.label}
                            </button>
                        ));
                    }}
                </FullpageContext.Consumer>
            </div>
            <button
                className="bntMenu"
                onClick={() => setIsOpen(true)}
            >
                <img src={menu} alt="" />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        ref={modalRef}
                        animate="mostrar"
                        initial="inicial"
                        exit="esconder"
                        transition={{
                            type: "just"
                        }}
                        className="navegationReponsiv"
                    >
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bntMenu"
                        >
                            <img src={closeMenu} alt="" />
                        </button>
                        <FullpageContext.Consumer>
                            {(ctx: Slide) => (
                                menuItems.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleMenuClick(ctx, item.slideIndex)}
                                    >
                                        {item.label}
                                    </button>
                                ))
                            )}
                        </FullpageContext.Consumer>
                    </motion.nav>
                )}
            </AnimatePresence>
        </StylesNav>
    );
}