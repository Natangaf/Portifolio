import { Navigate, Route, Routes } from "react-router-dom";
import { ProjectsList } from "../pages/ProjectsList/index";
import { ProjectsListFront } from "../base/ProjectsListFront/index";
import { ProjectsListBack } from "../base/ProjectsListBack/index";
import { Home } from "../pages/Home/index";
import { ProjectDetails } from "../pages/ProjectDetail";
import Curriculum from "../pages/Curriculum";

export function RoutePages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/ProjectsFront"
        element={<ProjectsList listProject={ProjectsListFront} />}
      />
      <Route
        path="/ProjectsBack"
        element={<ProjectsList listProject={ProjectsListBack} />}
      />
      <Route
        path="/Curriculum"
        element={<Curriculum />}
      />
      <Route path="/Project" element={<ProjectDetails />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
