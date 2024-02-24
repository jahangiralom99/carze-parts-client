
import Deals from "../../Deals/Deals";
import Banner from "../Banner/Banner";
import Partners from "../Partners/Partners";
import Seller from "../Seller/Seller";

const Home = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      {/* <Banner />
      <Partners />
      <Seller /> */}
      <Deals/>
    </div>
  );
};

export default Home;

// bg-no-repeat bg-cover	object-cover