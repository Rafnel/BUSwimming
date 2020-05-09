import { decorate, observable } from "mobx";

export default class UIStateStore{
    drawerOpen = false;
    successMessage = "";
}

decorate(UIStateStore, {
    drawerOpen: observable,
    successMessage: observable
});