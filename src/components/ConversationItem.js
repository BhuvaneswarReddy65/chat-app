import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ConversationItem = ({ props }) => {
  const lightTheme = useSelector((state) => state.themekey);
  const navigate = useNavigate();
  const { name, lastMessege, timeStamp } = props;
  return (
    <div>
      <div
        className={
          lightTheme ? "conversation-container" : "conversation-container dark"
        }
        onClick={() => {
          navigate("chat");
        }}
      >
        <p className="con-icon">{name[0]}</p>
        <p className="con-title">{name}</p>
        <p className={lightTheme ? "con-lastMessage" : "con-lastMessage dark"}>
          {lastMessege}
        </p>
        <p className="con-timeStamp">{timeStamp}</p>
      </div>
    </div>
  );
};

export default ConversationItem;
