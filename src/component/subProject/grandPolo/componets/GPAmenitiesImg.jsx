import React, { useState } from "react";
import Slider from "react-slick";
import slidImg1 from "../../../../assets/lavioleta/aminitimg1.webp";
import slidImg2 from "../../../../assets/lavioleta/aminitimg2.webp";
import slidImg3 from "../../../../assets/lavioleta/aminitimg3.webp";
import slidImg4 from "../../../../assets/lavioleta/aminitimg4.webp";
import slidImg5 from "../../../../assets/lavioleta/aminitimg5.webp";
import PopupModel from "./GPmodel";

export const ADAmenitiesImg = () => {
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
    <div id="Amenities" className="container max-w-[1240px] py-6  px-4 m-auto">
      <h1 className="text-[#fff] m-auto w-fit">Community Amenities</h1>
      <p className="w-[100%] md:w-[80%] text-center m-auto mb-[20px] md:mb-[30px]">
        Experience a lifestyle of convenience and luxury with our world-class
        amenities, including a state-of-the-art fitness centre, swimming pools,
        lush green parks, and a vibrant community center for social gatherings
        and events.
      </p>
      <Slider {...settings}>
        <div className="px-1">
          <div
            className=" w-full h-[300px] md:h-[450px] bg-no-repeat bg-cover bg-center rounded-lg relative overflow-hidden"
            style={{ backgroundImage: `url(${slidImg1})` }}
            onClick={() => setShowPopup(true)}
          >
            <div className="w-full h-[160px] absolute left-0 bottom-0 bg-gradient-to-t from-[#000000] flex items-end justify-center">
              <h3 className="text-[#ffff] text-[1.2rem] font-semibold pb-6">
                Outdoor Pool
              </h3>
            </div>
          </div>
        </div>
        <div className="px-1 ">
          <div
            className=" w-full h-[300px] md:h-[450px] bg-no-repeat bg-cover bg-center rounded-lg relative overflow-hidden"
            style={{ backgroundImage: `url(${slidImg2})` }}
            onClick={() => setShowPopup(true)}
          >
            <div className="w-full h-[160px] absolute left-0 bottom-0 bg-gradient-to-t from-[#000000] flex items-end justify-center">
              <h3 className="text-[#ffff] text-[1.2rem] font-semibold pb-6">
                Green Land
              </h3>
            </div>
          </div>
        </div>
        <div className="px-1">
          <div
            className=" w-full h-[300px] md:h-[450px] bg-no-repeat bg-cover bg-center rounded-lg relative overflow-hidden"
            style={{ backgroundImage: `url(${slidImg3})` }}
            onClick={() => setShowPopup(true)}
          >
            <div className="w-full h-[160px] absolute left-0 bottom-0 bg-gradient-to-t from-[#000000] flex items-end justify-center">
              <h3 className="text-[#ffff] text-[1.2rem] font-semibold pb-6">
                Mosque
              </h3>
            </div>
          </div>
        </div>
        <div className="px-1">
          <div
            className=" w-full h-[300px] md:h-[450px] bg-no-repeat bg-cover bg-center rounded-lg relative overflow-hidden"
            style={{ backgroundImage: `url(${slidImg4})` }}
            onClick={() => setShowPopup(true)}
          >
            <div className="w-full h-[160px] absolute left-0 bottom-0 bg-gradient-to-t from-[#000000] flex items-end justify-center">
              <h3 className="text-[#ffff] text-[1.2rem] font-semibold pb-6">
                Kids Play Area
              </h3>
            </div>
          </div>
        </div>
        <div className="px-1">
          <div
            className=" w-full h-[300px] md:h-[450px] bg-no-repeat bg-cover bg-center rounded-lg relative overflow-hidden"
            style={{ backgroundImage: `url(${slidImg5})` }}
            onClick={() => setShowPopup(true)}
          >
            <div className="w-full h-[160px] absolute left-0 bottom-0 bg-gradient-to-t from-[#000000] flex items-end justify-center">
              <h3 className="text-[#ffff] text-[1.2rem] font-semibold pb-6">
                Gym
              </h3>
            </div>
          </div>
        </div>
      </Slider>
      <div>
        {ShowPopup && <PopupModel onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default ADAmenitiesImg;
