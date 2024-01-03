import React from "react";
import logo from "./images/live-chat.png";
import { useSelector } from "react-redux";

const Welcome = () => {
  const lightTheme = useSelector((state) => state.themekey);
  return (
    <div
      className={lightTheme ? "welcome-container" : "welcome-container dark"}
    >
      <img src={logo} alt="logo" className="welcome-logo" />
      <p>View and text directly to people present in the chat Rooms</p>
    </div>
  );
};

export default Welcome;
