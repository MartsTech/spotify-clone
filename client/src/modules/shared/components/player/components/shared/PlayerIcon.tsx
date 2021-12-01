import { FC, SVGProps } from "react";

interface PlayerIconProps {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  onClick?: () => void;
  className?: string;
}

const PlayerIcon: FC<PlayerIconProps> = ({ Icon, onClick, className }) => {
  return (
    <Icon
      onClick={onClick}
      className={`cursor-pointer hover:scale-125 transition
      transform duration-100 ease-out ${className}`}
    />
  );
};

export default PlayerIcon;
