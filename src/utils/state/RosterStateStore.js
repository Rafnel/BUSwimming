import { decorate, observable } from "mobx";

export default class RosterStateStore{
    seasons = null;
    selectedSeason = "";
    swimmers = null;
}

decorate(RosterStateStore, {
    seasons: observable,
    selectedSeason: observable,
    swimmers: observable
});