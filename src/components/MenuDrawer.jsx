import React from 'react';
import { SwipeableDrawer, Typography, List, ListItem, ListItemText, Box } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import {Link} from "react-router-dom"
import Can from './Can';

const MenuDrawer = inject("uiState", "userState")(observer(class MenuDrawer extends React.Component{
    menuDrawerAction = () => {
        this.props.uiState.drawerOpen = !this.props.uiState.drawerOpen;
    }
    render(){
        return(
            <SwipeableDrawer
                open = {this.props.uiState.drawerOpen}
                onOpen = {() => this.props.uiState.drawerOpen = true}
                onClose = {this.menuDrawerAction}
            >
                <Box px = {3} py = {1}>
                    <Typography variant = "h6">Baylor University Swimming</Typography>
                    <Typography variant = "caption">Version: 0.01</Typography>
                    <List>
                        <ListItem button component = {Link} to = "/" onClick = {this.menuDrawerAction}>
                            <ListItemText>Home</ListItemText>
                        </ListItem>

                        {this.props.userState.isAuthenticated && 
                            <ListItem button component = {Link} to = "/profile" onClick = {this.menuDrawerAction}>
                                <ListItemText>Profile</ListItemText>
                            </ListItem>
                        }

                        {this.props.userState.isAuthenticated && !this.props.userState.loading &&
                            <Can
                                role = {this.props.userState.user.role}
                                perform = "manage:roster"
                                yes = {() => 
                                    <ListItem button component = {Link} to = "/roster" onClick = {this.menuDrawerAction}>
                                        <ListItemText> Manage Roster </ListItemText>
                                    </ListItem>
                                }
                            />
                        }
                    </List>
                </Box>
            </SwipeableDrawer>
        )
    }
}));

export default MenuDrawer;