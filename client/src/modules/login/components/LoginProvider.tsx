import { ClientSafeProvider, signIn } from "next-auth/react";
import type { FC } from "react";

interface LoginProviderProps {
  provider: ClientSafeProvider;
}

const LoginProvider: FC<LoginProviderProps> = ({ provider }) => {
  const { id, name } = provider;

  return (
    <button
      onClick={() => signIn(id, { callbackUrl: "/" })}
      className="bg-[#18D860] text-white py-4 px-8 rounded-full"
    >
      Login with {name}
    </button>
  );
};

export default LoginProvider;
