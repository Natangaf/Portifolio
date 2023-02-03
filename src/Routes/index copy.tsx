import { Routes, Route, Navigate } from "react-router-dom";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Education } from "../pages/Education";
import { Home } from "../pages/Home";
import { Project } from "../pages/Project";
import { Projects } from "../pages/Projects";


export function RoutePages() {
    return (
        <Routes>
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