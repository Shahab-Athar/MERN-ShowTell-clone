import React from 'react'

import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StartRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlasOnIcon from "@material-ui/icons/FlashOn"
import IconButton from "@material-ui/core/IconButton"

import './SwipeButtons.css'


function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons_repeat">
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_left">
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_star">
                <StartRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_right">
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons_lightning">
                <FlasOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
