import React from "react";

const MessageSelf = () => {
  var props2 = { name: "you", message: "hi" };
  return (
    <>
      <div className="message-self-container">
        <div className="message-box">
          <p>{props2.message}</p>
          <p className="selftimestamp">12.00am</p>
        </div>
      </div>
    </>
  );
};

export default MessageSelf;
