import React from 'react'
import "./Feed.css"
import Post from "./Post"
import PostInput from "./PostInput"

function Feed() {
    return (
        <div className="feed">
            <PostInput/>
            <Post
                key="123"
                likes={4}            
                profilePic="https://upload.wikimedia.org/wikipedia/en/8/8a/KingLouie.jpg"
                message="I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post!  I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! "                
                username="Christian"
                timestamp="2/22/22 2:22:22"
                image="https://www.awaltzthroughdisney.com/uploads/6/2/7/6/6276678/9560980_orig.jpg"
                />
            <Post
                key="123"
                likes={4}
                profilePic="https://upload.wikimedia.org/wikipedia/en/8/8a/KingLouie.jpg"
                message="Mans red fire! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! "                
                username="Christian"
                timestamp="2/22/22 2:22:22"
                image="https://www.awaltzthroughdisney.com/uploads/6/2/7/6/6276678/9560980_orig.jpg"
                />
            <Post
                key="123"
                likes={4}
                profilePic="https://upload.wikimedia.org/wikipedia/en/8/8a/KingLouie.jpg"
                message="Mans red fire! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! I am going to test a longer post! "                
                username="Christian"
                timestamp="2/22/22 2:22:22"
                image="https://www.awaltzthroughdisney.com/uploads/6/2/7/6/6276678/9560980_orig.jpg"
                />
            <Post
                key="123"
                likes={4}
                profilePic="https://upload.wikimedia.org/wikipedia/en/8/8a/KingLouie.jpg"
                message="Mans red fire!"                
                username="Christian"
                timestamp="2/22/22 2:22:22"
                image="https://www.awaltzthroughdisney.com/uploads/6/2/7/6/6276678/9560980_orig.jpg"
                />
            <Post
                key="123"
                likes={4}
                profilePic="https://upload.wikimedia.org/wikipedia/en/8/8a/KingLouie.jpg"
                message="Mans red fire!"                
                username="Christian"
                timestamp="2/22/22 2:22:22"
                image="https://www.awaltzthroughdisney.com/uploads/6/2/7/6/6276678/9560980_orig.jpg"
                />
        </div>
       
    )
}

export default Feed
