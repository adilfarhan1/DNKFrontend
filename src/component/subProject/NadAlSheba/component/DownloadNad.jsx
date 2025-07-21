import React, { useState } from "react";
import Brochureimg from "../../../../assets/pojects/NadAlSheba/brochure-nad.webp";
import PopupNad from './PopupNad';

export const DownloadNad = () => {
  const [ShowPopup, setShowPopup] = useState(false);

  return (
    <div className="bg-[#1E1E1E]">
      <div className="container max-w-[1240px] py-6  px-4 m-auto">
        <div className="grid sm:grid-cols-2">
          <div className="md:pr-3 h-[400px] flex items-center justify-center">
            <img className="h-full" src={Brochureimg} alt="island" />
          </div>
          <div className=" flex items-center">
            <div>
              <h1 className="banner-h1 text-[#ffff]">Download Brochure</h1>
              <p className="mb-1 md:mb-4 text-[#ffff]">
                And Learn More About Nad Al Sheba Gardens
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
        {ShowPopup && <PopupNad onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default DownloadNad;
