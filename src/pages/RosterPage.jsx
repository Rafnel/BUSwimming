import React from 'react';
import { observer, inject } from 'mobx-react';
import { Grid, Typography, Divider, Button } from '@material-ui/core';
import RosterTable from '../components/rosterComponents/RosterTable';
import SeasonsSelector from '../components/rosterComponents/SeasonsSelector';
import AddSwimmerButton from '../components/rosterComponents/AddSwimmerButton';
import Can from '../components/Can';
import { Redirect } from 'react-router';

const RosterPage = class RosterPage extends React.Component {
    onCopyClick = () => {
        let textToCopy = "";
        //loop through each swimmer, add their email to a string and comma-separate.
        for(let i = 0; i < this.props.rosterState.swimmers.length; i++){
            textToCopy += this.props.rosterState.swimmers[i].email.S;

            if(i !== (this.props.rosterState.swimmers.length - 1)){
                textToCopy += ";";
            }
        }
        //copy the emails to user's clipboard
        navigator.clipboard.writeText(textToCopy);
        this.props.uiState.successMessage = "Copied to clipboard successfully!";
    }

    render(){
        let user = this.props.userState.user;

        if(this.props.userState.loading){
            return(
                <Typography variant = "h3">
                    Authenticating...
                </Typography>
            )
        }
        else{
            return(
                <Can
                    role = {user.role}
                    perform = "manage:roster"
                    yes = {() => (
                        <Grid container spacing = {1} direction = "column" justify = "center" alignItems = "center">
                            <Grid item>
                                <Typography variant = "h5">
                                    Baylor Swim Club Roster
                                </Typography>
                            </Grid>
    
                            <Grid item>
                                <SeasonsSelector/>
                            </Grid>
    
                            <Grid item>
                                <AddSwimmerButton/>
    
                                &nbsp;
    
                                <Button
                                    style = {{textTransform: "initial"}}
                                    variant = "contained"
                                    onClick = {this.onCopyClick}
                                >
                                    Copy Emails to Clipboard
                                </Button>
                            </Grid>
    
                            <Grid item style = {{width: '100%'}}>
                                <Divider/>
                            </Grid>
    
                            <Grid item>
                                <RosterTable/>
                            </Grid>
                        </Grid>
                    )}
                    no = {() => {
                        this.props.uiState.errorMessage = "You do not have access to the roster page.";
                        return <Redirect to = "/"/>;
                    }}
                />
            )
        }
    }
};

export default inject("rosterState", "uiState", "userState")(observer(RosterPage));