import LoginProviders from "./components/LoginProviders";

const Login = () => {
  return (
    <div
      className="flex flex-col items-center bg-black min-h-screen
      w-full justify-center"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/meta/icon.png"
        loading="lazy"
        alt="logo"
        className="w-52 mb-5"
      />
      <LoginProviders />
    </div>
  );
};

export default Login;
