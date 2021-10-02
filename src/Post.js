import { Avatar } from '@material-ui/core'
import React, { forwardRef } from 'react'
import  ThumbUpAltOutlinedIcon  from '@material-ui/icons/ThumbUpAltOutlined'
import  ChatOutlinedIcon  from '@material-ui/icons/ChatOutlined'
import  ShareOutlinedIcon  from '@material-ui/icons/ShareOutlined'
import  SendOutlinedIcon  from '@material-ui/icons/SendOutlined'

import InputOptions from './InputOptions'
import './Post.css'

const Post= forwardRef(({name,des,photoURl,msg,time},ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post__header">
                <Avatar >{name?.[0].toUpperCase()}</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{des}</p>
                </div>
            </div>
            <div className="post__body">
                    <p>{msg}</p>
            </div>

            <div className="post__buttonss">
                <InputOptions title="Like" Icon={ThumbUpAltOutlinedIcon} color="gray"/>
                <InputOptions title="Comment" Icon={ChatOutlinedIcon} color="gray"/>
                <InputOptions title="Share" Icon={ShareOutlinedIcon} color="gray"/>
                <InputOptions title="Send" Icon={SendOutlinedIcon} color="gray"/>
            </div>
        </div>
    )
})

export default Post
