import React from "react";
import projectCover from "../../../../assets/bahria/banner.webp";

export const Lbanner = () => {
  return (
    <div className="relative">
      <div
        className="banner w-full bg-[#040406] flex items-center justify-center"
        role="img"
        style={{
          backgroundImage: `url(${projectCover})`,
          backgroundPosition: "right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container max-w-[1240px] px-4 flex items-center justify-start z-10">
          <div className="banner-content h-[300px] md:h-[500px] lg:h-[700px]"></div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#000] w-full h-[50px] md:h-[100px] absolute z-10 bottom-0 left-0"></div>
    </div>
  );
};

export default Lbanner;
