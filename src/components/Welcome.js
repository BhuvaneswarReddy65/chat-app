import React from "react";
import logo from "./images/live-chat.png";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const lightTheme = useSelector((state) => state.themekey);
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log(userData);
  const nav = useNavigate();
  if (!userData) {
    console.log("User not Authenticated");
    nav("/");
  }
  return (
    <div
      className={lightTheme ? "welcome-container" : "welcome-container dark"}
    >
      <motion.img
        src={logo}
        alt="logo"
        className="welcome-logo"
        whileTap={{ scale: 1.05, rotate: 360 }}
      />
      <b>Hi , {userData.data.name} 👋</b>
      <p>View and text directly to people present in the chat Rooms</p>
    </div>
  );
};

export default Welcome;
