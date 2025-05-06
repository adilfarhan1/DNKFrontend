import React, { useEffect, useState } from "react";
import logo from "../../../../assets/pojects/sobhaCenter/logo.webp";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const ADFooter = () => {
  const [showButton, setShowButton] = useState();
  const [nav, setNav] = useState(true);
  const navigate = useNavigate();

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
      <div className="w-full bg-[#2D2C2C] flex items-center justify-center">
        <div className="footerSection container max-w-[1240px] py-2  px-3  md:py-3">
          <div className="w-[90px] md:w-[100px] m-auto">
            <img src={logo} alt="logo" className=" w-[200px] m-auto" />
          </div>
        </div>
      </div>
      {/* <div className="bg-[#000000] w-full relative flex items-center justify-center">
        <p className="text-[#ffffff] text-[0.6rem] md:text-[0.7rem]  p-3 m-0 tracking-wider text-center">
          © Copyright {year}. All Rights Reserved | Damac Island
        </p>
      </div> */}
      {showButton && (
        <div class="scrollTop-widget">
          <div class="scrollTop bounce-top" onClick={handleScrollTop}>
            <IoIosArrowUp className="arrow-top " />
          </div>
        </div>
      )}
      <div className="whatsapp-widget">
        <div className="bg-[#18A436] rounded-full p-2">
          <a
            href="https://wa.me/+971543049309?text=Hello%2C%20could%20you%20please%20provide%20more%20insights%20into%20Sobha%20Central?"
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

export default ADFooter;
