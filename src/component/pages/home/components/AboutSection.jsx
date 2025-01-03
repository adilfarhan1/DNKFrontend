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
          alt="about image"
          className="w-[80%] order-last md:order-first md:w-[80%] m-auto"
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
            Welcome to DNK Real Estate, DNK is the harmony, dream and friendship
            between Dann Leslie and Waseem Khursheed who placed their trust and
            confidence in each other and believed in each other to make a
            tangible difference in people's lives, in their communities, and
            this ambitious commitment and burning passion endured them through
            life's challenges and helped them emerge as successful.
          </p>
          <p className="text-justify pr-3">
            Hence, they understand the importance of trust, confidence, and
            commitment extremely well. These are the tenets of DNK morals and
            each member of the DNK family swears to extend the same values to
            every client, investor, and shareholder they cross paths with. DNK
            Real Estate, we are dedicated to understanding the unique needs of
            our clients, listening to their stories, and empathetically guiding
            them toward the perfect home. Through unwavering commitment and
            world-class service, we transform dreams into reality, nurturing
            investments and safeguarding the vision of families, entrepreneurs,
            and dreamers.
          </p>
          <button onClick={goToAboutPage} className="site-btn">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
