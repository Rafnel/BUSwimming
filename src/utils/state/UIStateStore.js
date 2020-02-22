import { decorate, observable } from "mobx";

export default class UIStateStore{
    drawerOpen = false;
}

decorate(UIStateStore, {
    drawerOpen: observable
});