import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import './Sidebar.css'
function Sidebar() {

    const user = useSelector(selectUser);
    const  recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">
                #
            </span>
        <p>{topic}</p>
        </div>
    );
    return (
        
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                <Avatar className="sidebar__avatar">
                    {user.email[0].toUpperCase()}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who view your proifle</p>
                    <p className="sidebar__statNumber">
                        1,545
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">
                        3,487
                    </p>
                </div>
            </div>
        <div className="siderbar__bottom">
            <p>Recent</p>
            {recentItem('ReactJs')}
            {recentItem('Material-ui')}
            {recentItem('LearningJS')}
            {recentItem('ReactForLife')}
        </div>
        </div>
    )
}

export default Sidebar
