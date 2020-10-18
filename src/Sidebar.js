import React from 'react'
import "./Sidebar.css"
import Collapsible from "react-collapsible"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined"
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined"
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h2> Welcome Christian</h2>
                <h2>Your Profile</h2>
                <h2>New Post + </h2>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__inbox">
                <Collapsible  className="sidebar__collapsible" trigger={<div className="inbox__collapsibleHeader">Your Inbox  <MailOutlineIcon/></div>}  triggerlazyRender="true"
            transitionTime={200}>
                <h5>Send Private Message <AddCircleOutlineIcon/></h5>
                    <h5 className="sidebar__inboxOption">Christian & Robby</h5>
                    <h5 className="sidebar__inboxOption">Christian & Bob</h5>
                    <h5 className="sidebar__inboxOption">Christian & Billy</h5>
                    <h5 className="sidebar__inboxOption">Christian & Johnny</h5>
                </Collapsible>
                </div>
                <div className="sidebar__rooms">
                <Collapsible  className="sidebar__collapsible" trigger={<div className="inbox__collapsibleHeader">Public Rooms  <MailOutlineIcon/></div>} triggerlazyRender="true"
            transitionTime={200}>
                <h5 className="sidebar__roomHeader">Create a new room <GroupAddOutlinedIcon/></h5>
                    <h5 className="sidebar__inboxOption">General chat</h5>
                    <h5 className="sidebar__inboxOption">Trade Chat</h5>
                    <h5 className="sidebar__inboxOption">Local Defense</h5>
                    <h5 className="sidebar__inboxOption">Guild Recruitment</h5>
                </Collapsible>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
