import React from 'react';
import { observer } from 'mobx-react';
import { Grid, Typography } from '@material-ui/core';

const RosterPage = class RosterPage extends React.Component {
    render(){
        return(
            <Grid container justify = "center" alignItems = "center">
                <Grid item>
                    <Typography variant = "h5">
                        Baylor Swim Club Roster
                    </Typography>
                </Grid>
            </Grid>
        )
    }
};

export default observer(RosterPage);