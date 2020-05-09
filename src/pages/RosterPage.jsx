import React from 'react';
import { observer } from 'mobx-react';
import { Grid, Typography, Divider } from '@material-ui/core';
import RosterTable from '../components/rosterComponents/RosterTable';
import SeasonsSelector from '../components/rosterComponents/SeasonsSelector';
import AddSwimmerComponent from '../components/rosterComponents/AddSwimmerComponent';

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
                    <AddSwimmerComponent/>
                </Grid>

                <Grid item style = {{width: '100%'}}>
                    <Divider/>
                </Grid>

                <Grid item>
                    <RosterTable/>
                </Grid>
            </Grid>
        )
    }
};

export default observer(RosterPage);