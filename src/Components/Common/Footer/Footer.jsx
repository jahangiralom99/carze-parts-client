import logo from "../../../assets/logo.webp";
const Footer = () => {
  return (
    <footer className="mt-12 max-w-screen-xl mx-auto px-3 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center justify-items-center p-3">
        <div className="text-center border-box p-12">
          <div className="text-center">
            <img className="inline" width={180} src={logo} alt="LogoImage" />
          </div>
          <p className="mt-4 text-left font-bold">
            Subscribe our newsletter and get discount 30% off
          </p>
        </div>
        <div className="space-y-4 p-6">
          <h1 className="font-bold text-xl">Customer Care</h1>
          <hr className="border border-black" />
          <p>Support Center</p>
          <p>Delivery & Return </p>
          <p>Terms & Condition</p>
          <p>Products Return</p>
        </div>
        <div className="space-y-4">
          <h1 className="font-bold text-xl">Quick Shop</h1>
          <hr className="border border-black" />
          <p>About Us</p>
          <p>Contact US</p>
          <p>Term of use</p>
          <p>Profile</p>
        </div>
        <div className="space-y-4">
          <h1 className="font-bold text-xl">Company</h1>
          <hr className="border border-black" />
          <p>Help Center</p>
          <p>Address Store </p>
          <p>Privacy Policy</p>
          <p>Store Location</p>
        </div>
      </div>
      <p className="text-center font-bold mt-12 pb-4">
        © Copyright 2023 | CarzeStore By Jahangir. Powered by Jahangir Alam.
      </p>
    </footer>
  );
};

export default Footer;
