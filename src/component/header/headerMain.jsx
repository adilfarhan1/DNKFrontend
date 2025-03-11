import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import dnkLogo from "../../assets/logo/dnklogo_1.webp";
import { useProjectServices } from "../../services/projectServices";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdCall } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { URL } from "../../url/axios";
import { Link } from "react-router-dom";

export const HeaderMain = () => {
  const [nav, setNav] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const [logo, setLogo] = useState({ image: null });
  const [error, setError] = useState(null);
  const { getLogo } = useProjectServices();

  useEffect(() => {
    fetchLogoData();
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

  const fetchLogoData = async () => {
    try {
      const response = await getLogo();
      if (response.success) {
        const logoData = response.data;

        if (logoData.length > 0) {
          const logoImage = logoData[0].image;
          setLogo({ image: logoImage });
        } else {
          setError("No logo found.");
        }
      } else {
        setError("Failed to fetch logo image.");
      }
    } catch (err) {
      console.error("Failed to fetch logo Image", err);
    }
  };

  const handleNav = () => {
    setNav(!nav);
  };
  const goToAbout = () => {
    navigate("/about");
    setNav(!nav);
  };
  const goToTeam = () => {
    navigate("/team");
    setNav(!nav);
  };
  const goToContact = () => {
    navigate("/contact");
    setNav(!nav);
  };
  const goToBuy = () => {
    navigate("/buy-project");
    setNav(!nav);
  };
  const goToOffPlan = () => {
    navigate("/off-plan-project");
    setNav(!nav);
  };
  const goToOffSell = () => {
    navigate("/sell-project");
    setNav(!nav);
  };
  const goToCareers = () => {
    navigate("/careers");
    setNav(!nav);
  };
  const goToNews = () => {
    navigate("/news");
    setNav(!nav);
  };
  const goToHome = () => {
    navigate("/");
    setNav(!nav);
  };
  const imageUrl = logo.image
    ? `${URL}${encodeURIComponent(logo.image)}`
    : dnkLogo;
  return (
    <div>
      <header>
        <div className="header flex container items-center justify-between h-15 max-w-[1240px] mx-auto px-4 py-2">
          <div className="left-block flex items-center justify-center gap-4 md:gap-0">
            <div onClick={handleNav}>
              {!nav ? (
                <IoClose className="menu-btn" aria-label="close" />
              ) : (
                <IoMenu className="menu-btn" aria-label="menu" />
              )}
            </div>
            <a href="/">
              <div className="w-[full] h-[45px] flex items-center justify-start">
                <img
                  src={imageUrl}
                  alt="DNK Logo, Real Estate"
                  className="h-full max-w-[170px]"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </a>
          </div>
          <div className="right-block left-block flex items-center justify-center">
            <nav className="">
              <ul className="items-center justify-center gap-4 ">
                <li
                  className={`relative inline-flex items-center justify-center group m-2 ${
                    location.pathname == "/" && "activeHead"
                  }`}
                >
                  <Link to="/">
                    <p className="group-hover:text-[#CE8745] transition duration-200 ease-out">
                      Home
                    </p>
                    <span
                      class={
                        "absolute bottom-0 left-0 w-full h-0.5 bg-[#CE8745] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"
                      }
                    ></span>
                  </Link>
                </li>
                <li
                  className={`relative inline-flex items-center justify-center group m-2 ${
                    location.pathname == "/off-plan-project" && "activeHead"
                  }`}
                >
                  <Link to="/off-plan-project">
                    <p className="group-hover:text-[#CE8745] transition duration-200 ease-out">
                      Off-Plan
                    </p>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#CE8745] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </Link>
                </li>
                <li
                  className={`relative inline-flex items-center justify-center group m-2 ${
                    location.pathname == "/sell-project" && "activeHead"
                  }`}
                >
                  <Link to="/sell-project">
                    <p className="group-hover:text-[#CE8745] transition duration-200 ease-out">
                      Sell
                    </p>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#CE8745] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </Link>
                </li>
                <li
                  className={`relative inline-flex items-center justify-center group m-2 ${
                    location.pathname == "/about" && "activeHead"
                  }`}
                >
                  <Link to="/about">
                    <p className="group-hover:text-[#CE8745] transition duration-200 ease-out">
                      About
                    </p>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#CE8745] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </Link>
                </li>
                <li
                  className={`relative inline-flex items-center justify-center group m-2 ${
                    location.pathname == "/team" && "activeHead"
                  }`}
                >
                  <Link to="/team">
                    <p className="group-hover:text-[#CE8745] transition duration-200 ease-out">
                      Team
                    </p>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#CE8745] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </Link>
                </li>
                <li
                  className={`relative inline-flex items-center justify-center group m-2 ${
                    location.pathname == "/news" && "activeHead"
                  }`}
                >
                  <Link to="/news">
                    <p className="group-hover:text-[#CE8745] transition duration-200 ease-out">
                      News
                    </p>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#CE8745] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </Link>
                </li>
                <li
                  className={`relative inline-flex items-center justify-center group m-2 ${
                    location.pathname == "/careers" && "activeHead"
                  }`}
                >
                  <Link to="/careers">
                    <p className="group-hover:text-[#CE8745] transition duration-200 ease-out">
                      Careers
                    </p>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#CE8745] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </Link>
                </li>
                <li
                  className={`relative inline-flex items-center justify-center group m-2 ${
                    location.pathname == "/contact" && "activeHead"
                  }`}
                >
                  <Link to="/contact">
                    <p className="group-hover:text-[#CE8745] transition duration-200 ease-out">
                      Contact
                    </p>
                    <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#CE8745] rounded origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"></span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="socials flex items-center justify-center">
              <ul className=" items-center justify-center gap-4 pr-2 border-r border-white hidden  md:flex">
                <li className="group">
                  <a
                    href="https://www.facebook.com/dnkrealestate1/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out" />
                  </a>
                </li>
                <li className="group">
                  <a
                    href="https://www.instagram.com/dnk_re/"
                    target="_blank"
                    aria-label="instagram"
                  >
                    <FaInstagram className="group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out" />
                  </a>
                </li>
                <li className="group">
                  <a
                    href="https://www.linkedin.com/company/dnkrealestate/"
                    target="_blank"
                    aria-label="linkedin"
                  >
                    <FaLinkedin className="group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out" />
                  </a>
                </li>
              </ul>
              <ul className="pl-2 flex items-center gap-4">
                <li className="group">
                  <a href="tel:+971555769195" aria-label="Phone Number">
                    <MdCall className="group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out" />
                  </a>
                </li>
                <li className="group">
                  <a
                    href="https://wa.me/+971555769195?text=Hello,"
                    target="_blank"
                    aria-label="Whats app"
                  >
                    <RiWhatsappFill className="group-hover:text-[#CE8745] text-xl  transition duration-200 ease-out" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <div
        className={
          !nav
            ? "fixed left-0 top-[55px] w-[60%] bg-[#040406] h-full ease-in-out duration-500 slide-bar"
            : "fixed left-[-100%] slide-bar top-15 h-full"
        }
      >
        <ul className="uppercase p-4">
          <li
            onClick={goToHome}
            className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
          >
            <Link to="/">
              <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
                Home
              </p>
            </Link>
          </li>
          <li
            onClick={goToOffPlan}
            className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
          >
            <Link to="/off-plan-project">
              <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
                Off-Plan
              </p>
            </Link>
          </li>
          <li
            onClick={goToBuy}
            className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
          >
            <Link to="/buy-project">
              <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
                Buy
              </p>
            </Link>
          </li>
          <li
            onClick={goToOffSell}
            className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
          >
            <Link to="/sell-project">
              <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
                Sell
              </p>
            </Link>
          </li>
          <li
            onClick={goToAbout}
            className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
          >
            <Link to="/about">
              <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
                About
              </p>
            </Link>
          </li>
          <li
            onClick={goToTeam}
            className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
          >
            <Link to="/team">
              <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
                Team
              </p>
            </Link>
          </li>
          <li
            onClick={goToNews}
            className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
          >
            <Link to="/news">
              <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
                News
              </p>
            </Link>
          </li>
          <li
            onClick={goToCareers}
            className="text-white border-b border-gray-100 p-3 cursor-pointer group hover:bg-[#0F0F1A]"
          >
            <Link to="/careers">
              <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
                Careers
              </p>
            </Link>
          </li>
          <li
            onClick={goToContact}
            className="text-white p-3 cursor-pointer group hover:bg-[#0F0F1A]"
          >
            <Link to="/contact">
              <p className="transform group-hover:translate-x-2 transition-transform ease-in duration-200 text-sm font-semibold">
                Contact
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMain;
