import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import LoginProvider from "./LoginProvider";

const LoginProviders = () => {
  const { providers } = useStore().authStore;

  if (!providers) {
    return null;
  }

  return (
    <>
      {Object.values(providers).map((provider) => (
        <LoginProvider key={provider.name} provider={provider} />
      ))}
    </>
  );
};

export default observer(LoginProviders);
