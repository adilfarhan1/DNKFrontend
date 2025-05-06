import React, { useState } from "react";
import PopupModel from "./ADmodel";
import ContactForm from "./ADContactForm";

export const ADFormBanner = ({ onClose, onFormSubmit }) => {
  const [ShowPopup, setShowPopup] = useState(false);

  const handleFormSubmit = (formData) => {
    onClose();
  };

  return (
    <div className="container max-w-[1240px] px-4 flex items-center justify-between m-auto mt-[-40px] md:mt-[-100px] relative">
      <div className="rouded drop-shadow-xl  bg-[#ffffff] z-40 rounded-[20px] backdrop-blur">
        <div className="px-[20px] py-[30px] md:px-[50px] md:py-[50px] grid md:grid-cols-2">
          <div>
            <div className="banner-content z-10">
              <h1 className="banner-h1 text-[#0072B2] text-[1.1rem] sm:text-[1.3rem] md:text-[1.7rem]">
                Luxury Living on Sheikh Zayed Road
              </h1>
              <h2 className="text-[0.9rem] md:text-[1.2rem] font-semibold capitalize text-[#000]">
                Starting From AED 1.52M | USD $414K
              </h2>
              {/* <h2 className="text-[0.9rem] md:text-[1.2rem] font-semibold capitalize pb-1 md:pb-4">
                1% monthly payment plan
              </h2> */}
              <p className="mb-1 md:mb-4 text-[#000]">
                Welcome to <strong>Sobha Central</strong>, a modern and luxury
                community by <strong>Sobha Realty</strong> in{" "}
                <strong>Sheikh Zayed Road</strong>, Dubai. An exclusive
                collection of 
                <stronhg>1 to 2-bedroom luxury Apartments</stronhg>. It offers a
                peaceful and green environment with top-quality homes and
                world-class facilities, making it a perfect place to live and
                invest.
              </p>
              <div>
                <p className="m-0 text-[#000] font-semibold">
                  Completion Date: 31st December, 2029
                </p>
                <p className="text-[#000] font-semibold">Payment Plan: 60/40</p>
              </div>
              <button
                onClick={() => setShowPopup(true)}
                className="site-btn !text-[#fff] hover:!text-[#ffffff] !border-none bg-[#0D84C8] hover:!bg-black"
              >
                Request callback
              </button>
            </div>
          </div>

          <div>
            <ContactForm onFormSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
      <div>
        {ShowPopup && <PopupModel onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default ADFormBanner;
