import React, { useEffect, useState } from "react";
import logo from "../../assets/logo/dnklogo_1.webp";
import { GrFacebookOption } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { Ri24HoursLine } from "react-icons/ri";
import LazyImage from "../layout/LazyImage";

export const FooterSection = () => {
  const [showButton, setShowButton] = useState();
  const [nav, setNav] = useState(true);
  const navigate = useNavigate();

  const goToAboutHead = () => {
    navigate("/about");
  };

  const goToTeam = () => {
    navigate("/team");
    setNav(!nav);
  };
  const goToContactHead = () => {
    navigate("/contact");
  };

  const goToCareers = () => {
    navigate("/careers");
  };

  const goToServices = () => {
    navigate("/services");
  };

  const goToOffPlan = () => {
    navigate("/off-plan-project");
  };

  const goToBuy = () => {
    navigate("/buy-project");
  };

  const goToSell = () => {
    navigate("/sell-project");
  };

  const goToPrivacyPolicy = () => {
    navigate("/privacy-policy");
  };

  const today = new Date();
  const year = today.getFullYear();

  useEffect(() => {
    const handleScrollButtonVisiblity = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };
    window.addEventListener("scroll", handleScrollButtonVisiblity);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisiblity);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="w-full bg-[#121218] flex items-center justify-center">
        <div className="footerSection container max-w-[1240px] py-5  px-4  md:py-9">
          <div className="flex items-center justify-between footer-head">
            <Link to="/">
              <LazyImage
                className="w-[85px] py-2"
                src={logo}
                alt="DNK logo, Real Estate"
              />
            </Link>

            <div>
              <ul className="social-links grid grid-cols-5 gap-2">
                <li>
                  <a
                    href="https://www.facebook.com/dnkrealestate1/"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <GrFacebookOption />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/dnk_re/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCKH7d3Sx2dkfb4pEXXaMpFA"
                    target="_blank"
                    aria-label="Youtube"
                  >
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/dnkrealestate/"
                    target="_blank"
                    aria-label="Linkedin"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/+971555769195?text=Hello%2C%20could%20you%20please%20provide%20more%20insights%20into%20the%20real%20estate%20market%3F"
                    target="_blank"
                    aria-label="Whats app"
                  >
                    <IoLogoWhatsapp />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-body grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-7">
            <div>
              <ul>
                <li>
                  <h3 className="text-[#fff]">Popular Search</h3>
                </li>
                <li>
                  <Link className="cursor-pointer py-1" to="/off-plan-project">
                    Off Plan Properties
                  </Link>
                </li>
                <li>
                  <Link className="cursor-pointer py-1" to="/buy-project">
                    Buy a Property
                  </Link>
                </li>
                <li>
                  <Link className="cursor-pointer py-1" to="/sell-project">
                    Sell a Property
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <h3 className="text-[#fff]">Quick Links</h3>
                </li>
                <li>
                  <Link className="cursor-pointer py-1" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="cursor-pointer py-1">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className="cursor-pointer py-1" to="/team">
                    Meet The Team
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="cursor-pointer py-1">
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <h3></h3>
                </li>
                <li>
                  <Link className="cursor-pointer py-1" to="/news">
                    News
                  </Link>
                </li>
                <li>
                  <Link className="cursor-pointer py-1" to="/privacy-policy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="cursor-pointer py-1" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="w-[100%]">
              <ul className="footer-connects">
                <li>
                  <h3 className="text-[#fff]">Connect with us</h3>
                </li>
                <li>
                  <a
                    href="tel:+97145546904"
                    className="py-1 flex items-center"
                    aria-label="phone number"
                  >
                    <IoIosCall className="text-[1.4rem] my-auto" />
                    +971 4 554 6904
                  </a>
                </li>
                <li>
                  <a href="" aria-label="time">
                    <Ri24HoursLine className="text-[1.4rem]" />
                    <div>
                      <div>
                        <a href="tel:+971555769195" className="py-1">
                          +971 55 576 9195
                        </a>
                      </div>
                      <div>
                        <a href="tel:+971543049309" className="py-1">
                          +971 54 304 9309
                        </a>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@dnkre.com"
                    className="py-1"
                    aria-label="Mail"
                  >
                    <MdEmail className="text-[1.2rem] mr-[3px]" />
                    info@dnkre.com
                  </a>
                </li>
                <li>
                  <a href="" aria-label="address">
                    <MdLocationOn className="text-[1.6rem] mr-[3px]" />
                    <div>
                      <div>Suite No: 603, Sama Building,</div>
                      <div>Al Barsha 1 - Al Barsha,</div>
                      <div>Dubai, United Arab Emirates.</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000000] w-full relative flex items-center justify-center">
        <p className="text-[#ffffff] text-[0.6rem] md:text-[0.7rem]  p-3 m-0 tracking-wider text-center">
          © Copyright {year}. All Rights Reserved | Designed by DNK Real Estate
        </p>
      </div>
      {showButton && (
        <div class="scrollTop-widget">
          <div class="scrollTop bounce-top" onClick={handleScrollTop}>
            <IoIosArrowUp className="arrow-top " aria-label="Go top" />
          </div>
        </div>
      )}
      <div className="whatsapp-widget">
        <div className="bg-[#18A436] rounded-full p-2">
          <a
            href="https://wa.me/+971543049309?text=Hello%2C%20could%20you%20please%20provide%20more%20insights%20into%20the%20real%20estate%20market%3F"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whats app Chat"
          >
            <IoLogoWhatsapp className="text-[#fff] text-[2.5rem]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
