import React from 'react';
import "./header.css"; 
import PersonIcon from '@mui/icons-material/Person';
// import PermCameraMicIcon from '@mui/icons-material/PermCameraMic';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
    return (
        <div className="header">
           <IconButton>
            <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>
            <img className="header_logo" src="https://www.citypng.com/public/uploads/preview/-11595270983sekxed5idc.png"/>
            <IconButton>
            <ForumIcon fontSize="large" className="header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header
