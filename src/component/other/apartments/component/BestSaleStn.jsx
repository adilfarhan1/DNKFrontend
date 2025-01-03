import React, { useState } from 'react'
import bannerImg from "../../../../assets/dubaiApaetment/banner01.webp";
import { IoLogoWhatsapp } from "react-icons/io";
import PopupApatment from '../../../model/PopupApatment';

export const BestSaleStn = () => {
    const [ShowPopup, setShowPopup] = useState(false);

  return (
    <div className="p-4 pt-0">
      <div
        className="w-full rounded-xl bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundPosition: "20%",
        }}
      >
        <div className="px-4 md:pl-[4rem]  items-center  overflow-hidden relative py-[2rem] md:py-[3rem]">
          <div className="banner-content grid md:grid-cols-3">
            <div className="z-10 w-fit col-span-3">
              <h1 className="w-full">
                <span className="text-[2rem] md:text-[3rem]">
                  Don’t Miss Out!
                </span>
                <br />
                Damac River Side Apartment
                <br />
                Starting From: AED 888K
              </h1>
              <p className="pb-4 sm:w-[70%] md:w-[60%] text-[#fff]">
                Enjoy waterfront views, luxury amenities, infinity pools,
                fitness centers, and 24/7 security. Elevate your lifestyle
                today!
              </p>
              <div className=" flex gap-3 mt-2">
                <button
                  onClick={() => setShowPopup(true)}
                  className="site-btn "
                >
                  Request callback
                </button>
                <a
                  href={`https://wa.me/+971543049309?text=Hello, I’m interested in learning more about Dubai apartments. Please send me the details`}
                  className="site-btn1 items-center flex"
                  target="_blank"
                >
                  <IoLogoWhatsapp className="text-[1.4rem] m-auto" />
                </a>
              </div>
            </div>
            <div className="w-[50%] md:w-[70%] order-first md:order-last z-10"></div>
          </div>
          <div className="bg-[#00000066] w-full h-full absolute left-0 top-0 z-0 md:hidden"></div>
        </div>
        <div>
          {ShowPopup && <PopupApatment onClose={() => setShowPopup(false)} />}
        </div>
      </div>
    </div>
  );
}

export default BestSaleStn