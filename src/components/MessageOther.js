import React from "react";

const MessageOther = () => {
  var props = { name: "otherUser", messege: "this is sample messeage" };
  //var props = { name: "you", messege: "this is sample messeage" };
  return (
    <>
      <div className="other-messege-container">
        <div className="conversation-container">
          <p className="con-icon">{props.name[0]}</p>

          <div className="other-text-container">
            <p className="con-title">{props.name}</p>
            <p className="con-lastMessage">{props.messege}</p>
            <p className="selftimestamp">12.00am</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageOther;
