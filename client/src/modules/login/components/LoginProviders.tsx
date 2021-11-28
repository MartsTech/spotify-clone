import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import { signIn } from "next-auth/react";

const LoginProviders = () => {
  const { providers } = useStore().authStore;

  if (!providers) return null;

  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <button
          key={name}
          onClick={() => signIn(id, { callbackUrl: "/" })}
          className="bg-[#18D860] text-white py-4 px-8 rounded-full"
        >
          Login with {name}
        </button>
      ))}
    </>
  );
};

export default observer(LoginProviders);
