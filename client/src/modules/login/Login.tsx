import LoginProviders from "./components/LoginProviders";
import Image from "next/image";

const Login = () => {
  return (
    <div
      className="flex flex-col items-center bg-black min-h-screen
      w-full justify-center"
    >
      <div className="relative w-52 h-52 mb-5">
        <Image src="/meta/icon.png" layout="fill" alt="logo" loading="lazy" />
      </div>
      <LoginProviders />
    </div>
  );
};

export default Login;
