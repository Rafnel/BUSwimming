import React from 'react';
import { inject, observer } from 'mobx-react';
import { Snackbar, SnackbarContent, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const ErrorMessage = inject("uiState")(observer(class ErrorMessage extends React.Component{
    render(){
        return(
            <Snackbar
                open = {this.props.uiState.errorMessage !== ""}
                autoHideDuration = {6000}
                onClose = {() => this.props.uiState.errorMessage = ""}
            >
                <SnackbarContent
                    style = {{backgroundColor: "#cc0000"}}
                    message = {this.props.uiState.errorMessage}
                    action = {
                        <IconButton
                            color = "inherit"
                            onClick = {() => this.props.uiState.errorMessage = ""}
                        >
                            <CloseIcon/>
                        </IconButton>
                    }
                />
            </Snackbar>
        )
    }
}));

export default ErrorMessage;