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

const MenuButton = ({ ctx, item, setIsOpen }: { ctx: Slide; item: MenuItem; setIsOpen: (isOpen: boolean) => void }) => {
    const handleMenuClick = () => {
        ctx.goto(ctx.slides[item.slideIndex], true);
        setIsOpen(false);
    };

    return (
        <button
            className={ctx.number === item.slideIndex ? 'selected' : ''}
            onClick={handleMenuClick}
        >
            {item.label}
        </button>
    );
};

const menuItems: MenuItem[] = [
    { label: 'HOME', slideIndex: 0 },
    { label: 'SOBRE', slideIndex: 1 },
    { label: 'PROJETOS', slideIndex: 2 },
    { label: 'EDUCAÇÃO', slideIndex: 3 },
    { label: 'CONTATO', slideIndex: 4 },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useOutClick(() => setIsOpen(false));
    const location = useLocation();

    return (
        <StylesNav>
            {location.pathname === '/' ? (
                <>
                    <div className="navigation">
                        <FullpageContext.Consumer>
                            {(ctx: Slide) => menuItems.map((item) => (
                                <MenuButton key={item.slideIndex} ctx={ctx} item={item} setIsOpen={setIsOpen} />
                            ))}
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
                                {menuItems.map((item, index) => (
                                    <FullpageContext.Consumer key={index}>
                                        {(ctx: Slide) => <MenuButton ctx={ctx} item={item} setIsOpen={setIsOpen} />}
                                    </FullpageContext.Consumer>
                                ))}
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
