import { Animation } from "./styles/Animation";
import { GlobalStyled } from "./styles/GlobalStyled";
import { ResetCSS } from "./styles/ResetCSS";
import { RoutePages } from "./Routes";
import { Header } from "./components/header";
import { Aside } from "./components/aside";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <GlobalStyled />
      <Header />
      <Aside />
      <ResetCSS />
      <Animation />
      <RoutePages />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
