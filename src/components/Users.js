import React from "react";
import "./myStyles.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./images/live-chat.png";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
const Groups = () => {
  const lightTheme = useSelector((state) => state.themekey);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          ease: "anticipate",
          duration: "0.3",
        }}
        className="list-container"
      >
        <div className={lightTheme ? "ug-header" : `ug-header dark`}>
          <img
            src={logo}
            style={{ height: "2rem", width: "2rem" }}
            alt="ug-img"
          />
          <p className={lightTheme ? "ug-title" : `ug-title dark`}>
            Online Users
          </p>
        </div>
        <div className={lightTheme ? "sb-search" : `sb-search dark`}>
          <IconButton>
            <SearchIcon className={lightTheme ? "" : "dark"} />
          </IconButton>
          <input
            placeholder="Search"
            className={lightTheme ? "search-box" : "search-box dark"}
          />
        </div>
        <div className={lightTheme ? "ug-list" : `ug-list dark`}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.98 }}
            className={lightTheme ? "list-tem" : `list-tem dark`}
          >
            <p className="con-icon"> T</p>
            <p className={lightTheme ? "con-title" : `con-title dark`}>
              Test User
            </p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Groups;
