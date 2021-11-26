import React from 'react'
import SidebarPost from './SidebarPost'

function Sidebar() {
     
    return (
        <div className="sidebar">
            {/* {headlinesList && <SidebarPost headlines={headlinesList.articles[1]} />}   */}
            <SidebarPost  />  
            <SidebarPost />  
            <SidebarPost />  
        </div>
    )
}

export default Sidebar
