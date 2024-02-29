import { useState } from "react";
import logo from "../../../assets/logo.webp";
import { Link, NavLink } from "react-router-dom";
import { BsX } from "react-icons/bs";
import { MdOutlineShoppingBag } from "react-icons/md";
import Cart from "../Cart/Cart";
import Profile from "../../Shared/Profile/Profile";
import useAuth from "../../../Hooks/useAuth";
import { FaUserAltSlash } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState(true);
  const [isCart, setIsCart] = useState(false);
  const { user } = useAuth();

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " box2 px-6 rounded-full box-shadow-side"
              : "box2 px-6"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "box2 px-6 rounded-full box-shadow-side"
              : "box2 px-6"
          }
        >
          Shop{" "}
          <div className="badge bg-red-500 font-bold text-white rounded-full">
            hot
          </div>
        </NavLink>
      </li>
      <li>
        <Link className="box2 px-6" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="box2 px-6" to="/">
          Home
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky navbar p-5 max-w-screen-xl mx-auto z-[99]  bg-[#e6e7ee] top-0 ">
      <div className="navbar-start ">
        <div className="hidden lg:block">
          <div className="flex list-none items-center font-bold">{links}</div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="dropdown lg:hidden transition duration-1000 delay-700"
        >
          {open ? (
            <div
              role="button"
              className="btn btn-ghost btn-circle box-shadow-side "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
          ) : (
            <div
              onClick={() => setOpen(!open)}
              className=" btn btn-ghost btn-circle box-shadow-side bg-[#e6e7ee] font-bold text-xl"
            >
              <BsX className="text-2xl" />
            </div>
          )}
        </div>
      </div>
      {!open && (
        // Button Cross
        <div className="absolute  top-20 left-0 menu menu-sm dropdown-content mt-3 z-[50] bg-[#e6e7ee]  rounded-xl p-16 box1 transition duration-1000 delay-700">
          <div
            onClick={() => setOpen(!open)}
            className="absolute -top-5 -right-4 btn btn-ghost btn-circle box-shadow-side bg-[#e6e7ee] font-bold text-1xl"
          >
            X
          </div>

          <div className=" flex flex-col items-center justify-center">
            {links}
            {/* <Profile /> */}
          </div>
        </div>
      )}
      <div className="navbar-center">
        <div>
          <img src={logo} width={130} alt="logo" />
        </div>
      </div>
      <div className="navbar-end gap-2">
        <div onClick={() => setSearch(!search)}>
          <button className="btn btn-ghost btn-circle box-shadow-side transition duration-1000 delay-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
        {!search && (
          // search field
          <div className="absolute left-0 bg-white flex items-center justify-center w-full h-[300px] top-20 transition delay-700 duration-500 z-[99] px-6">
            <div className="group">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
                <g>
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                </g>
              </svg>
              <input className="input" type="search" placeholder="Search" />
              <button className="box-shadow-side px-4 py-1 text-red-500 font-bold">
                Search
              </button>
            </div>
            <div
              onClick={() => setSearch(!search)}
              className="absolute top-3 right-8 btn btn-ghost btn-circle box-shadow-side bg-[#e6e7ee] font-bold text-1xl"
            >
              X
            </div>
          </div>
        )}
        {user?.email ? (
          <div className="hidden md:block">
            <Profile></Profile>
          </div>
        ) : (
          <Link to="/login" className="hidden md:block">
            <button className="border flex items-center justify-center  btn-ghost btn-circle box-shadow-side">
              <FaUserAltSlash className="text-2xl" />
            </button>
          </Link>
        )}
        <button
          onClick={() => setIsCart(!isCart)}
          className={` btn btn-ghost btn-circle box-shadow-side  delay-700`}
        >
          <MdOutlineShoppingBag className="text-2xl" />
          <div className="absolute top-1 right-7 text-red-500 text-2xl">0</div>
        </button>
        <div className={`absolute`}>
          {isCart ? (
            <div
              className={` ${
                isCart
                  ? "w-80 md:w-96 right-0 top-0 fixed duration-x-700 delay-500 "
                  : " "
              } h-screen bg-[#e6e7ee] z-[999] box1 ease-in-out`}
            >
              <div className="flex justify-between items-center p-2 border-b-2 border-black ">
                <div
                  onClick={() => setIsCart(!search)}
                  className=" btn btn-ghost  box-shadow-side bg-[#e6e7ee] font-bold text-1xl"
                >
                  X
                </div>
                <div className=" border-box border-black text-xl font-bold p-6">
                  Shopping Cart
                </div>
                <div className=" border-black p-5  border-box font-bold text-red-500">
                  0
                </div>
              </div>
              <Cart />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
