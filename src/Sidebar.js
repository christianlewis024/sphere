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



function Sidebar() {
    const [channels, setChannels] = useState([])
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

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <div className="sidebar__greeting">
                <h2> Welcome {user.displayName}</h2>
                </div>
              
            </div>
            <SidebarOption  Icon={AddIcon} addChannelOption title="New Public Chat"/>
            {channels.map(channel => (
                <SidebarOption title={channel.name} id={channel.id}/>
            ))}

            {/* <div className="sidebar__bottom">
                <div className="sidebar__inbox">
                
                <Collapsible  className="sidebar__collapsible" trigger={<div className="sidebar__collapsibleHeader"><h5>Your Inbox  <MailOutlineIcon/></h5></div>}  triggerlazyRender="true"
            transitionTime={200}>
                <h4 className="sidebar__borderBottom">New Message <AddCircleOutlineIcon/></h4>
                
                <div className="sidebar__inboxItems">
                    <h5 className="sidebar__inboxOption">Christian & Robby</h5>
                    <h5 className="sidebar__inboxOption">Christian & Bob</h5>
                    <h5 className="sidebar__inboxOption">Christian & Billy</h5>
                    <h5 className="sidebar__inboxOption">Christian & Johnny</h5>
                    <h5 className="sidebar__inboxOption">Christian & Robby</h5>
                    <h5 className="sidebar__inboxOption">Christian & Bob</h5>
                    <h5 className="sidebar__inboxOption">Christian & Billy</h5>
                    <h5 className="sidebar__inboxOption">Christian & Johnny</h5>
                    <h5 className="sidebar__inboxOption">Christian & Robby</h5>
                    <h5 className="sidebar__inboxOption">Christian & Bob</h5>
                    <h5 className="sidebar__inboxOption">Christian & Billy</h5>
                    <h5 className="sidebar__inboxOption">Christian & Johnny</h5>
                    <h5 className="sidebar__inboxOption">Christian & Robby</h5>
                    <h5 className="sidebar__inboxOption">Christian & Bob</h5>
                    <h5 className="sidebar__inboxOption">Christian & Billy</h5>
                    <h5 className="sidebar__inboxOption">Christian & Johnny</h5>
                    <h5 className="sidebar__inboxOption">Christian & Robby</h5>
                    <h5 className="sidebar__inboxOption">Christian & Bob</h5>
                    <h5 className="sidebar__inboxOption">Christian & Billy</h5>
                    <h5 className="sidebar__inboxOption">Christian & Johnny</h5>
                    <h5 className="sidebar__inboxOption">Christian & Robby</h5>
                    <h5 className="sidebar__inboxOption">Christian & Bob</h5>
                    <h5 className="sidebar__inboxOption">Christian & Billy</h5>
                    <h5 className="sidebar__inboxOption">Christian & Johnny</h5>
                    </div>
                </Collapsible>
                </div>
                <div className="sidebar__rooms">
                <Collapsible  className="sidebar__collapsible" trigger={<div className="sidebar__collapsibleHeader"><h5>Public Rooms  <GroupOutlinedIcon/></h5></div>} triggerlazyRender="true"
            transitionTime={200}>
                <h4 className="sidebar__borderBottom">Create a new room <GroupAddOutlinedIcon/></h4>
                <div className="sidebar__roomItems">
                    <h5 className="sidebar__inboxOption">General chat</h5>
                    <h5 className="sidebar__inboxOption">Trade Chat</h5>
                    <h5 className="sidebar__inboxOption">Local Defense</h5>
                    <h5 className="sidebar__inboxOption">Guild Recruitment</h5>
                    <h5 className="sidebar__inboxOption">General chat</h5>
                    <h5 className="sidebar__inboxOption">Trade Chat</h5>
                    <h5 className="sidebar__inboxOption">Local Defense</h5>
                    <h5 className="sidebar__inboxOption">Guild Recruitment</h5>
                    <h5 className="sidebar__inboxOption">General chat</h5>
                    <h5 className="sidebar__inboxOption">Trade Chat</h5>
                    <h5 className="sidebar__inboxOption">Local Defense</h5>
                    <h5 className="sidebar__inboxOption">Guild Recruitment</h5>
                    <h5 className="sidebar__inboxOption">General chat</h5>
                    <h5 className="sidebar__inboxOption">Trade Chat</h5>
                    <h5 className="sidebar__inboxOption">Local Defense</h5>
                    <h5 className="sidebar__inboxOption">Guild Recruitment</h5>
                    <h5 className="sidebar__inboxOption">General chat</h5>
                    <h5 className="sidebar__inboxOption">Trade Chat</h5>
                    <h5 className="sidebar__inboxOption">Local Defense</h5>
                    <h5 className="sidebar__inboxOption">Guild Recruitment</h5>
                    </div>
                </Collapsible>
                </div>
            </div> */}
        </div>
    )
}

export default Sidebar
