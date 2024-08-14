import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import useAuth from "../../Hooks/useAuth";
import ConfettiExplosion from "react-confetti-explosion";
const Login = () => {
  const { user, loginUser } = useAuth();

  const handleLoginBtn = async (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;
    const userInfo = {
      name: from.name.value,
      email: from.email.value,
      password: from.password.value,
    };

    try {
      const res = await loginUser(email, password);
      <ConfettiExplosion />
    } catch (err) {
      console.log(err.massage);
    }
  };

console.log(user);
  return (
    <div className="mx-auto  max-w-screen-xl border-box mt-12 w-80 md:w-[500px]  md:p-12 p-8">
      <div className="text-center">
        <img className="w-40 inline center" src={logo} alt="logoCar" />
      </div>
      <hr className="border mt-3 border-black" />
      <h1 className="text-center font-bold mt-4 border-b-2 w-44 mx-auto border-red-500 ">
        Please login
      </h1>
      <form onSubmit={handleLoginBtn}>
        <div className="mt-3">
          <label className="text-1xl font-bold outline-0 ">Email</label> <br />
          <input
            type="email" name="email"
            className="border-box font-semibold bg-none rounded-sm w-full py-3 px-4 border-none outline-0 "
            required
            placeholder="Your email address"
          />
        </div>
        <div className="mt-3 mb-4">
          <label className="text-1xl font-bold outline-0 ">Password</label>{" "}
          <br />
          <input
            type="password" name="password"
            className="border-box  font-semibold bg-none rounded-sm w-full py-3 px-4 border-none outline-0 "
            required
            placeholder="Your password"
          />
        </div>
        <button
          className="w-full py-1 box-shadow-side font-bold uppercase rounded-md text-red-500"
          type="submit"
        >
          Login
        </button>
        <div className="mt-6 gap-4 flex items-center justify-center">
          <hr className="border w-44 border-black" />
          <h1 className="font-bold uppercase">Or</h1>
          <hr className="border w-44 border-black" />
        </div>
      </form>
      <div className="flex items-center justify-center">
        <Link
          to="/register"
          className=" py-2 p-4 box-shadow-side font-bold rounded-md mt-4 text-red-500"
          type="submit"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Login;
