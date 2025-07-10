import React, { useState } from "react";
import aboutImg from "../../../../assets/pojects/sobhaCenter/gallary01.webp";
import aboutImg2 from "../../../../assets/pojects/sobhaCenter/gallary02.webp.webp";
import { useNavigate } from "react-router-dom";
import PopupModel from "./ADmodel";

export const ADaboutSection = () => {
  const navigate = useNavigate();
  const [ShowPopup, setShowPopup] = useState(false);

  //navigation
  const goToAboutPage = () => {
    navigate("/about");
  };
  
  return (
    <div id="about" className="about-section w-full bg-[#000] ">
      <div className="container max-w-[1240px] py-6  px-4 m-auto">
        <h1 className="text-[#fff] m-auto w-fit mb-4 mt-3 text-center">
          Why Choose Sobha Central at the Sheikh Zayed Road
        </h1>
        <p className="text-center w-[100%] md:w-[70%] m-auto">
          What sets Sobha Central apart is its <strong>prime location</strong>.
          Positioned strategically, it offers easy access to Dubai’s key
          attractions and business hubs. This unique advantage makes it an
          exceptional investment opportunity, promising not just a home but a
          thriving lifestyle.
        </p>

        <div className="flex items-center justify-center">
          <div className="">
            <div className="  md:py-9 grid  md:grid-cols-2 relative">
              <img
                src={aboutImg}
                alt="about image"
                className="w-[80%] md:order-first md:w-[80%] m-auto py-3 md:py-0"
                loading="lazy"
              />
              <div>
                <h2 className="text-[#fff] w-fit mb-1 mt-3 text-left">
                  Key Features That Define Sobha Central
                </h2>

                <p>
                  Discover our graceful range of{" "}
                  <strong>1-2 bedroom apartments</strong> starting at just{" "}
                  <strong>AED 1.52M</strong>. Each unit is designed to offer
                  spacious living areas and modern amenities, ensuring comfort
                  and elegance.
                </p>
                <h2 className="text-left text-[1.4rem]">
                  Amenities & Lifestyle
                </h2>
                <p className="text-left">
                  Sobha Central brings world class facilities right to your
                  doorstep, creating a vibrant and relaxing lifestyle:
                </p>
                {/* <p className="font-semibold m-0">Prime Location</p> */}
                <ul className="list-disc list-outside pl-4 text-[#979797] ">
                  <li>
                    <p className="text-left m-0">
                      Sky lounges with panoramic city views
                    </p>
                  </li>
                  <li>
                    <p className="text-left m-0">
                      State-of-the-art fitness centers
                    </p>
                  </li>
                  <li>
                    <p className="m-0">Infinity edge swimming pools</p>
                  </li>
                  <li>
                    <p className="m-0">Landscaped parks and green open areas</p>
                  </li>
                  <li>
                    <p className="m-0">
                      Retail outlets, cafes, and restaurants
                    </p>
                  </li>
                  <li>
                    <p className="m-0">Jogging and cycling paths</p>
                  </li>
                  <li>
                    <p className="m-0">24/7 security</p>
                  </li>
                  <li>
                    <p className="">Direct access to Sheikh Zayed Road</p>
                  </li>
                </ul>
                <button
                  onClick={() => setShowPopup(true)}
                  className="site-btn !text-[#fff] hover:!text-[#000] !border-[#fff] hover:!bg-[#fff]"
                >
                  Request callback
                </button>
              </div>
            </div>

            <div className="  md:py-9 grid  md:grid-cols-2 relative">
              <img
                src={aboutImg2}
                alt="about image"
                className="w-[80%] md:order-last order-first md:w-[80%] m-auto pt-3 md:pt-0 py-3 md:py-0"
                loading="lazy"
              />
              <div>
                <h2 className="text-left text-[1.4rem]">
                  Prime Location & Connectivity
                </h2>
                <p>
                  Located on Sheikh Zayed Road, Sobha Central offers quick
                  access to:
                </p>
                <ul className="list-disc list-outside pl-4 text-[#979797] ">
                  <li>
                    <p className="text-left m-0">
                      <strong>Dubai Marina:</strong> 5 minutes
                    </p>
                  </li>
                  <li>
                    <p className="text-left m-0">
                      <strong>Downtown Dubai & Burj Khalifa:</strong> 10 minutes
                      handover in June 2029
                    </p>
                  </li>
                  <li>
                    <p className="text-left m-0">
                      <strong>Palm Jumeirah:</strong> 10 minutes
                    </p>
                  </li>
                  <li>
                    <p className="text-left m-0">
                      <strong>Dubai International Airport:</strong> 20 minutes
                    </p>
                  </li>
                  <li>
                    <p className="text-left m-0">
                      <strong>Business Bay & DIFC:</strong> 12 minutes
                    </p>
                  </li>
                </ul>
                <p>
                  Live at the center of it all, surrounded by Dubai’s most
                  premium business, entertainment, and lifestyle hubs.
                </p>
                <div className="flex items-center justify-start">
                  <button
                    onClick={() => setShowPopup(true)}
                    className="site-btn !text-[#fff] hover:!text-[#000] !border-[#fff] hover:!bg-[#fff]"
                  >
                    Request callback
                  </button>
                </div>
              </div>
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

export default ADaboutSection;
