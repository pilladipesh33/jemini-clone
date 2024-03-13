import { useEffect, useState } from "react";
import Main from "./components/main";
import { SideBar } from "./components/sidebar";

function App() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(screenSize);

  return (
    <>
      {screenSize.width >= 768 ? (
        <>
          <SideBar />
          <Main />
        </>
      ) : (
        <div className="flex justify-center items-center font-body text-center w-full">
          Currently this site is not for mobile view screen
        </div>
      )}
    </>
  );
}

export default App;
