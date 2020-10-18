import React from 'react'
import { Avatar } from '@material-ui/core';
import "./PostInput.css"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

function PostInput() {
    return (
        <div className="postInput">
          
                <Avatar  className="postInput__avatar"src="https://pbs.twimg.com/profile_images/1289438305969254402/UBOYNi2s_400x400.jpg"/>
                <form>
                <div className="postInput__top">
                    <textarea
                        className="postInput__input"
                        placeholder="Update Status"
                    />
                    </div>
                    <div className="postInput__bottom">
                    <input type="file"
                    placeholder={`image URL (Optional)`}
                    />
                    <button >
                        Hidden Submit
                    </button>
                    </div>
                </form>
           
 
            
        </div>
    )
}

export default PostInput
