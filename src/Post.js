import { Avatar } from '@mui/material';
import React from 'react';
import './Post.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

function Post({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
}){
    return (
        <div className='post'>
            <div className="post__avatar">
                <Avatar />
            </div>

            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>Bruno Leo 
                            <span><VerifiedIcon className='post__badge' /></span>
                            <span className='post__headerSpecial'>@codeskills</span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat suscipit obcaecati eos libero temporibus?
                        </p>
                    </div>
                </div>
                <img src="https://i.pinimg.com/originals/a8/69/16/a8691671f6269ebac0436049c5206882.gif" alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineOutlinedIcon fontSize='small' />
                    <RepeatOutlinedIcon fontSize='small' />
                    <FavoriteBorderOutlinedIcon fontSize='small' />
                    <ShareOutlinedIcon fontSize='small' />
                </div>
            </div>

        </div>
    );
}

export default Post;