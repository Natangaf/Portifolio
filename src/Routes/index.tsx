import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Home } from './../pages/Home/index';
import { About } from './../pages/About/index';
import { Projects } from './../pages/Projects/index';
import { Project } from './../pages/Project/index';
import { Education } from './../pages/Education/index';
import { Contact } from './../pages/Contact/index';


export function RoutePages() {
    let location = useLocation();
    
    return (
                <Routes location={location}>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Project" element={<Project />} />
                    <Route path="/Education" element={<Education />} />
                    <Route path="/Contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
    )
}
