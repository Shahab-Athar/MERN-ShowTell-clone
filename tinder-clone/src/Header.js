import React from 'react'

import './Header.css'

import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>
            
            <img
                className = "header_logo"
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/338_Tinder_logo-128.png"
                alt=""/>
            
            <IconButton>
                <ForumIcon fontSize="large" className = "header_icon" />
            </IconButton>
        </div>
    )
}

export default Header
