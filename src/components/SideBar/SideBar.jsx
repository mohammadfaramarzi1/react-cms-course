import React from "react";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/WorkOutline";

import { Link } from "react-router-dom";

import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        {/* Dashboard Section */}
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Dashboard</h3>
          <ul className="sidebar__list">
            <Link to="/" className="link">
              <li className="sidebar__list-item active">
                <LineStyleIcon className="sidebar__icon" />
                Home
              </li>
            </Link>
            <li className="sidebar__list-item">
              <TimelineIcon className="sidebar__icon" />
              Analytics
            </li>
            <li className="sidebar__list-item">
              <TrendingUpIcon className="sidebar__icon" />
              Sales
            </li>
          </ul>
        </div>
        {/* Dashboard Section */}
        {/* Quick Menu Section */}
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Quick Menu</h3>
          <ul className="sidebar__list">
            <Link to="/users" className="link">
              <li className="sidebar__list-item">
                <PermIdentityIcon className="sidebar__icon" />
                Users
              </li>
            </Link>
            <Link to="/newUser" className="link">
              <li className="sidebar__list-item">
                <PermIdentityIcon className="sidebar__icon" />
                New User
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebar__list-item">
                <StorefrontIcon className="sidebar__icon" />
                Products
              </li>
            </Link>
            <li className="sidebar__list-item">
              <AttachMoneyIcon className="sidebar__icon" />
              Transactions
            </li>
            <li className="sidebar__list-item">
              <BarChartIcon className="sidebar__icon" />
              Reports
            </li>
          </ul>
        </div>
        {/* Quick Menu Section */}
        {/* Notifications Section */}
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Notifications</h3>
          <ul className="sidebar__list">
            <li className="sidebar__list-item">
              <MailOutlineIcon className="sidebar__icon" />
              Mail
            </li>
            <li className="sidebar__list-item">
              <DynamicFeedIcon className="sidebar__icon" />
              Feedback
            </li>
            <li className="sidebar__list-item">
              <ChatBubbleOutlineIcon className="sidebar__icon" />
              Messages
            </li>
          </ul>
        </div>
        {/* Notifications Section */}
        {/* Staff Section */}
        <div className="sidebar__menu">
          <h3 className="sidebar__title">Staff</h3>
          <ul className="sidebar__list">
            <li className="sidebar__list-item">
              <WorkOutlineIcon className="sidebar__icon" />
              Manage
            </li>
            <li className="sidebar__list-item">
              <TimelineIcon className="sidebar__icon" />
              Analytics
            </li>
            <li className="sidebar__list-item">
              <ReportIcon className="sidebar__icon" />
              Reports
            </li>
          </ul>
        </div>
        {/* Staff Section */}
      </div>
    </div>
  );
}

export default SideBar;
