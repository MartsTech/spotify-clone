import SidebarNav from "./components/nav";
import SidebarPlaylists from "./components/playlists";

const Sidebar = () => {
  return (
    <div
      className="text-gray-500 text-sm border-r border-gray-900
      overflow-y-scroll h-screen scrollbar-hide p-5 w-64"
    >
      <div className="space-y-4">
        <SidebarNav />
        <SidebarPlaylists />
      </div>
    </div>
  );
};

export default Sidebar;
