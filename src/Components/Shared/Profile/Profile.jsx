import { useState } from "react";
import { FaUserAltSlash } from "react-icons/fa";

const Profile = () => {
  const [loginModal, setLoginModal] = useState(false);
  return (
    <div>
      <button
        onClick={() => setLoginModal(!loginModal)}
        className="border flex items-center justify-center  btn-ghost btn-circle box-shadow-side"
      >
        <FaUserAltSlash className="text-2xl" />
      </button>
  
    </div>
  );
};

export default Profile;
