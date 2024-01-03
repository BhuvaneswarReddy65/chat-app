import { useSelector } from "react-redux";
import "./myStyles.css";
import Sidebar from "./Sidebar";
// import ChatArea from "./ChatArea";
// import Welcome from "./Welcome";

import { Outlet } from "react-router-dom";

const MainContainer = () => {
  const lightTheme = useSelector((state) => state.themekey);
  return (
    <div className={lightTheme ? "main-container" : "main-container dark"}>
      <Sidebar />

      <Outlet />
    </div>
  );
};

export default MainContainer;
