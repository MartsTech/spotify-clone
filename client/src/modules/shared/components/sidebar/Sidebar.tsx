import SidebarNav from "./components/nav";
import SidebarPlaylists from "./components/playlists";

const Sidebar = () => {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <SidebarNav />
        <SidebarPlaylists />
      </div>
    </div>
  );
};

export default Sidebar;
