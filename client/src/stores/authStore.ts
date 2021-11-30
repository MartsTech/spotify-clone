import { makeAutoObservable } from "mobx";
import type { AuthProviders } from "types/auth";

class AuthStore {
  providers: AuthProviders | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setProviders = (providers: AuthProviders) => {
    this.providers = providers;
  };
}

export default AuthStore;
