import React, { useState } from "react";
import PopupModel from "../componets/Lmodel";
import ContactForm from "../componets/LContactForm";

export const LFormBanner = ({ onClose, onFormSubmit }) => {
  const [ShowPopup, setShowPopup] = useState(false);

  const handleFormSubmit = (formData) => {
    onClose();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="container max-w-[1240px] px-4 flex items-center justify-between m-auto mt-[-40px] md:mt-[-100px] relative bg-[#000]">
      <div className="rouded drop-shadow-xl  bg-[#ffffff] z-40 rounded-[20px] backdrop-blur">
        <div className="px-[20px] py-[30px] md:px-[50px] md:py-[50px] grid md:grid-cols-2">
          <div>
            <div className="banner-content z-10">
              <h1 className="banner-h1 text-[#9D2742] text-[1.1rem] sm:text-[1.3rem] md:text-[1.7rem]">
                3 - 4 Bedroom Townhouses Starting From 2.69M AED | $732K USD
              </h1>
              {/* <h2 className="text-[0.9rem] md:text-[1.2rem] font-semibold capitalize">
                Starting From 2.5M AED | $680K USD
              </h2> */}
              {/* <h2 className="text-[0.9rem] md:text-[1.2rem] font-semibold capitalize pb-1 md:pb-4">
                1% monthly payment plan
              </h2> */}
              <p className="mb-1 md:mb-4">
                La Tilia at Villanova is a remarkable new addition to Dubailand,
                crafted by Dubai Properties lined with exclusive selection of
                plush 3 & 4 bedroom townhouses. This vibrant neighbourhood is thoughtfully crafted to provide a harmonious
                environment where families can thrive. The spacious,
                contemporary homes are designed to deliver the highest level of
                comfort and functionality.
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
