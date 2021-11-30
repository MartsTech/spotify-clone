import SidebarNav from "./components/nav";
import SidebarPlaylists from "./components/playlists";

const Sidebar = () => {
  return (
    <div
      className="text-gray-500 border-r border-gray-900
      overflow-y-scroll h-screen scrollbar-hide p-5 text-sm
      hidden md:inline-flex flex-shrink-0 sm:max-w-[14rem]
      lg:max-w-[15rem]"
    >
      <div className="space-y-4">
        <SidebarNav />
        <SidebarPlaylists />
      </div>
    </div>
  );
};

export default Sidebar;
