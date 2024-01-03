import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import React, { useState } from "react";
import MessageSelf from "./MessageSelf";
import MessageOther from "./MessageOther";
import "./myStyles.css";
import { useSelector } from "react-redux";
const ChatArea = () => {
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
  let props = conversations[0];
  return (
    <div
      className={lightTheme ? "chatarea-container" : "chatarea-container dark"}
    >
      <div className={lightTheme ? "chatarea-header" : "chatarea-header dark"}>
        <p className="con-icon">{props.name[0]}</p>
        <div className="header-text">
          <p className="con-title">{props.name}</p>
          <p className={lightTheme ? "con-timestamp" : "con-timestamp dark"}>
            {props.timeStamp}
          </p>
        </div>
        <IconButton className={lightTheme ? "" : "dark"}>
          <DeleteIcon />
        </IconButton>
      </div>
      <div
        className={
          lightTheme ? "messeges-container" : "messeges-container dark"
        }
      >
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
      </div>
      <div className={lightTheme ? "text-input-area" : "text-input-area dark"}>
        <input
          placeholder="Type a Message"
          className={lightTheme ? "search-box" : "search-box dark"}
        />
        <IconButton>
          <SendIcon className={lightTheme ? "" : "dark"} />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
