import React from 'react'
import './swipebutton.css'
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ReplayIcon from '@mui/icons-material/Replay';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AppsIcon from '@mui/icons-material/Apps';
import { IconButton } from '@mui/material';
import StarRate from '@mui/icons-material/StarRate';
function Swipebutton() {
    return (
        <div className="swipeButton">
            <IconButton  className="rep ct" >
                <ReplayIcon />
            </IconButton>
            <IconButton  className="close ct">
                <CloseIcon/>
            </IconButton>
            <IconButton  className="sr ct">
                <StarRate/>
            </IconButton>
            <IconButton className="fav ct">
                 <FavoriteIcon/>
            </IconButton>
            <IconButton className="fo ct">
                  <FlashOnIcon/>
            </IconButton>
        </div>
    )
}

export default Swipebutton
