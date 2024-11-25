import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

import "./TopBar.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <span className="logo">CMS 💙</span>
        </div>
        <div className="topbar-right">
          <div className="topbar-icon-container">
            <NotificationsIcon />
            <span className="topbar-icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <LanguageIcon />
            <span className="topbar-icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <SettingsIcon />
          </div>
          <img
            src="images/5886539613504389703.jpg"
            className="topbar-img"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
