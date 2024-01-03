import React, { useState } from "react";
import "./myStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import ConversationItem from "./ConversationItem";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Features/themeSlice";
const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.themekey);
  const [conversations, setConverasations] = useState([
    {
      name: "Test#1",
      lastMessege: "Last Message #1",
      timeStamp: "Today",
    },
    {
      name: "Sest#2",
      lastMessege: "Last Message #2",
      timeStamp: "Today",
    },
    {
      name: "Mest#3",
      lastMessege: "Last Message #3",
      timeStamp: "Today",
    },
  ]);

  return (
    <div className="sidebar-container">
      <div className={lightTheme ? "sb-header" : "sb-header dark"}>
        <div>
          <IconButton>
            <AccountCircleIcon className={lightTheme ? "icon" : "icon dark"} />
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddIcon className={lightTheme ? "icon" : "icon dark"} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddIcon className={lightTheme ? "icon" : "icon dark"} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-groups");
            }}
          >
            <AddCircleIcon className={lightTheme ? "icon" : "icon dark"} />
          </IconButton>
          <IconButton
            onClick={() => {
              dispatch(toggleTheme());
            }}
          >
            {lightTheme && (
              <NightlightIcon className={lightTheme ? "icon" : "icon dark"} />
            )}
            {!lightTheme && (
              <LightModeIcon className={lightTheme ? "icon" : "icon dark"} />
            )}
          </IconButton>
        </div>
      </div>
      <div className={lightTheme ? "sb-search" : "sb-search dark"}>
        <IconButton>
          <SearchIcon className={lightTheme ? "icon" : "icon dark"} />
        </IconButton>
        <input
          placeholder="Search"
          className={lightTheme ? "search-box" : "search-box dark"}
        />
      </div>
      <div className={lightTheme ? "sb-conversation" : "sb-conversation dark"}>
        {conversations.map((cons) => {
          return <ConversationItem props={cons} key={cons.name} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
