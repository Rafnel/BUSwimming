import React from 'react';
import { inject, observer } from 'mobx-react';
import { useAuth0 } from '../../utils/react-auth0-spa';
import { Button } from '@material-ui/core';
import { ICONS } from '../../utils/theme';
import BeatLoader from "react-spinners/BeatLoader";


const AccountButton = inject("userState")(observer(({userState, props}) => {
    const {loginWithRedirect, logout} = useAuth0();
    //would only be localhost when developing
    const url = window.location.href;
    let returnTo = "";
    if(url.includes("localhost")){
        returnTo = "http://localhost:3000"
    }
    else{
        returnTo = "https://www.baylorswimclub.com"
    }

    return(
        <div>
            {!userState.isAuthenticated && !userState.loading &&
                <Button
                    onClick = {() => loginWithRedirect({})}
                    style = {{color: ICONS}}
                >
                    Login
                </Button>
            }

            {userState.isAuthenticated && !userState.loading &&
                <Button
                    onClick = {() => logout({returnTo: returnTo})}
                    style = {{color: ICONS}}
                >
                    Log Out
                </Button>
            }

            {userState.loading && <BeatLoader color = "#ffffff"/>}
        </div>
    )
}));

export default AccountButton;