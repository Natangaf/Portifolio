
import { Home } from '../../pages/Home/index';
import { About } from '../../pages/About/index';
import { Projects } from '../../pages/Projects/index';
import { Project } from '../../pages/Project/index';
import { Education } from '../../pages/Education/index';
import { Contact } from '../../pages/Contact/index';
import { iRoutes } from '../../interface';

export const baseRoutes: iRoutes[] = [
    {
        path: "/",
        Component: Home
    },
    {
        path: "/About",
        Component: About
    },
    {
        path: "/Projects",
        Component: Projects
    },
    {
        path: "/Project",
        Component: Project
    },
    {
        path: "/Education",
        Component: Education
    },
    {
        path: "/Contact",
        Component: Contact
    },


]