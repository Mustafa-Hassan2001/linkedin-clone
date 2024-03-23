import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import img1 from './images/LinkedIn_icon.svg.png';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { auth } from './firebase';

function Header() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
    <div className="header">
        <div className="header__left">
            <img src={img1} alt="" />
        
            <div className="header__search">
                <SearchIcon />
                <input placeholder='Sreach' type="text" />
            </div>
        </div>
        <div className="header__Right">
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={ChatIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption avatar={true} title="me" onClick/>
        </div>
    </div>
    );
}

export default Header;