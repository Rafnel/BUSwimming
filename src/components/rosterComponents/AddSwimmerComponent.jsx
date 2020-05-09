import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button, Dialog, DialogTitle, IconButton, DialogContent, Grid, TextField, DialogActions } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const AddSwimmerComponent = inject("rosterState")(observer(class AddSwimmerComponent extends React.Component{
    state = {
        addingSwimmer: false,
        modalOpen: false
    }

    handleDialogOpen = () => {
        this.setState({modalOpen: true});
    }

    handleDialogClose = () => {
        this.setState({modalOpen: false});
    }
    
    render(){
        return(
            <div>
                <Button
                    style = {{textTransform: "initial"}}
                    variant = "contained"
                    color = "primary"
                    onClick = {() => this.setState({addingSwimmer: true})}
                >
                    Add Swimmer
                </Button>

                <Dialog
                    open = {this.state.modalOpen}
                    onClose = {this.handleDialogClose}
                >
                    <DialogTitle>
                        Add Swimmer to {this.props.rosterState.selectedSeason} Season
                        
                        &nbsp;

                        <IconButton
                            onClick = {this.handleDialogClose}
                        >
                            <CloseIcon/>
                        </IconButton>
                    </DialogTitle>

                    <DialogContent>
                        <Grid container spacing = {1} direction = "column">
                            <Grid item>
                                <TextField
                                    label = "Swimmer Name"
                                    margin = "dense"
                                    //variant = "outlined"
                                    style = {{width: 300}}
                                />
                            </Grid>
                            
                            <Grid item>
                                Note: all other attributes can be added later.
                            </Grid>
                        </Grid>
                    </DialogContent>

                    <DialogActions>
                        <Button>
                            Cancel
                        </Button>

                        <Button
                            variant = "contained"
                            color = "primary"
                        >
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}));

export default AddSwimmerComponent;