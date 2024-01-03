import React from "react";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";
const CreateGroups = () => {
  const lightTheme = useSelector((state) => state.themekey);
  return (
    <div className="create-group-container">
      <input placeholder="Enter Group Name" className="search-box" />
      <IconButton className={lightTheme ? "" : "dark"}>
        <DoneOutlineIcon />
      </IconButton>
    </div>
  );
};

export default CreateGroups;
