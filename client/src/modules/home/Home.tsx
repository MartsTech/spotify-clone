import Header from "modules/shared/components/header";
import Player from "modules/shared/components/player";
import Playlist from "modules/shared/components/playlist";
import Sidebar from "modules/shared/components/sidebar";

const Home = () => {
  return (
    <div className="bg-black text-white h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <div className="flex-grow">
          <Header />
          <Playlist />
        </div>
      </main>
      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
};

export default Home;
