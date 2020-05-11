import React from 'react';
import { Fragment } from 'react';
import { observer, inject } from 'mobx-react';

const ProfilePage = inject("userState")(observer(class ProfilePage extends React.Component {
    render(){
        let user = this.props.userState.user;

        if(this.props.userState.loading){
            return(
                <div>Loading...</div>
            )
        }
        else{
            return(
                <div style = {{margin: 10}}>
                    <img src={user.picture} alt="Profile" />

                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                    <code>{JSON.stringify(user, null, 2)}</code>
                </div>
            )
        }
    }
}));

export default ProfilePage;