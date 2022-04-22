import { Avatar, Button } from '@mui/material';
import React from 'react';
import './TweetBox.css';

function TweetBox(){
    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar />
                    <input type="text" placeholder="What's happening?" />
                </div>
                <Button>Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;