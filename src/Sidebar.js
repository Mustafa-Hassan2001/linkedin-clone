import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';


function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
            {reactItem('reactjs')}
            {reactItem('programming')}
            {reactItem('softwareengineering')}
            {reactItem('design')}
            {reactItem('developer')}
        </div>       
    )

  return (
    <div>
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C4D16AQG1J9Z6Q1Q8jw/profile-displaybackgroundimage-shrink_350_1400/0/1616466826824?e=1624492800&v=beta&t=8Z9J" alt="" />
                <Avatar src={user.photoUrl} className='sidebar__avatar'>
                    (user.email[0])
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>  
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar;