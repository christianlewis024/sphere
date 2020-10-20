import React from 'react'
import "./SidebarOption.css"
import { useHistory } from "react-router-dom"
import {db} from './firebase';
import { useStateValue } from './StateProvider'

// import 'reactjs-popup/dist/index.css';

function SidebarPublic({Icon, title, id,  addChannelOption, addChatOption}) {
    const history = useHistory();
    const [{user}] = useStateValue();

    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`)
        } else {
            history.push('title')
        }
    };
    
   

    const addChannel = () => {
        const channelName = prompt('please enter the channel name')

        if ( channelName) {
            db.collection('rooms').add({
                name: channelName
            })
        }
    }
    
    return (
        <div className="sidebarOption" onClick={addChannelOption ?  addChannel : selectChannel }>
           {Icon && <Icon className="sidebarOption__icon"/>}
           {Icon ? (
               <h3>{title}</h3>
           ) : (
               <h3 className="sidebarOption__channel">
                  <span className="sidebarOption__hash"> # {title}</span>       
               </h3>
               
               
           )}
        </div>
    )
}

export default SidebarPublic
