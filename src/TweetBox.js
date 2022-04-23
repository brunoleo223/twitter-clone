import { Avatar, Button } from '@mui/material';
import React from 'react';
import './TweetBox.css';

function TweetBox(){
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar sx={{ width: 50, height: 50 }} src="https://pbs.twimg.com/profile_images/1509897352081022978/jPWokXTe_x96.jpg" />
                    <input type="text" placeholder="What's happening?" />
                </div>
                <input className='tweetBox__imageInput' type="text" placeholder="Optional: Enter image URL" />
                <Button className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;