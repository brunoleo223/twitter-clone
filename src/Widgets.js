import React from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from "react-twitter-embed";
import SearchIcon from '@mui/icons-material/Search';

function Widgets(){
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className='widgets__searchIcon' />
                <input type="text" placeholder='Search Twitter' />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1471866472179937289"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName='JavaScript'
                    options={{height: 300}}
                />
                <br></br>
                <TwitterShareButton
                    url={"https://codesckills.com.br"}
                    options={{text: "#reactjs is amazing!"}}
                />
            </div>
        </div>
    );
}

export default Widgets; 