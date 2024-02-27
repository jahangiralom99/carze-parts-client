import logo from "../../../assets/logo.webp";
const Footer = () => {
  return (
    <footer className="mt-12 ">
      <div className="grid grid-cols-4">
        <div>
          <img width={180} src={logo} alt="LogoImage" />
          <p>Subscribe our newsletter and get discount 30% off</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="text-center font-bold">© Copyright 2023 | CarzeStore By Jahangir. Powered by Jahangir Alam.</p>
    </footer>
  );
};

export default Footer;
