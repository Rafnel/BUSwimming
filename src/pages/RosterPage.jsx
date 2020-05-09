import React from 'react';
import { observer } from 'mobx-react';
import { Grid, Typography } from '@material-ui/core';
import RosterTable from '../components/rosterComponents/RosterTable';
import SeasonsSelector from '../components/rosterComponents/SeasonsSelector';

const RosterPage = class RosterPage extends React.Component {
    render(){
        return(
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
                    <RosterTable/>
                </Grid>
            </Grid>
        )
    }
};

export default observer(RosterPage);