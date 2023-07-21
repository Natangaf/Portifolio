
import { Navigate, Route, Routes, useLocation, useNavigate, } from "react-router-dom";
import { Me } from '../pages/Me/index';
import { About } from './../pages/About/index';
import { Projects } from '../pages/Projects/index';
import { ProjectsList } from '../pages/ProjectsList/index';
import { ProjectDetails } from '../pages/ProjectDetail/index';
import { Education } from './../pages/Education/index';
import { Contact } from './../pages/Contact/index';
import { AnimatePresence } from 'framer-motion';
import { ProjectsListFront } from "../base/ProjectsListFront/index";
import { ProjectsListBack } from '../base/ProjectsListBack/index';


export function TestRoutePages() {
  const location = useLocation()

  return (
    <AnimatePresence >
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Me />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/ProjectsFront" element={<ProjectsList listProject={ProjectsListFront}  />} />
        <Route path="/ProjectsBack" element={<ProjectsList listProject={ProjectsListBack} />} />
        <Route path="/Project" element={<ProjectDetails />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/teste" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  )
}

