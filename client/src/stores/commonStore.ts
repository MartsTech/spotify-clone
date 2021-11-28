import { makeAutoObservable } from "mobx";

class CommonStore {
  appLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  setAppLoading(state: boolean) {
    this.appLoading = state;
  }
}

export default CommonStore;
