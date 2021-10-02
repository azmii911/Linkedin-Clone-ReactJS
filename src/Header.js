import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOptions from './HeaderOptions';
import { useDispatch } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useSelector } from 'react-redux';

function Header() {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const LogoutHandler = () => {
        dispatch(logout());
        auth.signOut();
    }
    return (
        <div className="header">
            <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Logo" />
                
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />

                </div>
            </div>
            
            <div className="header__right">
                <HeaderOptions title="Home" Icon={HomeIcon}/>
                <HeaderOptions title="My Network" Icon={SupervisorAccountIcon}/>
                <HeaderOptions title="Jobs" Icon={BusinessCenterIcon}/>
                <HeaderOptions title="Messaging" Icon={ChatIcon}/>
                <HeaderOptions title="Notifications" Icon={NotificationsIcon}/>
                <HeaderOptions title={user?.displayName}
                avatar="https://lh3.googleusercontent.com/ogw/ADea4I5D9fzI-3VHPaGZFxa_q3eeCgF65jX54Kpvi8OYXM0=s32-c-mo"
                onClick={LogoutHandler}
                />

            </div>
        </div>
    )
}

export default Header
