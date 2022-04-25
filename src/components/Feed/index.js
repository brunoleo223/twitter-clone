import React, { useEffect, useState } from 'react';
import './style.css';
import Post from '../Post';
import TweetBox from '../TweetBox';
import db from '../../utils/firebase';
import { collection, getDocs } from 'firebase/firestore';
import FlipMove from 'react-flip-move';

function Feed(){

    const [posts, setPosts] = useState([]);

    async function postsOnDatabase(db, posts) {
        const postsCol = collection(db, 'posts');
        const postsSnapshot = await getDocs(postsCol);
        const allPosts = postsSnapshot.docs.map(doc => doc.data());
        const sortedPosts = sortPostsBasedTimestamp(allPosts)
        setPosts(sortedPosts);
        
         
    }

    function sortPostsBasedTimestamp(posts){
        const sortedPosts = posts.sort(function(a,b){
            return new Date(b.time) - new Date(a.time);
        });

        return sortedPosts;
    }

    useEffect(() => {
        postsOnDatabase(db, posts);
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
                    time={post.time}
                />
            ))}
            </FlipMove>
        
        </div>
    );
}

export default Feed;