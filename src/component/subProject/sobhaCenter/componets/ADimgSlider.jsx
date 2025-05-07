import React, { useState } from "react";
import Slider from "react-slick";
import slidImg1 from "../../../../assets/pojects/sobhaCenter/Slide-1.webp";
import slidImg2 from "../../../../assets/pojects/sobhaCenter/Slide-2.webp";
import slidImg3 from "../../../../assets/pojects/sobhaCenter/Slide-3.webp";
import slidImg4 from "../../../../assets/pojects/sobhaCenter/Slide-4.webp";
import slidImg5 from "../../../../assets/pojects/sobhaCenter/Slide-5.webp";
import slidImg6 from "../../../../assets/pojects/sobhaCenter/Slide-4.webp";
import PopupModel from "./ADmodel";

export const ADimgSlider = () => {
  const [ShowPopup, setShowPopup] = useState(false);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,

        settings: {
          slidesToShow: 4,

          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 640,

        settings: {
          slidesToShow: 2,

          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container max-w-[1240px] py-6  px-4 m-auto">
      <Slider {...settings}>
        <div className="px-1 pt-[60px]">
          <div
            className=" w-full h-[300px] md:h-[450px] bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${slidImg1})` }}
            onClick={() => setShowPopup(true)}
          ></div>
        </div>
        <div className="px-1 ">
          <div
            className=" w-full h-[300px] md:h-[450px] bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${slidImg2})` }}
            onClick={() => setShowPopup(true)}
          ></div>
        </div>
        <div className="px-1 pt-[60px]">
          <div
            className=" w-full h-[300px] md:h-[450px] bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${slidImg3})` }}
            onClick={() => setShowPopup(true)}
          ></div>
        </div>
        <div className="px-1">
          <div
            className=" w-full h-[300px] md:h-[450px] bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${slidImg4})` }}
            onClick={() => setShowPopup(true)}
          ></div>
        </div>
        <div className="px-1 pt-[60px]">
          <div
            className=" w-full h-[300px] md:h-[450px] bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${slidImg5})` }}
            onClick={() => setShowPopup(true)}
          ></div>
        </div>
        <div className="px-1">
          <div
            className=" w-full h-[300px] md:h-[450px] bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${slidImg6})` }}
            onClick={() => setShowPopup(true)}
          ></div>
        </div>
      </Slider>
      <div>
        {ShowPopup && <PopupModel onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default ADimgSlider;
