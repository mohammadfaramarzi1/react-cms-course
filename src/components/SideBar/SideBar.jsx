import React from 'react'
import "./SideBar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-wrapper">
            {/* Dashboard Section */}
            <div className="sidebar__menu">
                <h3 className='sidebar__title'>Dashboard</h3>
                <ul className='sidebar__list'>
                    <li className='sidebar__list-item active'>
                        <LineStyleIcon className="sidebar__icon" />
                        Home
                    </li>
                    <li className='sidebar__list-item'>
                        <TimelineIcon className="sidebar__icon" />
                        Analytics
                    </li>
                    <li className='sidebar__list-item'>
                        <TrendingUpIcon className="sidebar__icon" />
                        Sales
                    </li>
                </ul>
            </div>
            {/* Dashboard Section */}
            {/* Quick Menu Section */}
            <div className="sidebar__menu">
                <h3 className='sidebar__title'>Quick Menu</h3>
                <ul className='sidebar__list'>
                    <li className='sidebar__list-item'>
                        <PermIdentityIcon className="sidebar__icon" />
                        Users
                    </li>
                    <li className='sidebar__list-item'>
                        <StorefrontIcon className="sidebar__icon" />
                        New User
                    </li>
                    <li className='sidebar__list-item'>
                        <AttachMoneyIcon className="sidebar__icon" />
                        Products
                    </li>
                    <li className='sidebar__list-item'>
                        <BarChartIcon className="sidebar__icon" />
                        Transactions
                    </li>
                    <li className='sidebar__list-item'>
                        <MailOutlineIcon className="sidebar__icon" />
                        Reports
                    </li>
                </ul>
            </div>
            {/* Quick Menu Section */}
            {/* Notifications Section */}
            <div className="sidebar__menu">
                <h3 className='sidebar__title'>Notifications</h3>
                <ul className='sidebar__list'>
                    <li className='sidebar__list-item active'>
                        <MailOutlineIcon className="sidebar__icon" />
                        Mail
                    </li>
                    <li className='sidebar__list-item'>
                        <DynamicFeedIcon className="sidebar__icon" />
                        Feedback
                    </li>
                    <li className='sidebar__list-item'>
                        <ChatBubbleOutlineIcon className="sidebar__icon" />
                        Messages
                    </li>
                </ul>
            </div>
            {/* Notifications Section */}
        </div>
    </div>
  )
}

export default SideBar