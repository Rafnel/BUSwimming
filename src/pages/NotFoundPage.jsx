import React from 'react';
import { observer } from 'mobx-react';
import { Grid, Typography } from '@material-ui/core';

const NotFoundPage = class NotFoundPage extends React.Component {
    render(){
        return(
            <Grid container justify = "center" alignItems = "center">
                <Grid item>
                    <Typography variant = "h5">
                        Page Not Found!
                    </Typography>
                </Grid>
            </Grid>
        )
    }
};

export default NotFoundPage;