import { FC } from "react";

interface SidebarLinkProps {
  title: string;
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
}

const SidebarLink: FC<SidebarLinkProps> = ({ Icon, title }) => {
  return (
    <button className="flex items-center space-x-2 hover:text-white">
      <Icon className="h-5 w-5" />
      <p>{title}</p>
    </button>
  );
};

export default SidebarLink;
