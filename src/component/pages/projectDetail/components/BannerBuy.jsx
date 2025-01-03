import React, { useState } from "react";
import buyProject from "../../../../assets/banner-img/sub_banner.webp";
import { useLocation } from "react-router-dom";
import { PopupModel } from "../../../model/PopupModel";
import { useLazyLoadBackground } from "../../../../hooks/useLazyLoadBackground";

export const BannerBuy = () => {
  const location = useLocation();
  const [ShowPopup, setShowPopup] = useState(false);

  const getHeading = () => {
    switch (location.pathname) {
      case "/buy-project":
        return "Ready to Move Property in Dubai";
      case "/off-plan-project":
        return "Off Plan Property in Dubai";
      case "/sell-project":
        return "Let’s sell your property profitably";
      case "/privacy-policy":
        return "Privacy Policy for DNK Real Estate";
    }
  };

  const getSubTitile = () => {
    switch (location.pathname) {
      case "/buy-project":
        return "Properties for sale in Dubai";
      case "/off-plan-project":
        return "New top-launched projects";
      case "/sell-project":
        return "Entire process is on us, from evaluation to a deal";
      case "/privacy-policy":
        return "Effective Date: 01 June 2022";
    }
  };

  const getBannerImg = () => {
    switch (location.pathname) {
      case "/buy-project":
        return buyProject;
      case "/off-plan-project":
        return buyProject;
      case "/sell-project":
        return buyProject;
      case "/privacy-policy":
        return buyProject;
    }
  };

  const [bannerRef, bannerImg] = useLazyLoadBackground(getBannerImg());

  return (
    <div
      className="banner w-full bg-[#040406] flex items-center justify-center"
      ref={bannerRef}
      style={{ backgroundImage: bannerImg ? `url(${bannerImg})` : "" }}
    >
      <div className="container max-w-[1240px] px-4 flex items-center justify-start">
        <div className="banner-content text-center w-[100%]">
          <h1 className=" text-center">{getHeading()}</h1>
          <p className="pb-4 text-center">{getSubTitile()}</p>
          {location.pathname == "/sell-project" && (
            <button onClick={() => setShowPopup(true)} className="site-btn ">
              Request callback
            </button>
          )}
        </div>
      </div>
      <div>
        {ShowPopup && <PopupModel onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default BannerBuy;
