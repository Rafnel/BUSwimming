import React from 'react';
import { observer, inject } from 'mobx-react';
import { Typography, Container, Card, CardHeader, CardContent, Chip, Grid } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import { PRIMARY, SECONDARY } from '../utils/theme';

const ProfilePage = inject("userState")(observer(class ProfilePage extends React.Component {
    render(){
        let user = this.props.userState.user;
        console.log(JSON.stringify(user));
        if(this.props.userState.loading){
            return(
                <div>Loading...</div>
            )
        }
        else{
            let emailStatus;
            if(user.email_verified){
                emailStatus = "Verified";
            }
            else{
                emailStatus = "Unverified";
            }

            return(
                <Container maxWidth = "sm" style = {{marginTop: 10}}>
                    <Card style = {{backgroundColor: "#DCDCDC"}}>
                        <CardHeader subheader = {user.email} title = "Swimmer Profile"/>

                        <CardContent>
                            <Grid container direction = "column" spacing = {1}>
                                <Grid item>
                                    <Chip color = "primary" label = {"Email: " + user.email}/>
                                </Grid>

                                <Grid item>
                                    <Chip color = "primary" label = {emailStatus}/>
                                </Grid>

                                <Grid item>
                                    <Chip color = "primary" label = {"Role: " + user.role}/>
                                </Grid>

                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            )
        }
    }
}));

export default ProfilePage;