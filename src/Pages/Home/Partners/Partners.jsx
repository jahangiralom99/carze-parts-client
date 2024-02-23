import partner1 from "../../../assets/brandV1-img1.avif";
import partner2 from "../../../assets/brandV1-img2 (1).avif";
import partner3 from "../../../assets/brandV1-img3.avif";
import partner4 from "../../../assets/brandV1-img4.avif";

const Partners = () => {
  return (
    <section className="mt-12 max-w-screen-xl mx-auto">
      <h1 className="text-4xl text-center font-bold ">Our Partners</h1>
      <hr className="w-44 mx-auto border-2 border-white box-shadow-side" />
      <div className=" mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center justify-items-center gap-8">
        <img src={partner1} alt="" className="w-[50%] convert1" />
        <img src={partner2} alt="" className="w-[50%] convert1" />
        <img src={partner3} alt="" className="w-[50%] convert1" />
        <img src={partner4} alt="" className="w-[50%] convert1" />
      </div>
    </section>
  );
};

export default Partners;
