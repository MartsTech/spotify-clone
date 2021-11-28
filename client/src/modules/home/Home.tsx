import Header from "modules/shared/components/header";
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
    </div>
  );
};

export default Home;
