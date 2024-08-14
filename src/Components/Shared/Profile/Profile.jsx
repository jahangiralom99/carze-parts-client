import { useState } from "react";
import { MdOutlineLogout } from "react-icons/md";
import useAuth from "../../../Hooks/useAuth";

const Profile = () => {
  const [loginModal, setLoginModal] = useState(false);
  const { logOutUser } = useAuth();

  const handleLogOut = async () => {
    try {
      await logOutUser();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="relative ">
      <button
        onClick={() => setLoginModal(!loginModal)}
        className="border flex items-center justify-center  btn-ghost btn-circle box-shadow-side"
      >
        <img
          className="rounded-full object-cover h-full"
          src="https://i.ibb.co/DVskFXM/profile.webp"
          alt=""
        />
      </button>
      {loginModal && (
        <div className="absolute bg-[#e6e7ee] -right-24 lg:right-12 top-16 w-56 rounded-lg border-box">
          <div className="p-8 ">
            <p className=" p-2 font-normal">Jahangir Alam</p>
            <button
              onClick={handleLogOut}
              className="box2 p-1 w-full font-bold flex justify-center items-center gap-3 text-red-400"
            >
              <MdOutlineLogout></MdOutlineLogout> Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
