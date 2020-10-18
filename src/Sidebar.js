import React from 'react'
import "./Sidebar.css"
import Collapsible from "react-collapsible"
import MailOutlineIcon from "@material-ui/icons/MailOutline"
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined"
import GroupAddOutlinedIcon from "@material-ui/icons/GroupAddOutlined"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h1> Welcome Christian</h1>
                <h2>Your Profile</h2>
                <h2>New Post + </h2>
            </div>
            <div className="sidebar__bottom">
                <div className="sidebar__inbox">
                <Collapsible  className="sidebar__collapsible" trigger="Inbox" triggerSibling={() => (
              <>
                 <MailOutlineIcon/>
               </>
            )} triggerlazyRender="true"
            transitionTime={200}>
                    <h5 className="sidebar__inboxOption">Christian & Robby</h5>
                    <h5 className="sidebar__inboxOption">Christian & Bob</h5>
                    <h5 className="sidebar__inboxOption">Christian & Billy</h5>
                    <h5 className="sidebar__inboxOption">Christian & Johnny</h5>
                </Collapsible>
                </div>
                <div className="sidebar__rooms">
                <Collapsible  className="sidebar__collapsible" trigger="Rooms" triggerSibling={() => (
              <>
                 <GroupOutlinedIcon/>
               </>
            )} triggerlazyRender="true"
            transitionTime={200}>
                <h5><strong>Create a new room</strong> <GroupAddOutlinedIcon/></h5>
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
