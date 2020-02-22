import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { ICONS } from '../utils/theme';
import logo from "../images/bearlogo.png";
import { inject, observer } from 'mobx-react';


const HeaderBar = inject("uiState")(observer(class HeaderBar extends React.Component{
    onMenuClick = () => {
        this.props.uiState.drawerOpen = !this.props.uiState.drawerOpen;
    }

    render(){
        return(
            <AppBar position = "sticky">
                <Toolbar>
                    <IconButton onClick = {this.onMenuClick} edge = "start" style = {{color: ICONS}}>
                        <MenuIcon/>
                    </IconButton>

                    <img height = "50px" src = {logo}/>

                    <Typography variant = "h5">
                        Baylor Swim Club
                    </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}));

export default HeaderBar;