import React, { useEffect, useState } from 'react';
import './style.css';
import Post from '../Post';
import TweetBox from '../TweetBox';
import db from '../../utils/firebase';
import { collection, getDocs } from 'firebase/firestore';
import FlipMove from 'react-flip-move';

function Feed(){

    const [posts, setPosts] = useState([]);

    async function postsOnDatabase(db) {
        const postsCol = collection(db, 'posts');
        const postsSnapshot = await getDocs(postsCol);
        setPosts(postsSnapshot.docs.map(doc => doc.data()));
    }

    useEffect(() => {
        postsOnDatabase(db);

    }, []);


    return (
        <div className='feed'>
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox postsOnDatabase={postsOnDatabase} />
            <FlipMove>
            {posts.map((post) => (
                <Post
                    key={post.time}
                    displayName={post.displayName}
                    userName={post.userName}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
            </FlipMove>
        
        </div>
    );
}

export default Feed;