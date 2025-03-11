import React, { useState } from "react";
import PopupModel from "../componets/Lmodel";
import ContactForm from "../componets/LContactForm";

export const LFormBanner = ({ onClose, onFormSubmit }) => {
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
              <h1 className="banner-h1 text-[#CFA028] text-[1.1rem] sm:text-[1.3rem] md:text-[1.7rem]">
                Bahria Town Dubai South | Golf District Living Minutes from Al Maktoum
                International Airport Dubai.
              </h1>
              {/* <h2 className="text-[0.9rem] md:text-[1.2rem] font-semibold capitalize">
                Starting From 2.5M AED | $680K USD
              </h2> */}
              {/* <h2 className="text-[0.9rem] md:text-[1.2rem] font-semibold capitalize pb-1 md:pb-4">
                1% monthly payment plan
              </h2> */}
              <p className="mb-1 md:mb-4">
                Bahria Town Dubai is a game-changing real estate development in
                the heart of Dubai South. Designed to redefine luxury living, it
                offers an unparalleled lifestyle with world-class amenities, a
                prime location, and a range of modern living options of
                Townhouses, Villas and Apartments. Whether you're looking to
                invest to gain high ROI or to live in master community next to
                the upcoming world biggest international airport (Al Maktoum
                international airport), Bahria Town Dubai is your ultimate
                destination.
              </p>
              <button
                onClick={() => setShowPopup(true)}
                className="site-btn !text-[#000000] hover:!text-[#ffffff] !border-[#000000] hover:!bg-black"
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

export default LFormBanner;
