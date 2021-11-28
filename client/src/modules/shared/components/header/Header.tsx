import { ChevronDownIcon } from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  if (!session?.user) {
    return null;
  }
  const { image, name } = session.user;

  return (
    <header className="absolute top-5 right-8">
      <div
        onClick={() => signOut()}
        className="flex items-center bg-black space-x-3 opacity-90
        hover:opacity-80 cursor-pointer rounded-full p-1 pr-2"
      >
        <img
          className="rounded-full w-10 h-10"
          src={image || ""}
          loading="lazy"
          alt="avatar"
        />
        <h2>{name}</h2>
        <ChevronDownIcon className="h-5 w-5" />
      </div>
    </header>
  );
};

export default Header;
