import { decorate, observable } from "mobx";

export default class UIStateStore{
    drawerOpen = false;
    successMessage = "";
    errorMessage = "";
}

decorate(UIStateStore, {
    drawerOpen: observable,
    successMessage: observable,
    errorMessage: observable
});