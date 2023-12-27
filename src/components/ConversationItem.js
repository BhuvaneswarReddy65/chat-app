import React from "react";

const ConversationItem = ({ props }) => {
  const { name, lastMessege, timeStamp } = props;
  return (
    <div>
      <div className="conversation-container">
        <p className="con-icon">{name[0]}</p>
        <p className="con-title">{name}</p>
        <p className="con-lastMessage">{lastMessege}</p>
        <p className="con-timeStamp">{timeStamp}</p>
      </div>
    </div>
  );
};

export default ConversationItem;
