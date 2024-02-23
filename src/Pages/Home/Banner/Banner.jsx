import slider1 from "../../../assets/slideshowV2-bg1.webp";
import slider2 from "../../../assets/slideshowV2-bg2.webp";

const Banner = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-5">
      <div className="carousel w-full">
        <div
          id="slide1"
          className=" carousel-item relative w-full box-shadow-side"
        >
          <div className="relative h-screen w-full">
            <img
              src={slider2}
              alt="slider-image"
              className="object-cover object-center w-full h-full"
            />
            <img
              src=""
              alt="Background Image"
              className="absolute inset-0 w-full h-full object-cover filter blur-sm"
            />
            <div className="inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 px-7">
              <div
                className="absolute md:left-[40%] md:lg:left-[60%] md:bottom-[30%] bottom-[20%]"
              >
                <h1
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="text-2xl text-white font-bold text-start border-l-4 "
                >
                  <span className="ml-4">
                    XKR-S CONVERTIBLE <br />{" "}
                    <span className="ml-4">COLLECTION</span>
                  </span>{" "}
                </h1>
                <p
                  data-aos="slide-left"
                  data-aos-duration="2000"
                  className="text-4xl text-white mt-16 text-start "
                >
                  Brake Disks & Pads
                </p>
                <p className="text-white mt-8">
                  <span className="text-2xl ">From </span>
                  <span className="text-4xl font-bold">30.00 $</span>
                </p>
                <button className="box-shadow-side btn mt-9 font-bold">
                  Shop Now{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="absolute gap-2 flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle box-shadow-side">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle box-shadow-side">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className=" carousel-item relative w-full box-shadow-side"
        >
          <div className="relative h-screen w-full">
            <img
              src={slider1}
              alt="slider-image"
              className="object-cover object-center w-full h-full"
            />
            <img
              src=""
              alt="Background Image"
              className="absolute inset-0 w-full h-full object-cover filter blur-sm"
            />
            <div className="inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute inset-0 px-7">
              <div className="absolute md:left-[40%] md:lg:left-[60%] md:bottom-[30%] bottom-[20%]">
                <h1
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  className="text-2xl text-white font-bold text-start border-l-4 "
                >
                  <span className="ml-4">
                    XKR-S CONVERTIBLE <br />{" "}
                    <span className="ml-4">COLLECTION</span>
                  </span>{" "}
                </h1>
                <p
                  data-aos="slide-left"
                  data-aos-duration="2000"
                  className="text-4xl text-white mt-16 text-start "
                >
                  Brake Disks & Pads
                </p>
                <p className="text-white mt-8">
                  <span className="text-2xl ">From </span>
                  <span className="text-4xl font-bold">30.00 $</span>
                </p>
                <button className="box-shadow-side btn mt-9 font-bold">
                  Shop Now{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="absolute gap-2 flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle box-shadow-side">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle box-shadow-side">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
