import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { getSeasons } from '../utils/API/seasonsAPI';
import { inject, observer } from 'mobx-react';
import { getSwimmersForSeason } from '../utils/API/swimmersAPI';

//function will return the most current season of swimming
export function returnMostRecentSeason(seasons){
    let year = "";
    let season = "";

    for(let i = 0; i < seasons.length; i++){
        //if this season has a greater year, then update our year
        if(seasons[i].season_year > year){
            //set our season year to this one
            year = seasons[i].season_year.N;
            season = seasons[i].season_name.S;
        }
        //else if the season year is the same and the season semester is fall, this is more recent than spring.
        else if(seasons[i].season_year.N === year && seasons[i].season_name.S === "Fall"){
            season = "Fall";
        }
    }

    let seasonString = season + " " + year;
    return seasonString;
}

const SeasonsSelector = inject("rosterState")(observer(class SeasonsSelector extends React.Component{
    returnSeasons = () => {
        if(this.props.rosterState.seasons === null){
            return <MenuItem value = "">Loading...</MenuItem>
        }
        else{
            //push all the seasons to be selectable menu items for the selector
            let items = [];
            items.push(<MenuItem key = {-1} value = "">None</MenuItem>);
            for(let i = 0; i < this.props.rosterState.seasons.length; i++){
                let season = this.props.rosterState.seasons[i];
                let selectString = season.season_name.S + " " + season.season_year.N;

                items.push(<MenuItem key = {i} value = {selectString ? selectString : ""}>{selectString}</MenuItem>);
            }

            return items;
        }
    }

    onSelectChange = async (event) => {
        this.props.rosterState.selectedSeason = event.target.value;
        //update the swimmers list with swimmers from this season.
        let seasonData = this.props.rosterState.selectedSeason.split(" ");
        this.props.rosterState.swimmers = await getSwimmersForSeason(seasonData[0], seasonData[1]);
    }

    render(){
        return(
            <FormControl variant = "outlined">
                <InputLabel>Season</InputLabel>
                <Select
                    defaultValue = ""
                    value = {this.props.rosterState.selectedSeason}
                    labelWidth = {60}
                    style = {{width: 160}}
                    onChange = {this.onSelectChange}
                >
                    {this.returnSeasons()}
                </Select>
            </FormControl>
        )
    }

    async componentDidMount(){
        //get the seasons from the seasons table
        this.props.rosterState.seasons = await getSeasons();
        //update the state of the selected season with the MOST CURRENT swim season.
        this.props.rosterState.selectedSeason = returnMostRecentSeason(this.props.rosterState.seasons);
        //update the swimmers list with swimmers from this season.
        let seasonData = this.props.rosterState.selectedSeason.split(" ");
        this.props.rosterState.swimmers = await getSwimmersForSeason(seasonData[0], seasonData[1]);
    }
}));

export default SeasonsSelector;