import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Seller = () => {
  return (
    <section className="mt-12">
      <h1 className="text-3xl text-center font-bold ">OUR BEST SELLER</h1>
      <hr className="w-44 mx-auto border-2 border-white box-shadow-side" />
      <div className="mt-6 text-center">
        <Tabs>
          <TabList>
            <Tab>NEW ARRIVALS</Tab>
            <Tab>BEST SELLERS</Tab>
            <Tab>TOP RATES</Tab>
          </TabList>
          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Seller;
