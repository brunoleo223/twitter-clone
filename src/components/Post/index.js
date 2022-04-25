import React, { forwardRef } from 'react';
import { Avatar } from '@mui/material';
import './style.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const Post = forwardRef(({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar,
    time
}, ref) => {
    return (
        <div className='post' ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar} sx={{ width: 50, height: 50 }} />
            </div>

            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>{displayName} 
                            {verified && <span><VerifiedIcon className='post__badge' /></span>}
                            <span className='post__headerSpecial'> @{userName}</span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p> 
                            {text}
                        </p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineOutlinedIcon fontSize='small' />
                    <RepeatOutlinedIcon fontSize='small' />
                    <FavoriteBorderOutlinedIcon fontSize='small' />
                    <ShareOutlinedIcon fontSize='small' />
                </div>
            </div>

        </div>
    );
})

export default Post;