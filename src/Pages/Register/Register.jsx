/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import logo from "../../assets/logo.webp";
import useAuth from "../../Hooks/useAuth";
import ConfettiExplosion from "react-confetti-explosion";
import React from "react";
const Register = () => {
  const { user, createUser } = useAuth();

  const largeProps = {
    force: 0.8,
    duration: 3000,
    particleCount: 300,
    width: 1600,
    colors: ["#041E43", "#1471BF", "#5BB4DC", "#FC027B", "#66D805"],
  };

  const handleRegisterBtn = async (e) => {
    e.preventDefault();
    const from = e.target;

    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;

    const userInfo = {
      name: from.name.value,
      email: from.email.value,
      password: from.password.value,
    };

    try {
      const res = await createUser(email, password);
      <ConfettiExplosion {...largeProps} />
    } catch (err) {
      console.log(err.massage);
    }
  };

  console.log(user);

  return (
    <div className="mx-auto max-w-screen-xl border-box mt-12 w-80 md:w-[500px]  md:p-12 p-8">
      <div className="text-center">
        <img className="w-40 inline center" src={logo} alt="logoCar" />
      </div>
      <hr className="border mt-3 border-black" />
      <h1 className="text-center font-bold mt-4 border-b-2 w-44 mx-auto border-red-500">
        Please Register
      </h1>
      <form onSubmit={handleRegisterBtn}>
        <div className="mt-3">
          <label className="text-1xl font-bold outline-0 ">Name</label> <br />
          <input
            type="text"
            name="name"
            className="border-box font-semibold bg-none rounded-sm w-full py-3 px-4 border-none outline-0 "
            required
            placeholder="Your Name"
          />
        </div>
        <div className="mt-3">
          <label className="text-1xl font-bold outline-0 ">Email</label> <br />
          <input
            type="email"
            name="email"
            className="border-box font-semibold bg-none rounded-sm w-full py-3 px-4 border-none outline-0 "
            required
            placeholder="Your email "
          />
        </div>
        <div className="mt-3 mb-4">
          <label className="text-1xl font-bold outline-0 ">Password</label>{" "}
          <br />
          <input
            type="password"
            name="password"
            className="border-box font-semibold bg-none rounded-sm w-full py-3 px-4 border-none outline-0 "
            required
            placeholder="Your password"
          />
        </div>
        <button
          className="w-full py-2 box-shadow-side font-bold uppercase rounded-md text-red-500"
          type="submit"
        >
          Register
        </button>
        <div className="mt-6 gap-4 flex items-center justify-center">
          <hr className="border w-44 border-black" />
          <h1 className="font-bold uppercase">Or</h1>
          <hr className="border w-44 border-black" />
        </div>
      </form>
      <div className="flex items-center justify-center">
        <Link
          to="/login"
          className=" py-2 p-4 box-shadow-side font-bold rounded-md mt-4 text-red-500"
          type="submit"
        >
          Login
        </Link>
        
      </div>
    </div>
  );
};

export default Register;
