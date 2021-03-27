import React from 'react';
import {AppBar} from '@material-ui/core'
import Navigation from '../navigation'

const Header=()=>{
    return (
        <AppBar position="static">
            <Navigation />
        </AppBar>
        
    )
}

export default Header;