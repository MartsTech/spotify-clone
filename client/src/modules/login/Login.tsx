import Image from "next/image";
import LoginProviders from "./components/LoginProviders";

const Login = () => {
  return (
    <div
      className="flex flex-col items-center bg-black min-h-screen
      w-full justify-center"
    >
      <div className="mb-5">
        <Image src="/meta/icon.png" width={220} height={220} alt="logo" />
      </div>
      <LoginProviders />
    </div>
  );
};

export default Login;
