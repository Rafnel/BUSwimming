import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button } from '@material-ui/core';

const AddSwimmerButton = inject("rosterState")(observer(class AddSwimmerButton extends React.Component{
    onClick = () => {
        this.props.rosterState.addingSwimmer = true;
    }
    render(){
        return(
            <Button
                style = {{textTransform: "initial"}}
                variant = "contained"
                color = "primary"
                disabled = {this.props.rosterState.addingSwimmer}
                onClick = {this.onClick}
            >
                Add Swimmer
            </Button>
        )
    }
}));

export default AddSwimmerButton;