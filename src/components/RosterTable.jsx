import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { inject, observer } from 'mobx-react';
import { setSwimmer } from '../utils/API/swimmersAPI';


const RosterTable = inject("rosterState")(observer(class RosterTable extends React.Component{
    onDuesPaidChange = (event, swimmer) => {
        swimmer.dues_paid.BOOL = event.target.checked;
        let seasonData = this.props.rosterState.selectedSeason.split(" ");
        setSwimmer(swimmer.name.S, swimmer.email.S, swimmer.dues_paid.BOOL, swimmer.shirt_size.S, 
                   swimmer.received_cap.BOOL, swimmer.received_shirt.BOOL, seasonData[0], seasonData[1]);
    }

    onShirtReceivedChange = (event, swimmer) => {
        swimmer.received_shirt.BOOL = event.target.checked;
        let seasonData = this.props.rosterState.selectedSeason.split(" ");
        setSwimmer(swimmer.name.S, swimmer.email.S, swimmer.dues_paid.BOOL, swimmer.shirt_size.S, 
                   swimmer.received_cap.BOOL, swimmer.received_shirt.BOOL, seasonData[0], seasonData[1]);
    }

    onCapReceivedChange = (event, swimmer) => {
        swimmer.received_cap.BOOL = event.target.checked;
        let seasonData = this.props.rosterState.selectedSeason.split(" ");
        setSwimmer(swimmer.name.S, swimmer.email.S, swimmer.dues_paid.BOOL, swimmer.shirt_size.S, 
                   swimmer.received_cap.BOOL, swimmer.received_shirt.BOOL, seasonData[0], seasonData[1]);
    }

    onShirtSizeChange = (event, swimmer) => {
        swimmer.shirt_size.S = event.target.value;
        let seasonData = this.props.rosterState.selectedSeason.split(" ");
        setSwimmer(swimmer.name.S, swimmer.email.S, swimmer.dues_paid.BOOL, swimmer.shirt_size.S, 
                   swimmer.received_cap.BOOL, swimmer.received_shirt.BOOL, seasonData[0], seasonData[1]);
    }

    returnTableRows = () => {
        let rows = [];
        for(let i = 0; i < this.props.rosterState.swimmers.length; i++){
            let swimmer = this.props.rosterState.swimmers[i];
            rows.push(
                <TableRow key = {i}>
                    <TableCell>{swimmer.name.S}</TableCell>
                    <TableCell>{swimmer.email.S}</TableCell>
                    <TableCell>
                        <Checkbox 
                            color = "primary"
                            checked = {swimmer.dues_paid.BOOL}
                            onChange = {(event) => this.onDuesPaidChange(event, swimmer)}
                        />
                    </TableCell>
                    <TableCell>
                        <FormControl variant = "outlined">
                            <InputLabel>T-Shirt Size</InputLabel>
                            <Select
                                labelWidth = {80}
                                value = {swimmer.shirt_size.S}
                                onChange = {(event) => this.onShirtSizeChange(event, swimmer)}
                                style = {{width: 130}}
                            >
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
                            checked = {swimmer.received_cap.BOOL}
                            onChange = {(event) => this.onCapReceivedChange(event, swimmer)}
                        />
                    </TableCell>
                    <TableCell>
                        <Checkbox 
                            color = "primary"
                            checked = {swimmer.received_shirt.BOOL}
                            onChange = {(event) => this.onShirtReceivedChange(event, swimmer)}
                        />
                    </TableCell>
                </TableRow>
            );
        }

        return rows;
    }
    render(){
        return(
            <TableContainer component = {Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Paid Dues?</TableCell>
                            <TableCell>Shirt Size</TableCell>
                            <TableCell>Received Cap</TableCell>
                            <TableCell>Received Shirt</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {this.returnTableRows()}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}));

export default RosterTable;