import React, { useEffect, useState } from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import db from './firebase';
import { collection, getDocs } from 'firebase/firestore';

function Feed(){

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function postsOnDatabase(db) {
            const postsCol = collection(db, 'posts');
            const postsSnapshot = await getDocs(postsCol);
            setPosts(postsSnapshot.docs.map(doc => doc.data()));
        }

        postsOnDatabase(db);

    }, [posts]);


    return (
        <div className='feed'>
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            <TweetBox />

            {posts.map((post) => (
                <Post
                    key={post.text}
                    displayName={post.displayName}
                    userName={post.userName}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
        
        </div>
    );
}

export default Feed;