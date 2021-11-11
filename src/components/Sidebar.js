import React from 'react'
import SidebarPost from './SidebarPost'

function Sidebar() {
     
    return (
        <div className="sidebar">
            <h2>Top Stories</h2>
            <SidebarPost />  
            <SidebarPost />  
            <SidebarPost />  
        </div>
    )
}

export default Sidebar
