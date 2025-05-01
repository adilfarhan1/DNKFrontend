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
                <h2 className="text-[#fff] w-fit mb-1 mt-3 text-left">
                  Villas for Sale in Bahria Town Dubai
                </h2>
                <p>
                  Looking for a <strong>luxurious villa</strong> in{" "}
                  <a
                    className="text-[#00A3FF]"
                    href="https://dnkre.com/news/bahria-town-dubai-south"
                  >
                    Bahria Town Dubai
                  </a>
                  ? This community offers a range of{" "}
                  <strong>modern and spacious villas</strong> designed for
                  comfort, elegance, and convenience. Whether you're searching
                  for a <strong>family home</strong> or an{" "}
                  <strong>investment opportunity</strong>, Bahria Town Dubai has
                  the perfect property for you.
                </p>
                <h2 className="text-left text-[1.4rem]">
                  Available Villas in Bahria Town Dubai:
                </h2>
                <ul className="list-disc list-outside pl-4 text-[#979797] ">
                  <li>
                    <div>
                      <p className="text-left mb-0">
                        <strong>4 Bedroom Villa</strong>: Ideal for small
                        families, offering modern interiors and high end
                        amenities.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="text-left mb-0">
                        <strong>5 Bedroom Villa</strong>: Spacious and stylish,
                        perfect for larger families seeking extra comfort.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="text-left">
                        <strong>6 Bedroom Villa</strong>: A luxurious choice
                        with premium features.
                      </p>
                    </div>
                  </li>
                </ul>
                <p>
                  With its{" "}
                  <strong>
                    prime location, world class facilities, and peaceful
                    surroundings
                  </strong>
                  , Bahria Town Dubai is an excellent place to live or invest.
                  Find your dream villa today!
                </p>
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
                <h2 className="text-left">Waada at Bahria Dubai South</h2>
                <h2 className="text-left text-[1.4rem]">
                  A New Standard of Luxury Living
                </h2>
                <p>
                  <strong>
                    <a
                      className="text-[#00A3FF]"
                      href="https://dnkre.com/news/waada-by-bahria-town-dubai"
                    >
                      Waada by BT Properties
                    </a>
                  </strong>{" "}
                  is a premium residential development in{" "}
                  <strong>Bahria Dubai South</strong>, offering luxurious and
                  modern homes with spacious layouts and high-end amenities.
                  Designed for comfort and convenience, this community is
                  perfect for <strong>families and investors</strong> looking
                  for a vibrant and well connected neighborhood. Waada at Bahria
                  Dubai South promises an <strong>exceptional lifestyle</strong>{" "}
                  in one of Dubai’s most sought-after developments.
                </p>
                <ul className="list-disc list-outside pl-4 text-[#979797] ">
                  <li>
                    <div>
                      <p className="text-left mb-0">
                        <strong>Location</strong>: Bahria Town, Dubai South
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="text-left mb-0">
                        <strong>Unit Type</strong>: Coming Soon
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="text-left mb-0">
                        <strong>Bedroom Options</strong>: Coming Soon
                      </p>
                    </div>
                  </li>
                  <li>
                    <div>
                      <p className="text-left">
                        <strong>Starting Price</strong>: Coming Soon
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
