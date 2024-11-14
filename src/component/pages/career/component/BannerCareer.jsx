import React from "react";
import buyProject from "../../../../assets/banner-img/sub_banner.webp";

export const BannerCareer = () => {
  return (
    <div
      className="banner w-full bg-[#040406] flex items-center justify-center"
      style={{ backgroundImage: `url(${buyProject})` }}
    >
      <div className="container max-w-[1240px] px-4 flex items-center justify-start">
        <div className="banner-content text-center w-[100%]">
          <h1 className=" text-center">Careers</h1>
          {/* <p className="pb-4 text-center">New top-launched projects</p> */}
          {/* <button className="site-btn ">Request callback</button> */}
        </div>
      </div>
    </div>
  );
};

export default BannerCareer;
