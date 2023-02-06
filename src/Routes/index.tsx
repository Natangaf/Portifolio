import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from './../pages/Home/index';
import { About } from './../pages/About/index';
import { Projects } from './../pages/Projects/index';
import { Project } from './../pages/Project/index';
import { Education } from './../pages/Education/index';
import { Contact } from './../pages/Contact/index';
import { AnimatePresence } from 'framer-motion';


export function RoutePages() {
  const location = useLocation();
  return (
    <AnimatePresence >
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  )
}

