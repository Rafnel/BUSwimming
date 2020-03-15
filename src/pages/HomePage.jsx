import React from 'react';
import { observer } from 'mobx-react';
import { Container, Grid, Typography } from '@material-ui/core';

const HomePage = class HomePage extends React.Component {
    render(){
        return(
            <Grid container justify = "center" alignItems = "center">
                <Grid item>
                    <Typography variant = "h5">
                        Baylor Swim Club
                    </Typography>
                </Grid>
            </Grid>
        )
    }
};

export default observer(HomePage);