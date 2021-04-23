import React from 'react'
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StartRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlasOnIcon from "@material-ui/icons/FlashOn"
import IconButton from "@material-ui/core/IconButton"

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton>
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton>
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton>
                <StartRateIcon fontSize="large" />
            </IconButton>
            <IconButton>
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton>
                <FlasOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
