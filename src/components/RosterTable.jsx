import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, Paper, TableBody, Checkbox, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { inject, observer } from 'mobx-react';


const RosterTable = inject("rosterState")(observer(class RosterTable extends React.Component{
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
                        <TableRow key = "test">
                            <TableCell>Zachary Steudel</TableCell>
                            <TableCell>Zac_Steudel1@baylor.edu</TableCell>
                            <TableCell>
                                <Checkbox color = "primary"/>
                            </TableCell>
                            <TableCell>
                                <FormControl variant = "outlined">
                                    <InputLabel>T-Shirt Size</InputLabel>
                                    <Select
                                        labelWidth = {80}
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
                                <Checkbox color = "primary"/>
                            </TableCell>
                            <TableCell>
                                <Checkbox color = "primary"/>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}));

export default RosterTable;