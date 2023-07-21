
import { Navigate, Route, Routes } from "react-router-dom";
import { ProjectsList } from '../pages/ProjectsList/index';
import { ProjectsListFront } from "../base/ProjectsListFront/index";
import { ProjectsListBack } from '../base/ProjectsListBack/index';
import { Home } from '../pages/Home/index';


export function RoutePages() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ProjectsFront" element={<ProjectsList listProject={ProjectsListFront} />} />
      <Route path="/ProjectsBack" element={<ProjectsList listProject={ProjectsListBack} />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

