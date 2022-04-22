import React from "react";
import './Sidebar.css';
import SidebarOption from "./SidebarOption";

import HomeIcon from '@mui/icons-material/Home';
import TwitterIcon from '@mui/icons-material/Twitter';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from "@mui/material";

function Sidebar(){
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon />

            {/* SidebarOption */}
            <SidebarOption active Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineOutlinedIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizIcon} text="More" />

            {/* Button -> Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    );
}

export default Sidebar;