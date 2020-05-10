import { decorate, observable } from "mobx";

export default class UserStateStore{
    user = null;
    loading = false;
    isAuthenticated = false;
}

decorate(UserStateStore, {
    user: observable,
    loading: observable
});