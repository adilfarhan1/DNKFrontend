import React, { useEffect, useState } from "react";
import dnkLogo from "../../../assets/logo/dnklogo_1.webp";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { userUserServices } from "../../../services/userServices";

export const HeaderRoadshow = () => {
  const [nav, setNav] = useState(true);
  const location = useLocation();
  const { logoutUser } = userUserServices();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    localStorage.removeItem("login");
    Swal.fire("Success", "Logged Out", "success");
    navigate("/login");
  };

  //nav menu button
  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setNav(true); // Close the slide bar
  };

  return (
    <div>
      <header>
        <div className="header px-4 py-2 bg-[#040406] w-full">
          <div className=" flex  items-center justify-between h-15  ">
            <div className="left-block flex items-center justify-center gap-4 md:gap-0">
              <div className="pr-4" onClick={handleNav}>
                {!nav ? (
                  <IoClose className="text-[#ffffff] text-[1.8rem]" />
                ) : (
                  <IoMenu className="text-[#ffffff] text-[1.8rem]" />
                )}
              </div>
              <a href="/roadshow">
                <div className="w-[full] h-[45px] flex items-center justify-start">
                  <img
                    src={dnkLogo}
                    alt="DNK Logo"
                    className="h-full max-w-[170px]"
                  />
                </div>
              </a>
            </div>
            <button
              onClick={handleLogout}
              className="bg-[#fff] w-fit p-2 rounded-full mr-3"
            >
              <RiLogoutCircleRLine className="text-[#000] text-[1rem]" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={
          !nav
            ? "fixed left-0 top-[55px] w-[60%]  md:w-[30%] bg-[#040406] h-full ease-in-out duration-500 slide-bar"
            : "fixed left-[-100%] slide-bar top-15 h-full"
        }
      >
        <ul className="uppercase p-4">
          <li
            onClick={() => handleNavigation("/roadshow/register")}
            className={`${
              location.pathname == "/roadshow/register" && "active"
            } text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]`}
          >
            <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
              View Event Attendance
            </p>
          </li>

          <li
            onClick={() => handleNavigation("/roadshow/clientregisterlist")}
            className={`${
              location.pathname == "/roadshow/create" && "active"
            } text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]`}
          >
            <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
              View Client Registration
            </p>
          </li>

          <li
            onClick={() => handleNavigation("/roadshow/create")}
            className={`${
              location.pathname == "/roadshow/create" && "active"
            } text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]`}
          >
            <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
              Create Roadshow
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderRoadshow;
