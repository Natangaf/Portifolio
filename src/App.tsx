import { useEffect, useState } from 'react';
import { Animation } from "./styles/Animation";
import { GlobalStyled } from "./styles/GlobalStyled";
import { ResetCSS } from "./styles/ResetCSS";
import { RoutePages } from "./Routes";
import { Aside } from "./components/aside";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Loading } from './components/loading';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fakeLoading = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 2000);
    };

    fakeLoading();
    return () => {
      setIsLoaded(false);
    };
  }, []);

  return (
    <>
      <ResetCSS />
      <GlobalStyled />
      {isLoaded ? (
        <>
          <Aside />
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
      ) : (
        <Loading />
      )}
    </>
  );

}

export default App;
