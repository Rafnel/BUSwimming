import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { ICONS } from '../utils/theme';
import logo from "../images/bearlogo.png";
import { inject, observer } from 'mobx-react';
import AccountButton from './account/AccountButton';


const HeaderBar = inject("uiState")(observer(class HeaderBar extends React.Component{
    onMenuClick = () => {
        this.props.uiState.drawerOpen = !this.props.uiState.drawerOpen;
    }

    render(){
        return(
            <AppBar position = "sticky">
                <Toolbar>
                    <Grid justify = "space-between" container alignItems = "center">
                        <Grid item>
                            <div style = {{display: "flex"}}>
                                <IconButton onClick = {this.onMenuClick} edge = "start" style = {{color: ICONS}}>
                                    <MenuIcon/>
                                </IconButton>

                                <img style = {{margin: "auto"}} alt = "BU Logo" height = "50px" src = {logo}/>
                            </div>
                        </Grid>

                        <Grid item>
                            <AccountButton/>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}));

export default HeaderBar;