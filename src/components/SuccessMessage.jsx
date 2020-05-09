import React from 'react';
import { inject, observer } from 'mobx-react';
import { Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import { PRIMARY } from '../utils/theme';
import CloseIcon from '@material-ui/icons/Close';

const SuccessMessage = inject("uiState")(observer(class SuccessMessage extends React.Component{
    render(){
        return(
            <Snackbar
                open = {this.props.uiState.successMessage !== ""}
                autoHideDuration = {6000}
                onClose = {() => this.props.uiState.successMessage = ""}
            >
                <SnackbarContent
                    style = {{backgroundColor: PRIMARY}}
                    message = {this.props.uiState.successMessage}
                    action = {
                        <IconButton
                            color = "inherit"
                            onClick = {() => this.props.uiState.successMessage = ""}
                        >
                            <CloseIcon/>
                        </IconButton>
                    }
                />
            </Snackbar>
        )
    }
}));

export default SuccessMessage;