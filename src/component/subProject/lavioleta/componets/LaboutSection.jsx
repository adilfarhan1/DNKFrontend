import React, { useState } from "react";
import aboutImg from "../../../../assets/bahria/sectionImg1.webp";
import aboutImg2 from "../../../../assets/bahria/sectionImg2.webp";
import { useNavigate } from "react-router-dom";
import PopupModel from "../componets/Lmodel";

export const LaboutSection = () => {
  const navigate = useNavigate();
  const [ShowPopup, setShowPopup] = useState(false);

  //navigation
  const goToAboutPage = () => {
    navigate("/about");
  };
  return (
    <div id="about" className="about-section w-full bg-[#000] ">
      <div className="container max-w-[1240px] py-6  px-4 m-auto">
        <h1 className="text-[#fff] m-auto w-fit mb-4 mt-3">
          Master Community by Bahria Town Dubai
        </h1>
        <p className="text-center">
          Bahria Town at Dubai South is a haven for investors. With its
          strategic location, rising property value, and the growing demand for
          high-quality living spaces, this development offers a lucrative
          opportunity for both short-term and long-term investments.
        </p>

        <div className="flex items-center justify-center">
          <div className="">
            <div className="  md:py-9 grid  md:grid-cols-2 relative">
              <img
                src={aboutImg}
                alt="about image"
                className="w-[80%] order-last md:order-first md:w-[80%] m-auto py-3 md:py-0"
                loading="lazy"
              />
              <div>
                <h1 className="text-[#fff] w-fit mb-1 mt-3 text-left">
                  Why Choose Us?
                </h1>
                <h2 className="text-left text-[1.4rem]">
                  Bahria Town Dubai - BT Properties
                </h2>
                <ul className="list-disc list-outside pl-4 text-[#979797] ">
                  <li>
                    <div>
                      <p className="font-semibold m-0">Prime Location</p>
                      <p className="text-left">
                        Situated in the heart of Dubai South, Bahria Town offers
                        seamless connectivity to major landmarks, including Al
                        Maktoum International Airport, Expo City Dubai, and key
                        highways such as Sheikh Mohammed Bin Zayed Road.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="font-semibold m-0">
                        Modern Architecture and Design
                      </p>
                      <p className="text-left">
                        The project features contemporary designs that combine
                        aesthetics with functionality.{" "}
                        <strong>
                          Spacious Townhouses, villas, luxurious apartments,
                        </strong>{" "}
                        and innovative commercial spaces create a harmonious
                        blend of residential and business environments.
                      </p>
                    </div>
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
                className="w-[80%] order-last md:w-[80%] m-auto pt-3 md:pt-0 py-3 md:py-0"
                loading="lazy"
              />
              <div>
                <ul className="list-disc list-outside pl-4 text-[#979797]">
                  <li>
                    <div>
                      <p className="font-semibold m-0 ">
                        World-Class Amenities
                      </p>
                      <ul className="list-decimal mt-1 pl-4">
                        <li>
                          <p className="text-left m-0">
                            <strong>Green Spaces:</strong> Lush parks and
                            landscaped gardens.
                          </p>
                        </li>
                        <li>
                          <p className="text-left m-0">
                            <strong>Educational Facilities:</strong> Proximity
                            to top-tier schools and universities.
                          </p>
                        </li>
                        <li>
                          <p className="text-left m-0">
                            <strong>Shopping and Dining:</strong> High-end
                            retail outlets and gourmet restaurants.
                          </p>
                        </li>
                        <li>
                          <p className="text-left m-0">
                            <strong>Healthcare:</strong>
                            State-of-the-art medical centers and clinics.
                          </p>
                        </li>
                        <li>
                          <p className="text-left m-0">
                            <strong>Recreational Activities:</strong>
                            5.Recreational Activities: Golf courses, swimming
                            pools, and fitness centers.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="font-semibold m-0">Community Living</p>
                      <p className="text-left">
                        With a focus on safety and community engagement, Bahria
                        Town in Dubai offers a family-friendly environment.
                      </p>
                    </div>
                  </li>
                </ul>
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

export default LaboutSection;
