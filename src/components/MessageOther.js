import React from "react";
import "./myStyles.css";
import { useSelector } from "react-redux";
const MessageOther = () => {
  const lightTheme = useSelector((state) => state.themekey);
  var props = { name: "otherUser", messege: "this is sample messeage" };
  //var props = { name: "you", messege: "this is sample messeage" };
  return (
    <>
      <div
        className={
          lightTheme
            ? "other-messege-container"
            : "other-messege-container  dark"
        }
      >
        <div
          className={
            lightTheme
              ? "conversation-container"
              : "conversation-container dark"
          }
        >
          <p className="con-icon">{props.name[0]}</p>

          <div
            className={
              lightTheme ? "other-text-container" : "other-text-container dark"
            }
          >
            <p className={lightTheme ? "con-title" : "con-title dark"}>
              {props.name}
            </p>
            <p
              className={
                lightTheme ? "con-lastMessage" : "con-lastMessage dark"
              }
            >
              {props.messege}
            </p>
            <p className="selftimestamp">12.00am</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageOther;
