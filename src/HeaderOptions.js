import { Avatar } from '@material-ui/core'
import React from 'react'
import './HeaderOptions.css'

function HeaderOptions({avatar, Icon,  title, onClick,username}) {
    return (
        <div className="headerOptions" onClick={onClick}>
            {Icon && <Icon className="headerOptions__icon"/>}
            {avatar && <Avatar className="headerOptions__avatar" >{title? title[0].toUpperCase():null}</Avatar>}
             <h3 className="headerOptions__title">{title? title : 'Login'}</h3>
        </div>
    )
}

export default HeaderOptions
