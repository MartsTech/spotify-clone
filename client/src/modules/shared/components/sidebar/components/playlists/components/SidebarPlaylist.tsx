import { FC } from "react";

interface SidebarPlaylistProps {
  title: string;
  onClick: () => void;
}

const SidebarPlaylist: FC<SidebarPlaylistProps> = ({ title, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer hover:text-white">
      {title}
    </div>
  );
};

export default SidebarPlaylist;
