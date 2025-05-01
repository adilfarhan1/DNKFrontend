import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import dnkLogo from "../../../../assets/bahria/logoBT.webp";
import { IoClose } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import PopupModel from "../componets/Lmodel";

export const LHeader = () => {
  const [nav, setNav] = useState(true);
  const location = useLocation();
  const [ShowPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

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

  // Scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  //nav menu button
  const handleNav = () => {
    setNav(!nav);
  };

  const goToAboutHead = () => {
    scrollToSection("about");
  };

  const goToAbout = () => {
    scrollToSection("about");
    setNav(!nav);
  };

  const goToFloorPlanHead = () => {
    scrollToSection("floorPlan");
  };

  const goToFloorPlan = () => {
    scrollToSection("floorPlan");
    setNav(!nav);
  };

  const goToPaymentHead = () => {
    scrollToSection("paymentPlan");
  };

  const goToPayment = () => {
    scrollToSection("paymentPlan");
    setNav(!nav);
  };

  const goToAmenitiesHead = () => {
    scrollToSection("Amenities");
  };

  const goToAmenities = () => {
    scrollToSection("Amenities");
    setNav(!nav);
  };

  const goToContactHead = () => {
    scrollToSection("contact");
  };

  const goToContact = () => {
    scrollToSection("contact");
    setNav(!nav);
  };

  return (
    <div>
      <header className="top-0 left-0 w-full">
        <div className="">
          <div className="header flex container items-center justify-between h-15 max-w-[1240px] mx-auto px-4 top-0">
            <div className="left-block flex items-center justify-center gap-4 md:gap-0">
              <div onClick={handleNav}>
                {!nav ? (
                  <IoClose className="menu-btn" />
                ) : (
                  <IoMenu className="menu-btn" />
                )}
              </div>
              <a href="/bahriatown-dubai">
                <div className="w-[135px] md:w-[150px] h-[60px] flex items-center">
                  <img
                    src={dnkLogo}
                    alt="DNK Logo"
                    className="m-auto h-[100%] py-1"
                  />
                </div>
              </a>
            </div>
            <div className="right-block left-block flex items-center justify-center">
              <nav className="">
                <ul className="items-center justify-center gap-4 ">
                  <li
                    className={`relative inline-flex items-center justify-center group m-2 ${
                      location.pathname == "/buy-project" && "activeHead"
                    }`}
                    onClick={goToAboutHead}
                  >
                    <p className="group-hover:text-[#CFA028] transition duration-200 ease-out">
                      About
                    </p>
                    <span
                      className={
                        "absolute bottom-0 left-0 w-full h-0.5 bg-[#CFA028] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"
                      }
                    ></span>
                  </li>
                  <li
                    className={`relative inline-flex items-center justify-center group m-2 ${
                      location.pathname == "/off-plan-project" && "activeHead"
                    }`}
                    onClick={goToFloorPlanHead}
                  >
                    <p className="group-hover:text-[#CFA028] transition duration-200 ease-out">
                      Floor Plan
                    </p>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#CFA028] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </li>
                  <li
                    className={`relative inline-flex items-center justify-center group m-2 ${
                      location.pathname == "/sell-project" && "activeHead"
                    }`}
                    onClick={goToPaymentHead}
                  >
                    <p className="group-hover:text-[#CFA028] transition duration-200 ease-out">
                      Payment Plan
                    </p>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#CFA028] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </li>
                  <li
                    onClick={goToAmenitiesHead}
                    className={`relative inline-flex items-center justify-center group m-2 ${
                      location.pathname == "/about" && "activeHead"
                    }`}
                  >
                    <p className="group-hover:text-[#CFA028] transition duration-200 ease-out">
                      Amenities
                    </p>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#CFA028] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </li>

                  <li
                    onClick={goToContactHead}
                    className={`relative inline-flex items-center justify-center group m-2 ${
                      location.pathname == "/about" && "activeHead"
                    }`}
                  >
                    <p className="group-hover:text-[#CFA028] transition duration-200 ease-out">
                      Contact
                    </p>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#CFA028] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </li>
                </ul>
              </nav>
              <div className="socials flex items-center justify-center">
                <ul className="pl-2 flex items-center gap-4">
                  <li className="group">
                    <button
                      onClick={() => setShowPopup(true)}
                      className="bg-[#FFFF] hover:bg-[#CFA028] text-[#000000] hover:text-[#FFFF] w-full px-4 py-1 rounded duration-100 flex justify-center text-[0.6rem] sm:text-[0.9rem]"
                    >
                      Download Brochure
                    </button>
                  </li>
                  {/* <li className="group">
                  <a href="tel:+971555769195">
                    <MdCall className="group-hover:text-[#34BFCB] text-xl  transition duration-200 ease-out" />
                  </a>
                </li>
                <li className="group">
                  <a
                    href="https://wa.me/+971555769195?text=Hello,"
                    target="_blank"
                  >
                    <RiWhatsappFill className="group-hover:text-[#34BFCB] text-xl  transition duration-200 ease-out" />
                  </a>
                </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={
          !nav
            ? "fixed left-0 top-[60px] w-[60%] bg-[#040406] h-full ease-in-out duration-500 slide-bar"
            : "fixed left-[-100%] slide-bar top-15 h-full"
        }
      >
        <ul className="uppercase p-4">
          <li
            onClick={goToAbout}
            className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
          >
            <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
              About
            </p>
          </li>
          <li
            onClick={goToFloorPlan}
            className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
          >
            <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
              Floor Plan
            </p>
          </li>
          <li
            onClick={goToPayment}
            className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
          >
            <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
              Payment Plan
            </p>
          </li>
          <li
            onClick={goToAmenities}
            className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
          >
            <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
              Amenities
            </p>
          </li>
          <li
            onClick={goToContact}
            className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
          >
            <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
              Contact
            </p>
          </li>
        </ul>
      </div>
      <div>
        {ShowPopup && <PopupModel onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default LHeader;
