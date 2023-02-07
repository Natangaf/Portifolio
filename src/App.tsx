import { Animation } from "./styles/Animation";
import { GlobalStyled } from "./styles/GlobalStyled";
import { ResetCSS } from "./styles/ResetCSS";
import { RoutePages } from "./Routes";
import { Header } from "./components/header";
import { Aside } from "./components/aside";

function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <Aside />
      <ResetCSS />
      <Animation />
      <RoutePages />
    
    </>
  );
}

export default App;
