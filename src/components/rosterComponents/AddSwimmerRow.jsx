import React from 'react';
import { inject, observer } from 'mobx-react';
import { Button, TableRow, TableCell, TextField, Checkbox, FormControl, InputLabel, Select, MenuItem, Tooltip, IconButton, ThemeProvider } from '@material-ui/core';
import { v4 as uuid } from 'uuid';
import { setSwimmer, getSwimmersForSeason } from '../../utils/API/swimmersAPI';
import CloseIcon from '@material-ui/icons/Close';
import { redTheme } from '../../utils/theme';
import SaveIcon from '@material-ui/icons/Save';

const AddSwimmerRow = inject("rosterState")(observer(class AddSwimmerRow extends React.Component{
    state = {
        saveClicked: false
    }
    onSaveClick = async (swimmer) => {
        this.setState({ saveClicked: true})

        const id = uuid();
        if(swimmer.email === ""){
            swimmer.email = "none";
        }
        //add the swimmer to database
        let seasonData = this.props.rosterState.selectedSeason.split(" ");
        await setSwimmer(2, swimmer.name, swimmer.email, swimmer.dues_paid, swimmer.shirt_size,
                         swimmer.received_cap, swimmer.received_shirt, seasonData[0], seasonData[1]);
        
        //now that the swimmer is added to db, updated the table
        this.props.rosterState.swimmers = await getSwimmersForSeason(seasonData[0], seasonData[1]);
        this.props.rosterState.addingSwimmer = false;

        //reset the swimmer to add for next use
        this.props.rosterState.swimmerToAdd = {
            name: "",
            dues_paid: false,
            received_cap: false,
            received_shirt: false,
            shirt_size: "Medium",
            id: "",
            email: "",
            season_name: "",
            season_year: 0
        }
    }

    onCancelClick = () => {
        this.props.rosterState.addingSwimmer = false;

        //reset the swimmer to add for next use
        this.props.rosterState.swimmerToAdd = {
            name: "",
            dues_paid: false,
            received_cap: false,
            received_shirt: false,
            shirt_size: "Medium",
            id: "",
            email: "",
            season_name: "",
            season_year: 0
        }
    }
    
    render(){
        let swimmer = this.props.rosterState.swimmerToAdd;

        return(
            <TableRow key = {1000}>
                <TableCell>
                    <TextField
                        value = {swimmer.name}
                        onChange = {(event) => swimmer.name = event.target.value}
                    />
                </TableCell>
                <TableCell>
                    <TextField
                        value = {swimmer.email}
                        onChange = {(event) => swimmer.email = event.target.value}
                    />
                </TableCell>
                <TableCell>
                    <Checkbox 
                        color = "primary"
                        checked = {swimmer.dues_paid}
                        onChange = {(event) => swimmer.dues_paid = event.target.checked}
                    />
                </TableCell>
                <TableCell>
                    <FormControl variant = "outlined">
                        <InputLabel>T-Shirt Size</InputLabel>
                        <Select
                            labelWidth = {80}
                            value = {swimmer.shirt_size}
                            onChange = {(event) => swimmer.shirt_size = event.target.value}
                            style = {{width: 130}}
                        >
                            <MenuItem value = "">None</MenuItem>
                            <MenuItem value = "Small">Small</MenuItem>
                            <MenuItem value = "Medium">Medium</MenuItem>
                            <MenuItem value = "Large">Large</MenuItem>
                            <MenuItem value = "XL">XL</MenuItem>
                        </Select>
                    </FormControl>
                </TableCell>
                <TableCell>
                    <Checkbox 
                        color = "primary"
                        checked = {swimmer.received_cap}
                        onChange = {(event) => swimmer.received_cap = event.target.checked}
                    />
                </TableCell>
                <TableCell>
                    <Checkbox 
                        color = "primary"
                        checked = {swimmer.received_shirt}
                        onChange = {(event) => swimmer.received_shirt = event.target.checked}
                    />
                </TableCell>
                <TableCell>
                    <Button
                        style = {{textTransform: "initial"}}
                        variant = "contained"
                        color = "primary"
                        disabled = {swimmer.name === "" || this.state.saveClicked}
                        onClick = {() => this.onSaveClick(swimmer)}
                    >
                        <SaveIcon/> &nbsp; Save
                    </Button>
                </TableCell>

                <TableCell>
                    <ThemeProvider theme = {redTheme}>
                        <Tooltip title = "Cancel">
                            <IconButton
                                color = "primary"
                                onClick = {this.onCancelClick}
                            >
                                <CloseIcon/>
                            </IconButton>
                        </Tooltip>
                    </ThemeProvider>
                </TableCell>
            </TableRow>
        )
    }
}));

export default AddSwimmerRow;