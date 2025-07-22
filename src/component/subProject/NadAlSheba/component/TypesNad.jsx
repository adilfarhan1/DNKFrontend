import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import { IoBed } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa";
import nad4br from "../../../../assets/pojects/NadAlSheba/nad-villa-4br.webp";
import nad5br from "../../../../assets/pojects/NadAlSheba/nad-villa-5br.webp";
import nad6br from "../../../../assets/pojects/NadAlSheba/nad-villa-6br.webp";
import nad7br from "../../../../assets/pojects/NadAlSheba/nad-villa-7br.webp";
import PopupNad from './PopupNad';

export const TypesNad = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  var settings = {
    dots: true,
    infinite: true,
    speed: 290,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,

        settings: {
          slidesToShow: 2,

          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 640,

        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="w-full bg-[#040406] flex items-center justify-center px-4 xl:px-0"
      id="units"
    >
      <div className="featureProject container max-w-[1240px] py-5  px-4  md:py-9">
        <div className="flex flex-col  md:flex-row ">
          <div className=" w-full">
            <h2 className="m-0 text-center">Premium Villas</h2>
            <h3 className="m-0 text-[#258493] text-center mb-2">
              Nad Al Sheba Gardens
            </h3>
          </div>
        </div>
        <div>
          <Slider {...settings}>
            <div className="p-1" onClick={() => setIsPopupVisible(true)}>
              <div class="max-w-full overflow-hidden  border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer ">
                <div
                  role="img"
                  aria-label="Nad Al Sheba Gardens"
                  style={{
                    backgroundImage: `url(${nad4br})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // minWidth: "380px",
                    height: "266px",
                    position: "relative",
                  }}
                >
                  <div className="bg-[#FFC700] border border-[#fff] rounded-l-full rounded-r-none w-fit px-5 py-0 absolute bottom-[-10px] right-0">
                    <h6 className="line-clamp-1">Starting From: 11.4M</h6>
                  </div>
                </div>
                <div class="p-5">
                  <div className="flex items-center">
                    <IoBed className="text-white text-2xl mb-1" />
                    <h5 class="mb-1 text-2xl font-bold tracking-tight text-white line-clamp-1">
                      4 Bedroom Villa
                    </h5>
                  </div>

                  <div className="flex items-center">
                    <FaRegSquare className="text-gray-400 text-[1rem]" />
                    <p class="m-1 font-normal text-gray-400 line-clamp-1">
                      TOTAL ARE A: 445.52 SQM
                    </p>
                  </div>
                  <button
                    onClick={() => setIsPopupVisible(true)}
                    className="bg-[#FFFF] hover:bg-[#258493] text-[#000000] hover:text-[#FFFF] w-full px-4 py-1 rounded duration-100 flex justify-center text-[0.6rem] sm:text-[0.9rem]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="p-1" onClick={() => setIsPopupVisible(true)}>
              <div class="max-w-full overflow-hidden  border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer ">
                <div
                  role="img"
                  aria-label="Nad Al Sheba Gardens"
                  style={{
                    backgroundImage: `url(${nad5br})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // minWidth: "380px",
                    height: "266px",
                    position: "relative",
                  }}
                >
                  <div className="bg-[#FFC700] border border-[#fff] rounded-l-full rounded-r-none w-fit px-5 py-0 absolute bottom-[-10px] right-0">
                    <h6 className="line-clamp-1">Starting From: 13.9M</h6>
                  </div>
                </div>
                <div class="p-5">
                  <div className="flex items-center">
                    <IoBed className="text-white text-2xl mb-1" />
                    <h5 class="mb-1 text-2xl font-bold tracking-tight text-white line-clamp-1">
                      5 Bedroom Villa
                    </h5>
                  </div>

                  <div className="flex items-center">
                    <FaRegSquare className="text-gray-400 text-[1rem]" />
                    <p class="m-1 font-normal text-gray-400 line-clamp-1">
                      TOTAL ARE A: 525.01 SQM
                    </p>
                  </div>
                  <button
                    onClick={() => setIsPopupVisible(true)}
                    className="bg-[#FFFF] hover:bg-[#258493] text-[#000000] hover:text-[#FFFF] w-full px-4 py-1 rounded duration-100 flex justify-center text-[0.6rem] sm:text-[0.9rem]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="p-1" onClick={() => setIsPopupVisible(true)}>
              <div class="max-w-full overflow-hidden  border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer ">
                <div
                  role="img"
                  aria-label="Nad Al Sheba Gardens"
                  style={{
                    backgroundImage: `url(${nad6br})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // minWidth: "380px",
                    height: "266px",
                    position: "relative",
                  }}
                >
                  <div className="bg-[#FFC700] border border-[#fff] rounded-l-full rounded-r-none w-fit px-5 py-0 absolute bottom-[-10px] right-0">
                    <h6 className="line-clamp-1">Starting From: 17.7M</h6>
                  </div>
                </div>
                <div class="p-5">
                  <div className="flex items-center">
                    <IoBed className="text-white text-2xl mb-1" />
                    <h5 class="mb-1 text-2xl font-bold tracking-tight text-white line-clamp-1">
                      6 Bedroom Villa
                    </h5>
                  </div>

                  <div className="flex items-center">
                    <FaRegSquare className="text-gray-400 text-[1rem]" />
                    <p class="m-1 font-normal text-gray-400 line-clamp-1">
                      TOTAL ARE A: 638.51 SQM
                    </p>
                  </div>
                  <button
                    onClick={() => setIsPopupVisible(true)}
                    className="bg-[#FFFF] hover:bg-[#258493] text-[#000000] hover:text-[#FFFF] w-full px-4 py-1 rounded duration-100 flex justify-center text-[0.6rem] sm:text-[0.9rem]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>

            <div className="p-1" onClick={() => setIsPopupVisible(true)}>
              <div class="max-w-full overflow-hidden  border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer ">
                <div
                  role="img"
                  aria-label="Nad Al Sheba Gardens"
                  style={{
                    backgroundImage: `url(${nad7br})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    // minWidth: "380px",
                    height: "266px",
                    position: "relative",
                  }}
                >
                  <div className="bg-[#FFC700] border border-[#fff] rounded-l-full rounded-r-none w-fit px-5 py-0 absolute bottom-[-10px] right-0">
                    <h6 className="line-clamp-1">Starting From: 24.8M</h6>
                  </div>
                </div>
                <div class="p-5">
                  <div className="flex items-center">
                    <IoBed className="text-white text-2xl mb-1" />
                    <h5 class="mb-1 text-2xl font-bold tracking-tight text-white line-clamp-1">
                      7 Bedroom Villa
                    </h5>
                  </div>

                  <div className="flex items-center">
                    <FaRegSquare className="text-gray-400 text-[1rem]" />
                    <p class="m-1 font-normal text-gray-400 line-clamp-1">
                      TOTAL ARE A: 808.81 SQM
                    </p>
                  </div>
                  <button
                    onClick={() => setIsPopupVisible(true)}
                    className="bg-[#FFFF] hover:bg-[#258493] text-[#000000] hover:text-[#FFFF] w-full px-4 py-1 rounded duration-100 flex justify-center text-[0.6rem] sm:text-[0.9rem]"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div>
        {isPopupVisible && (
          <PopupNad onClose={() => setIsPopupVisible(false)} />
        )}
      </div>
    </div>
  );
};

export default TypesNad;