import React from 'react'
import "./SideBar.css"
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebar-wrapper">
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
        </div>
    </div>
  )
}

export default SideBar