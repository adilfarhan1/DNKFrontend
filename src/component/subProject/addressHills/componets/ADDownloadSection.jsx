import React, { useState } from "react";
import Brochureimg from "../../../../assets/lavioleta/brochureimg.webp";
import PopupModel from "./ADmodel";

export const ADDownloadSection = () => {
  const [ShowPopup, setShowPopup] = useState(false);
 
  return (
    <div className="bg-[#1E1E1E]">
      <div className="container max-w-[1240px] py-6  px-4 m-auto">
        <div className="grid sm:grid-cols-2">
          <div className="md:pr-3">
            <img className="" src={Brochureimg} alt="island" />
          </div>
          <div className=" flex items-center">
            <div>
              <h1 className="banner-h1 text-[#ffff]">Download Brochure</h1>
              <p className="mb-1 md:mb-4 text-[#ffff]">
                And Learn More About Address Villas at The Oasis
              </p>
              <button
                onClick={() => setShowPopup(true)}
                className="site-btn1 bg-[#ffffff] hover:!text-[#000] hover:bg-[#fff]"
              >
                Request Here
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        {ShowPopup && <PopupModel onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default ADDownloadSection;
