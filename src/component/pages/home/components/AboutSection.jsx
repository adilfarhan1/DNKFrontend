import React from "react";
import aboutImg from "../../../../assets/home-page/about_home_img_1.webp";
import { useNavigate } from "react-router-dom";

export const AboutSection = () => {
  const navigate = useNavigate();

  //navigation
  const goToAboutPage = () => {
    navigate("/about");
  };
  return (
    <div className="about-section w-full bg-[#040406] flex items-center justify-center">
      <div className="container max-w-[1240px] py-5  px-4  md:py-9 grid  md:grid-cols-2 relative">
        <img
          src={aboutImg}
          alt="Dubai burj al arab, Dubai hills villas for sale, off plan, Real estate, villa, apartment"
          className="w-[80%] order-last md:order-first md:w-[80%] m-auto hidden md:block"
          loading="lazy"
        />
        <div>
          <div className="flex items-end justify-start mb-2">
            <h3 className="load-text m-0">Who we are</h3>
            <span className="loadDot dot1"></span>
            <span className="loadDot dot2"></span>
            <span className="loadDot dot2"></span>
          </div>
          <h2>Select the Best Buying and Selling Option for Your Goals</h2>
          <p className="text-justify pr-3">
            Welcome to <strong>DNK Real Estate</strong>, where trust,
            commitment, and passion meet to transform your property dreams into
            reality. Founded by Dann Leslie and Waseem Khursheed, DNK stands for
            harmony and dedication to creating meaningful connections in the{" "}
            <strong>real estate market</strong>.
          </p>
          <p className="text-justify pr-3">
            At DNK Real Estate, we prioritize trust, confidence, and
            personalized service. Whether you're <strong>Villa</strong>,{" "}
            <strong>Apartment</strong>, <strong>Townhouse</strong>,{" "}
            <strong>investing</strong>, or exploring{" "}
            <strong>off-plan properties</strong>, our team is here to guide you
            with expertise and care.
          </p>
          <p className="mb-0 font-bold pr-3">Why Choose DNK Real Estate?</p>
          <ul className="list-disc list-outside pl-4 text-[#979797] pr-3">
            <li>
              <p className="m-0">
                Trusted experts in{" "}
                <strong>residential and commercial real estate</strong>.
              </p>
            </li>
            <li>
              <p className="m-0">
                Committed to helping clients find their perfect property.
              </p>
            </li>
            <li>
              <p className="">
                Specialists in creating value for homeowners, investors, and
                entrepreneurs.
              </p>
            </li>
          </ul>
          <p className="text-justify pr-3 text-[0.9rem]">
            Choose DNK Real Estate for a seamless, client-focused experience.
            Contact us today to start your journey!
          </p>
          <button onClick={goToAboutPage} className="site-btn1">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
