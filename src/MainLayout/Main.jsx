import { Outlet } from "react-router-dom";
import Navbar from "../Components/Common/Navbar/Navbar";
import Footer from "../Components/Common/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Main = () => {
  AOS.init();
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-300px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
