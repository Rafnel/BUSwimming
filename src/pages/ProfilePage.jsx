import React from 'react';
import { observer, inject } from 'mobx-react';
import { Typography } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

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
            return(
                <div style = {{margin: 10}}>
                    <Typography variant = "h5">
                        Email: {user.email}
                    </Typography>

                    <Typography variant = "h5">
                        Email Verified: &nbsp;
                        {user.email_verified && 
                            <CheckIcon color = "primary"/>
                        }
                        {!user.email_verified && 
                            <CloseIcon/>
                        }
                    </Typography>

                    <Typography variant = "h5">
                        Role: {user.role}
                    </Typography>
                </div>
            )
        }
    }
}));

export default ProfilePage;