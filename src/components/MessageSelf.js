import React from "react";
import { useSelector } from "react-redux";

const MessageSelf = () => {
  const lightTheme = useSelector((state) => state.themekey);
  var props2 = { name: "you", message: "hi" };
  return (
    <>
      <div
        className={
          lightTheme ? "message-self-container" : "message-self-container dark"
        }
      >
        <div className="message-box">
          <p className={lightTheme ? "" : "par"}>{props2.message}</p>
          <p className={lightTheme ? "" : "selftimestamp par"}>12.00am</p>
        </div>
      </div>
    </>
  );
};

export default MessageSelf;
