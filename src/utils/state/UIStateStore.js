import { decorate, observable } from "mobx";

export default class UIStateStore{
    drawerOpen = false;
    successMessage = "";
    errorMessage = "";
    loading = false;
}

decorate(UIStateStore, {
    drawerOpen: observable,
    successMessage: observable,
    errorMessage: observable,
    loading: observable
});