import React, { useEffect, useRef, useState } from "react";
import bannerImg from "../../../../assets/lavioleta/360banner.webp";
import { PopupModel } from "../componets/Lmodel";

export const LBanner360 = () => {
  const [ShowPopup, setShowPopup] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 } // Loads when 10% of the banner is in view
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={bannerRef}
      className="banner w-full bg-[#040406] flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="container max-w-[1240px] px-4 flex items-center justify-between">
        <div className="banner-content z-10">
          <h1 className="text-[3rem] mb-0">360&deg;</h1>
          <h1 className="banner-h1">Take a tour of the project</h1>
          <button
            onClick={() => setShowPopup(true)}
            className="site-btn !border-none bg-[#ffffff] !text-[#000000] hover:!bg-[#000000] hover:!text-[#ffffff]"
          >
            Schedule A Virtual Tour
          </button>
        </div>
      </div>
      <div className="bg-[#00000066] w-full h-full absolute left-0 top-0 z-0 sm:hidden"></div>
      <div>
        {ShowPopup && <PopupModel onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default LBanner360;
