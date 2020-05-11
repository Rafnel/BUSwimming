import React from 'react';
import { inject, observer } from 'mobx-react';
import { TextField, IconButton, ThemeProvider, Tooltip } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { redTheme } from '../../utils/theme';

const RosterTextField = inject("rosterState")(observer(class RosterTextField extends React.Component{
    state = {
        fieldButtonsVisible: false,
        fieldInProgress: false,
        oldFieldValue: ""
    }

    onFieldFocus = () => {
        //when the user enters the text field, keep a copy of the old value before entering IF they aren't already in progress,
        //and show the save button.
        this.setState({fieldButtonsVisible: true});

        if(!this.state.fieldInProgress){
            //if we haven't already initiated an unsaved/un-discarded input, then keep copy
            this.setState({oldFieldValue: this.props.swimmer[this.props.attribute].S, fieldInProgress: true});
        }
    }

    onSaveClick = () => {
        //save our new value of the text field
        this.setState({fieldInProgress: false, fieldButtonsVisible: false});
        this.props.onSave(this.props.swimmer);
    }

    onBlur = () => {
        //if the user exits the text field and never made any changes, remove the buttons
        if(this.state.oldFieldValue === this.props.swimmer[this.props.attribute].S){
            this.setState({fieldButtonsVisible: false, fieldInProgress: false});
        }
    }

    onDiscardClick = () => {
        //revert to the old value of the field that was saved.
        this.props.swimmer[this.props.attribute].S = this.state.oldFieldValue;
        this.setState({fieldInProgress: false, fieldButtonsVisible: false});
    }

    render(){
        return(
            <span>
                <TextField
                    style = {{minWidth: 200}}
                    value = {this.props.swimmer[this.props.attribute].S}
                    onChange = {(event) => this.props.swimmer[this.props.attribute].S = event.target.value}
                    onFocus = {this.onFieldFocus}
                    onBlur = {this.onBlur}
                />
                {this.state.fieldButtonsVisible &&
                    <Tooltip title = "Save changes">
                        <IconButton
                            color = "primary"
                            onClick = {this.onSaveClick}
                        >
                            <DoneIcon/>
                        </IconButton>
                    </Tooltip>
                }
                {this.state.fieldButtonsVisible &&
                    <ThemeProvider theme = {redTheme}>
                        <Tooltip title = "Discard changes">
                            <IconButton
                                color = "primary"
                                onClick = {this.onDiscardClick}
                            >
                                <CloseIcon/>
                            </IconButton>
                        </Tooltip>
                    </ThemeProvider>
                }
            </span>
            
        )
    }
}));

export default RosterTextField;