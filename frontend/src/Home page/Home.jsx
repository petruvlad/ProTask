
import Header from "../Home page/Header";
import SideBar from "../SideBar/SideBar";
import ScreensPage from "../ScreensPage/ScreensPage";

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <div className="content">
        <SideBar />
        <ScreensPage />
      </div>
    </div>
  );
};

export default HomePage;
