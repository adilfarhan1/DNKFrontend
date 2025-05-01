import React from "react";
import bannerImg from "../../../../assets/banner-img/news_banner.webp";

export const BannerNews = () => {
  return (
    <div
      className="w-full bg-[#040406] flex items-center justify-center bg-cover bg-no-repeat"
      aria-label={`News Report`}
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="container max-w-[1240px] px-4 flex items-center justify-start">
        <div className="py-[20px] md:py-[50px] text-center w-[100%]">
          <h1 className=" text-center">News</h1>
          <p className="m-0 text-center text-[#fff]">
            Latest news of Dubai properties and investments
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerNews;
