import SidebarLink from "./components/SidebarLink";
import SidebarSeparator from "./components/SidebarSeparator";
import {
  HomeIcon,
  LibraryIcon,
  SearchIcon,
  HeartIcon,
  PlusCircleIcon,
  RssIcon,
} from "@heroicons/react/outline";

const SidebarNav = () => {
  return (
    <>
      <SidebarLink title="Home" Icon={HomeIcon} />
      <SidebarLink title="Search" Icon={SearchIcon} />
      <SidebarLink title="Your Library" Icon={LibraryIcon} />
      <SidebarSeparator />
      <SidebarLink title="Create Playlist" Icon={HeartIcon} />
      <SidebarLink title="Liked Songs" Icon={PlusCircleIcon} />
      <SidebarLink title="Your Episodes" Icon={RssIcon} />
      <SidebarSeparator />
    </>
  );
};

export default SidebarNav;
