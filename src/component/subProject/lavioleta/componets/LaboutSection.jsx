import React, { useState } from "react";
import aboutImg from "../../../../assets/lavioleta/Aboutimg.webp";
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
    <div
      id="about"
      className="about-section w-full bg-[#000] flex items-center justify-center"
    >
      <div className="container max-w-[1240px] py-6  px-4">
        <h1 className="text-[#fff] m-auto w-fit mb-4 mt-3">
          A Place Where you belong
        </h1>
        <div className="  md:py-9 grid  md:grid-cols-2 relative">
          <img
            src={aboutImg}
            alt="about image"
            className="w-[80%] order-last md:order-first md:w-[80%] m-auto"
            loading="lazy"
          />
          <div>
            <p className="text-justify">
              La Tilia in Villanova is the newest villa development by Dubai
              Properties, features the most intriguing 3 and 4 bedroom
              townhouses created complete with premium amenities. Offering
              inhabitants a new level of living in contemporary townhouses with
              beautiful architectural elements and stunning vistas. Users who
              opt to make the vast interior their townhouses will lead a
              relatively active lifestyle in this place.
            </p>
            <p className="text-justify">
              Take benefit of the simple and appealing payment methods to secure
              your position in this world of luxury and greenery that offers an
              active lifestyle. You are going to enjoy the best time possible
              here because of the high level of ease and refinement that has
              been integrated across the property
            </p>
            <button
              onClick={() => setShowPopup(true)}
              className="site-btn !text-[#fff] hover:!text-[#000] !border-[#fff] hover:!bg-[#fff]"
            >
              Request callback
            </button>
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
