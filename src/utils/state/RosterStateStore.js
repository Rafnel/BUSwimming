import { decorate, observable } from "mobx";

export default class RosterStateStore{
    seasons = null;
    selectedSeason = "";
    swimmers = [];
    
    addingSwimmer = false;
    swimmerToAdd = {
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

decorate(RosterStateStore, {
    seasons: observable,
    selectedSeason: observable,
    swimmers: observable,
    swimmerToAdd: observable,
    addingSwimmer: observable,
});