import React from 'react'
import {Avatar} from "@material-ui/core";
import "./Post.css"

function Post({ profilePic, image, username, timestamp, message, likes}) {
    return (
        <div className="post">
         <div className="post__top">
             <div className="post__authorInfo">
             <Avatar src={profilePic} className="post__avatar"/>
             <div className="post__topInfo">
                 <h3>{username}</h3>
                 <p>{timestamp}</p>
             </div>
             </div>
             <div className="post__likes">
         <h3>{likes} likes</h3>
         </div>
         </div>
         
         <div className="post__bottom">
             <p>{message}</p>
          <div className="post__image">
             <img src={image} alt=""/>
         </div>
         <div className="post__options">
                    <div className='post__option'>                        
                        <p>Like</p>
                    </div>                

                    <div className='post__option'>                        
                        <p>Comment</p>
                    </div> 
                </div>
         </div>
        

        </div>
    )
}

export default Post
