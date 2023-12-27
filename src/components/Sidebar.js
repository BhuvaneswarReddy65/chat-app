import React, { useState } from "react";
import "./myStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import ConversationItem from "./ConversationItem";
const Sidebar = () => {
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
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input placeholder="Search" className="search-box" />
      </div>
      <div className="sb-conversation">
        {conversations.map((cons) => {
          return <ConversationItem props={cons} key={cons.name} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
