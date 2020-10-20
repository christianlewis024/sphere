import React, {useState, useEffect} from 'react'
import "./Sidebar.css"
import Collapsible from "react-collapsible"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined"
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {useStateValue} from "./StateProvider";
import {db} from "./firebase"
import SidebarOption from "./SidebarOption"
import AddIcon from "@material-ui/icons/Add"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SidebarPublic from "./SidebarPublic" 



function Sidebar() {
    const [channels, setChannels] = useState([])
    const [chats, setChats] = useState([])
    const [{user}] = useStateValue();

    useEffect(() => {
        // run this code ONCE when the sidebar component loads
        db.collection('rooms').orderBy("name", "asc").onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        ))
    }, [])
    useEffect(() => {
        // run this code ONCE when the sidebar component loads
        db.collection('chats').where('users', 'array-contains', user.email).onSnapshot(snapshot => (
            setChats(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name
                }))
            )
        ))
    }, [])


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <div className="sidebar__greeting">
                <h2> Welcome {user.displayName}</h2>
                </div>
              
            </div>
            
            <SidebarPublic  Icon={AddIcon} addChannelOption title="New Public Chat"/>
            {channels.map(channel => (
                <SidebarPublic title={channel.name} id={channel.id}/>
            ))}
            <SidebarOption  Icon={AddIcon} addChatOption title="New Private Chat"/>
            {chats.map(channel => (
                <SidebarOption title={channel.name} id={channel.id}/>
            ))}      
        </div>
    )
}

export default Sidebar
