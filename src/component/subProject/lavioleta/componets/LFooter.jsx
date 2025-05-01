import React, { useEffect, useState } from "react";
import logo from "../../../../assets/bahria/logoBT.webp";
import { IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const LFooter = () => {
  const [showButton, setShowButton] = useState();
  const [nav, setNav] = useState(true);
  const navigate = useNavigate();


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
    </footer>
  );
};

export default LFooter;
