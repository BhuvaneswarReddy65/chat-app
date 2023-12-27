import React, { useState } from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";

const MainContainer = () => {
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
    <div className="main-container">
      <Sidebar />
      <Welcome />
    </div>
  );
};

export default MainContainer;
