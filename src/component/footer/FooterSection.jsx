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
import { useNavigate } from "react-router-dom";
import { Ri24HoursLine } from "react-icons/ri";

export const FooterSection = () => {
  const [showButton, setShowButton] = useState();
  const [nav, setNav] = useState(true);
  const navigate = useNavigate();

  // const toggleVisible = () => {
  //   const scrolled = document.documentElement.scrollTop;
  //   if (scrolled > 300) {
  //     setVisible(true)
  //   } else if (scrolled <= 300) {
  //     setVisible(false)
  //   }
  // }

  // const scrollTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   })
  // }

  // window.addEventListener('scroll', toggleVisible)

  //navigation
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
            <img className="w-[85px] py-2" src={logo} alt="logo" />
            <div>
              <ul className="social-links">
                <li>
                  <a
                    href="https://www.facebook.com/dnkrealestate1/"
                    target="_blank"
                  >
                    <GrFacebookOption />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/dnk_re/" target="_blank">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCKH7d3Sx2dkfb4pEXXaMpFA"
                    target="_blank"
                  >
                    <FaYoutube />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/dnkrealestate/"
                    target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/+971555769195?text=Hello,"
                    target="_blank"
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
                  <h5>Popular Search</h5>
                </li>
                <li>
                  <a className="cursor-pointer" onClick={goToOffPlan}>
                    Off Plan Properties
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer" onClick={goToBuy}>
                    Buy a Property
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer" onClick={goToSell}>
                    Sell a Property
                  </a>
                </li>
                {/* <li>
                  <a href="" className="cursor-pointer" onClick={goToAboutHead}>
                    Property Management
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="col-span-2">
              <ul>
                <li>
                  <h5>Quick Links</h5>
                </li>
                <li>
                  <a className="cursor-pointer" onClick={goToAboutHead}>
                    About
                  </a>
                </li>
                <li>
                  <a onClick={goToServices} className="cursor-pointer">
                    Services
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer" onClick={goToTeam}>
                    Meet The Team
                  </a>
                </li>
                <li>
                  <a onClick={goToCareers} className="cursor-pointer">
                    Career
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer" onClick={goToContactHead}>
                    Contact
                  </a>
                </li>
                <li>
                  <a className="cursor-pointer" onClick={goToPrivacyPolicy}>
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            {/* <div>
              <ul>
                <li>
                  <h5>Developers</h5>
                </li>
                <li>
                  <a href="">Emaar</a>
                </li>
                <li>
                  <a href="">Damac</a>
                </li>
                <li>
                  <a href="">Sobha</a>
                </li>
                <li>
                  <a href="">Aldar</a>
                </li>
                <li>
                  <a href="">Meraas</a>
                </li>
              </ul>
            </div> */}
            <div className="w-[100%]">
              <ul className="footer-connects">
                <li>
                  <h5>Connect with us</h5>
                </li>
                <li>
                  <a href="">
                    <IoIosCall className="text-[1.4rem]" />
                    <div>
                      <a href="tel:+97145546904">+971 4 554 6904</a>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="">
                    <Ri24HoursLine className="text-[1.4rem]" />
                    <div>
                      <div>
                        <a href="tel:+971555769195">+971 55 576 9195</a>
                      </div>
                      <div>
                        <a href="tel:+971543049309">+971 54 304 9309</a>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@dnkre.com">
                    <MdEmail className="text-[1.2rem] mr-[3px]" />
                    info@dnkre.com
                  </a>
                </li>
                <li>
                  <a href="">
                    <MdLocationOn className="text-[1.6rem] mr-[3px]" />
                    <div>
                      <div>Suite No: 2602, Silver Tower</div>
                      <div>Marasi Drive - Business Bay,</div>
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
            <IoIosArrowUp className="arrow-top " />
          </div>
        </div>
      )}
    </footer>
  );
};

export default FooterSection;
