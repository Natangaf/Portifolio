import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage';
import { useLocation } from "react-router-dom";
import { Me } from '../Me/index';
import { About } from '../About/index';
import { Projects } from '../Projects/index';
import { Education } from '../Education/index';
import { Contact } from '../Contact/index';
import { StylesHome } from "./style"
import { Header } from "../../components/header";


export function Home() {
  const location = useLocation();

  return (
    <StylesHome>
      <Fullpage>
        <FullpageNavigation itemStyle={{
          backgroundColor: "#1f4e70"
        }} />
        <Header />
        <FullPageSections>
          <FullpageSection>
            <Me />
          </FullpageSection>
          <FullpageSection>
            <About />
          </FullpageSection>
          <FullpageSection>
            <Projects />
          </FullpageSection>
          <FullpageSection>
            <Education />
          </FullpageSection>
          <FullpageSection>
            <Contact />
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </StylesHome>
  );
}