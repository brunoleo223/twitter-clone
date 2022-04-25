import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import db from '../../utils/firebase';
import './style.css';
import { collection, doc, setDoc } from "firebase/firestore"; 

function TweetBox({postsOnDatabase}){

    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        // Prevent page reload
        e.preventDefault();

        // Async Function to add doc in firestore
        async function publishPost(newPost, dataPost){
            await setDoc(newPost, dataPost);
        }

        // generate a new reference for a document 
        const newPost = doc(collection(db, "posts"));

        // data posts
        const dataPost = {
            displayName: "Bruno Leonardo",
            userName: "brunoleo223",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://pbs.twimg.com/profile_images/1509897352081022978/jPWokXTe_x96.jpg",
            time: new Date().getTime()
        }

        // call function to add post
        publishPost(newPost, dataPost)

        // reset states
        setTweetImage("");
        setTweetMessage("");

        postsOnDatabase(db)
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox__input'>
                    <Avatar 
                        sx={{ width: 50, height: 50 }} 
                        src="https://pbs.twimg.com/profile_images/1509897352081022978/jPWokXTe_x96.jpg"
                    />

                    <input 
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        type="text" 
                        placeholder="What's happening?" 
                    />
                </div>
                <input 
                    onChange={e => setTweetImage(e.target.value)}
                    value={tweetImage} 
                    className='tweetBox__imageInput' 
                    type="text" 
                    placeholder="Optional: Enter image URL" 
                />
                
                <Button onClick={sendTweet} type="submit" className='tweetBox__tweetButton'>Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;