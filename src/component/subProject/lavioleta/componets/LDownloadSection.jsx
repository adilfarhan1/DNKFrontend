import React, { useState } from "react";
import Brochureimg from "../../../../assets/lavioleta/brochureimg.webp";
import PopupModel from "../componets/Lmodel";

export const LDownloadSection = () => {
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
              <h1 className="banner-h1 text-[#ffff]">
                Receive A Digital Copy Of Our Brochure
              </h1>
              <p className="mb-1 md:mb-4 text-[#ffff]">
                And Learn More About Our Spacious Residences
              </p>
              <button
                onClick={() => setShowPopup(true)}
                className="site-btn !border-none bg-[#ffffff] !text-[#000000] hover:!bg-[#000000] hover:!text-[#ffffff]"
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

export default LDownloadSection;
