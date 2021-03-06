import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
import toolz from '../toolz.jpg'
export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className='logo'>Naeadmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />       
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />   
                    </div>
                    <img src={toolz} alt="" className='topAvatar' />
                </div>
            </div>
        </div>
    );
}

