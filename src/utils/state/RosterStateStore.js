import { decorate, observable } from "mobx";

export default class RosterStateStore{
    seasons = null;
    selectedSeason = "";
    swimmers = [];
}

decorate(RosterStateStore, {
    seasons: observable,
    selectedSeason: observable,
    swimmers: observable
});