import React, { useState } from 'react';
import { FullpageContext, Slide } from '@ap.cx/react-fullpage';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutClick } from '../Hooks/useOutClick';
import { Link, useLocation } from 'react-router-dom';
import closeMenu from '../../assets/icons/closeMenu.svg';
import menu from '../../assets/icons/menu.svg';
import { StylesNav } from './style';

interface MenuItem {
    label: string;
    slideIndex: number;
}

const MenuButton = ({ ctx, item }: { ctx: Slide; item: MenuItem }) => {
    const handleMenuClick = () => {
        ctx.goto(ctx.slides[item.slideIndex], true);
    };

    return (
        <button
            key={item.slideIndex}
            className={ctx.number === item.slideIndex ? 'selected' : ''}
            onClick={handleMenuClick}
        >
            {item.label}
        </button>
    );
};

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useOutClick(() => setIsOpen(false));
    const location = useLocation();

    const menuItems: MenuItem[] = [
        { label: 'HOME', slideIndex: 0 },
        { label: 'SOBRE', slideIndex: 1 },
        { label: 'PROJETOS', slideIndex: 2 },
        { label: 'EDUCAÇÃO', slideIndex: 3 },
        { label: 'CONTATO', slideIndex: 4 },
    ];

    return (
        <StylesNav>
            {location.pathname === '/' ? (
                <>
                    <div className="navigation">
                        <FullpageContext.Consumer>
                            {(ctx: Slide) => menuItems.map((item) => <MenuButton key={item.slideIndex} ctx={ctx} item={item} />)}
                        </FullpageContext.Consumer>
                    </div>
                    <button className="bntMenu" onClick={() => setIsOpen(true)}>
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
                                    type: 'just',
                                }}
                                className="navegationReponsiv"
                            >
                                <button onClick={() => setIsOpen(!isOpen)} className="bntMenu">
                                    <img src={closeMenu} alt="" />
                                </button>
                                <FullpageContext.Consumer>
                                    {(ctx: Slide) => menuItems.map((item, index) => <MenuButton key={index} ctx={ctx} item={item} />)}
                                </FullpageContext.Consumer>
                            </motion.nav>
                        )}
                    </AnimatePresence>
                </>
            ) : (
                <Link to="/">HOME</Link>
            )}
        </StylesNav>
    );
}
