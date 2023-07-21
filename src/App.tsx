import { Animation } from "./styles/Animation";
import { GlobalStyled } from "./styles/GlobalStyled";
import { ResetCSS } from "./styles/ResetCSS";
import { RoutePages } from "./Routes";
import { Aside } from "./components/aside";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <GlobalStyled />
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
