import React, { useState } from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import Studio from "../../../../assets/bahria/studio01.webp"
import List02 from "../../../../assets/bahria/1br.webp";
import List03 from "../../../../assets/bahria/2br.webp";
import List04 from "../../../../assets/bahria/3br.webp";
import List05 from "../../../../assets/bahria/list01.webp";
import List06 from "../../../../assets/bahria/list02.webp";
import List07 from "../../../../assets/bahria/list03.webp";
import List08 from "../../../../assets/bahria/list04.webp";
import PopupModel from "../componets/Lmodel";
import Slider from 'react-slick';

export const LPriceSection = () => {
    const [ShowPopup, setShowPopup] = useState(false);

    var settings = {
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 3,
        slidesToScroll: 1,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,

          settings: {
            slidesToShow: 3,

            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 768,

          settings: {
            slidesToShow: 3,

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
    var settings01 = {
      dots: false,
      infinite: true,
      speed: 200,
      slidesToShow: 4,
      slidesToScroll: 1,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,

          settings: {
            slidesToShow: 4,

            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 768,

          settings: {
            slidesToShow: 3,

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
    <div id="about" className="about-section w-full bg-[#000] ">
      <div className="container max-w-[1240px] py-6  px-4 m-auto">
        <h2 className="text-[#fff] m-auto w-fit mb-4 mt-3">
          Bahria Town Dubai Available Units
        </h2>
        <div>
          <div className="">
            <h2 className="text-[1rem] w-fit">
              G+35 Tower – Modern Living Redefined
            </h2>
            <div className="h-[0.1rem] w-full bg-[#fff]"></div>
          </div>

          <Slider {...settings}>
            <div className="p-2">
              <div class=" max-w-full overflow-hidden  border border-[#ffff] rounded-[10px] shadow bg-[#040406] relative mb-1">
                <div className="flex flex-col justify-between mb-[40px]">
                  <div
                    role="img"
                    aria-label={`studio offplan, aprtments, Dubai, real estate`}
                    style={{
                      backgroundImage: `url(${Studio})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "166px",
                      position: "relative",
                    }}
                  >
                    <div className="bg-[#FFC700] border border-[#fff] rounded-l-full rounded-r-none w-fit px-5 py-0 absolute bottom-[-10px] right-0">
                      <h2 className="line-clamp-1 text-[0.8rem] font-normal m-0 px-1 py-1 text-[#000]">
                        Starting From: AED 460K
                      </h2>
                    </div>
                  </div>
                  <div class="p-5">
                    <h2 class="mb-0 text-2xl font-bold tracking-tight text-white line-clamp-1 text-[1rem]">
                      Studio Apartment
                    </h2>
                    <p class="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                      442.19 sqft
                    </p>
                    <p className="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                      Closed Kitchen + Balcony
                    </p>
                    <p className="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                      442.19 sqft
                    </p>
                    <p className="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                      Closed Kitchen + Balcony
                    </p>
                  </div>
                </div>

                <div className=" flex mt-1 w-full absolute bottom-0 left-0">
                  <button
                    onClick={() => setShowPopup(true)}
                    className="site-btn1 w-full !border-none !rounded-none !bg-[#0077BA]"
                  >
                    Callback
                  </button>
                  <a
                    href={`https://wa.me/+971543049309?text=Hello,%20Share%20more%20details%20Bahria%20Town%20Studio%20Apartment%20`}
                    className="site-btn1 items-center flex !border-none !rounded-none !bg-[#6B9B2D]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp
                      className="text-[1.4rem] m-auto"
                      aria-label="whats app"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div class="max-w-full overflow-hidden  border border-[#ffff] rounded-[10px] shadow bg-[#040406] relative mb-1">
                <div className="flex flex-col justify-between mb-[40px]">
                  <div
                    role="img"
                    aria-label={`studio offplan, aprtments, Dubai, real estate`}
                    style={{
                      backgroundImage: `url(${List02})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "166px",
                      position: "relative",
                    }}
                  >
                    <div className="bg-[#FFC700] border border-[#fff] rounded-l-full rounded-r-none w-fit px-5 py-0 absolute bottom-[-10px] right-0">
                      <h2 className="line-clamp-1 text-[0.8rem] font-normal m-0 px-1 py-1 text-[#000]">
                        Starting From: AED 850K
                      </h2>
                    </div>
                  </div>
                  <div class="p-5">
                    <h2 class="mb-0 text-2xl font-bold tracking-tight text-white line-clamp-1 text-[1rem]">
                      1-Bedroom Apartments
                    </h2>
                    <div className="">
                      <p class="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                        756.06 sqft
                      </p>
                      <p className="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                        754.56 sqft
                      </p>
                      <p className="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                        752.40 sqft
                      </p>
                    </div>

                    <p className="m-0 font-normal text-gray-400 text-[0.8rem]">
                      PWR + Closed Kitchen + Living/Dining
                    </p>
                  </div>
                </div>

                <div className=" flex mt-1 w-full absolute bottom-0 left-0">
                  <button
                    onClick={() => setShowPopup(true)}
                    className="site-btn1 w-full !border-none !rounded-none !bg-[#0077BA]"
                  >
                    Callback
                  </button>
                  <a
                    href={`https://wa.me/+971543049309?text=Hello,%20Share%20more%20details%20Bahria%20Town%201-Bedroom%20Apartments`}
                    className="site-btn1 items-center flex !border-none !rounded-none !bg-[#6B9B2D]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp
                      className="text-[1.4rem] m-auto"
                      aria-label="whats app"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div class="max-w-full overflow-hidden  border border-[#ffff] rounded-[10px] shadow bg-[#040406] relative mb-1">
                <div className="flex flex-col justify-between mb-[40px]">
                  <div
                    role="img"
                    aria-label={`studio offplan, aprtments, Dubai, real estate`}
                    style={{
                      backgroundImage: `url(${List03})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "166px",
                      position: "relative",
                    }}
                  >
                    <div className="bg-[#FFC700] border border-[#fff] rounded-l-full rounded-r-none w-fit px-5 py-0 absolute bottom-[-10px] right-0">
                      <h2 className="line-clamp-1 text-[0.8rem] font-normal m-0 px-1 py-1 text-[#000]">
                        Starting From: AED 1.3M
                      </h2>
                    </div>
                  </div>
                  <div class="p-5">
                    <h2 class="mb-0 text-2xl font-bold tracking-tight text-white line-clamp-1 text-[1rem]">
                      2-Bedroom Apartments
                    </h2>
                    <p class="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                      1130.44 sqft
                    </p>
                    <p className="m-0 font-normal text-gray-400 text-[0.8rem]">
                      Closed Kitchen + Living/Dining
                    </p>
                    <div className="grid grid-cols-2">
                      <p className="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                        1263.59 sqft
                      </p>
                      <p className="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                        1273.06 sqft
                      </p>
                    </div>

                    <p className="m-0 font-normal text-gray-400 text-[0.8rem]">
                      Maid Room + Closed Kitchen
                    </p>
                  </div>
                </div>

                <div className=" flex mt-1 w-full absolute bottom-0 left-0">
                  <button
                    onClick={() => setShowPopup(true)}
                    className="site-btn1 w-full !border-none !rounded-none !bg-[#0077BA]"
                  >
                    Callback
                  </button>
                  <a
                    href={`https://wa.me/+971543049309?text=Hello,%20Share%20more%20details%20Bahria%20Town%202-Bedroom%20Apartments`}
                    className="site-btn1 items-center flex !border-none !rounded-none !bg-[#6B9B2D]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp
                      className="text-[1.4rem] m-auto"
                      aria-label="whats app"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div>
          <div className="">
            <h2 className="text-[1rem] w-fit mt-2">
              G+16 Cascade Buildings – Elegance Meets Comfort
            </h2>
            <div className="h-[0.1rem] w-full bg-[#fff]"></div>
          </div>

          <Slider {...settings}>
            <div className="p-2">
              <div class="max-w-full overflow-hidden  border border-[#ffff] rounded-[10px] shadow bg-[#040406] relative mb-1">
                <div className="flex flex-col justify-between mb-[40px]">
                  <div
                    role="img"
                    aria-label={`studio offplan, aprtments, Dubai, real estate`}
                    style={{
                      backgroundImage: `url(${List02})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "166px",
                      position: "relative",
                    }}
                  >
                    <div className="bg-[#FFC700] border border-[#fff] rounded-l-full rounded-r-none w-fit px-5 py-0 absolute bottom-[-10px] right-0">
                      <h2 className="line-clamp-1 text-[0.8rem] font-normal m-0 px-1 py-1 text-[#000]">
                        Starting From: AED 850K
                      </h2>
                    </div>
                  </div>
                  <div class="p-5">
                    <h2 class="mb-0 text-2xl font-bold tracking-tight text-white line-clamp-1 text-[1rem]">
                      1-Bedroom Apartments
                    </h2>
                    <p class="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                      764.50 sqft
                    </p>
                    <p className="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                      PWR + Closed Kitchen + Living/Dining
                    </p>
                  </div>
                </div>

                <div className=" flex mt-1 w-full absolute bottom-0 left-0">
                  <button
                    onClick={() => setShowPopup(true)}
                    className="site-btn1 w-full !border-none !rounded-none !bg-[#0077BA]"
                  >
                    Callback
                  </button>
                  <a
                    href={`https://wa.me/+971543049309?text=Hello,%20Share%20more%20details%20Bahria%20Town%201-Bedroom%20Apartments`}
                    className="site-btn1 items-center flex !border-none !rounded-none !bg-[#6B9B2D]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp
                      className="text-[1.4rem] m-auto"
                      aria-label="whats app"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div class="max-w-full overflow-hidden  border border-[#ffff] rounded-[10px] shadow bg-[#040406] relative mb-1">
                <div className="flex flex-col justify-between mb-[40px]">
                  <div
                    role="img"
                    aria-label={`studio offplan, aprtments, Dubai, real estate`}
                    style={{
                      backgroundImage: `url(${List03})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "166px",
                      position: "relative",
                    }}
                  >
                    <div className="bg-[#FFC700] border border-[#fff] rounded-l-full rounded-r-none w-fit px-5 py-0 absolute bottom-[-10px] right-0">
                      <h2 className="line-clamp-1 text-[0.8rem] font-normal m-0 px-1 py-1 text-[#000]">
                        Starting From: AED 1.3M
                      </h2>
                    </div>
                  </div>
                  <div class="p-5">
                    <h2 class="mb-0 text-2xl font-bold tracking-tight text-white line-clamp-1 text-[1rem]">
                      2-Bedroom Apartments
                    </h2>
                    <div className="grid grid-cols-2">
                      <p class="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                        1109 sqft to 1722 sqft
                      </p>
                      <p class="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                        (some with maid rooms)
                      </p>
                    </div>
                    <p className="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                      9 unique layouts ranging
                    </p>
                  </div>
                </div>

                <div className=" flex mt-1 w-full absolute bottom-0 left-0">
                  <button
                    onClick={() => setShowPopup(true)}
                    className="site-btn1 w-full !border-none !rounded-none !bg-[#0077BA]"
                  >
                    Callback
                  </button>
                  <a
                    href={`https://wa.me/+971543049309?text=Hello,%20Share%20more%20details%20Bahria%20Town%202-Bedroom%20Apartments`}
                    className="site-btn1 items-center flex !border-none !rounded-none !bg-[#6B9B2D]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp
                      className="text-[1.4rem] m-auto"
                      aria-label="whats app"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-2">
              <div class="max-w-full overflow-hidden  border border-[#ffff] rounded-[10px] shadow bg-[#040406] relative mb-1">
                <div className="flex flex-col justify-between mb-[40px]">
                  <div
                    role="img"
                    aria-label={`studio offplan, aprtments, Dubai, real estate`}
                    style={{
                      backgroundImage: `url(${List04})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "166px",
                      position: "relative",
                    }}
                  >
                    <div className="bg-[#FFC700] border border-[#fff] rounded-l-full rounded-r-none w-fit px-5 py-0 absolute bottom-[-10px] right-0">
                      <h2 className="line-clamp-1 text-[0.8rem] font-normal m-0 px-1 py-1 text-[#000]">
                        Starting From: AED 1.7M
                      </h2>
                    </div>
                  </div>
                  <div class="p-5">
                    <h2 class="mb-0 text-2xl font-bold tracking-tight text-white line-clamp-1 text-[1rem]">
                      3-Bedroom Apartments
                    </h2>
                    <div className="grid grid-cols-2">
                      <p class="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                        1539 sqft to 2325 sqft
                      </p>
                      <p class="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                        (most with maid rooms)
                      </p>
                    </div>
                    <p className="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                      10 luxurious options ranging
                    </p>
                  </div>
                </div>

                <div className=" flex mt-1 w-full absolute bottom-0 left-0">
                  <button
                    onClick={() => setShowPopup(true)}
                    className="site-btn1 w-full !border-none !rounded-none !bg-[#0077BA]"
                  >
                    Callback
                  </button>
                  <a
                    href={`https://wa.me/+971543049309?text=Hello,%20Share%20more%20details%20Bahria%20Town%203-Bedroom%20Apartments`}
                    className="site-btn1 items-center flex !border-none !rounded-none !bg-[#6B9B2D]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp
                      className="text-[1.4rem] m-auto"
                      aria-label="whats app"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div>
          <div className="">
            <h2 className="text-[1rem] w-fit mt-2">
              Townhouses & Villas – Spacious Living
            </h2>
            <div className="h-[0.1rem] w-full bg-[#fff]"></div>
          </div>

          <Slider {...settings01}>
            <div className="p-2">
              <div class="max-w-full overflow-hidden  border border-[#ffff] rounded-[10px] shadow bg-[#040406] relative mb-1">
                <div className="flex flex-col justify-between mb-[40px]">
                  <div
                    role="img"
                    aria-label={`studio offplan, aprtments, Dubai, real estate`}
                    style={{
                      backgroundImage: `url(${List05})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "166px",
                      position: "relative",
                    }}
                  >
                    <div className="bg-[#FFC700] border border-[#fff] rounded-l-full rounded-r-none w-fit px-5 py-0 absolute bottom-[-10px] right-0">
                      <h2 className="line-clamp-1 text-[0.8rem] font-normal m-0 px-1 py-1 text-[#000]">
                        Starting From: AED 2.7M
                      </h2>
                    </div>
                  </div>
                  <div class="p-5">
                    <h2 class="mb-0 text-2xl font-bold tracking-tight text-white line-clamp-1 text-[1rem]">
                      3-Bedroom Townhouse
                    </h2>
                    <p class="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                      Plot: 1864 sqft
                    </p>
                    <p className="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                      Built-up: 2691 sqft
                    </p>
                  </div>
                </div>

                <div className=" flex mt-1 w-full absolute bottom-0 left-0">
                  <button
                    onClick={() => setShowPopup(true)}
                    className="site-btn1 w-full !border-none !rounded-none !bg-[#0077BA]"
                  >
                    Callback
                  </button>
                  <a
                    href={`https://wa.me/+971543049309?text=Hello,%20Share%20more%20details%20Bahria%20Town%203-Bedroom%20Townhouse`}
                    className="site-btn1 items-center flex !border-none !rounded-none !bg-[#6B9B2D]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp
                      className="text-[1.4rem] m-auto"
                      aria-label="whats app"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div class="max-w-full overflow-hidden  border border-[#ffff] rounded-[10px] shadow bg-[#040406] relative mb-1">
                <div className="flex flex-col justify-between mb-[40px]">
                  <div
                    role="img"
                    aria-label={`studio offplan, aprtments, Dubai, real estate`}
                    style={{
                      backgroundImage: `url(${List06})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "166px",
                      position: "relative",
                    }}
                  >
                    <div className="bg-[#FFC700] border border-[#fff] rounded-l-full rounded-r-none w-fit px-5 py-0 absolute bottom-[-10px] right-0">
                      <h2 className="line-clamp-1 text-[0.8rem] font-normal m-0 px-1 py-1 text-[#000]">
                        Starting From: AED 3.07M
                      </h2>
                    </div>
                  </div>
                  <div class="p-5">
                    <h2 class="mb-0 text-2xl font-bold tracking-tight text-white line-clamp-1 text-[1rem]">
                      4-Bedroom Townhouse
                    </h2>
                    <div className="grid grid-cols-2">
                      <p class="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                        Plot: 2605 sqft
                      </p>
                    </div>
                    <p className="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                      Built-up: 2917 sqft
                    </p>
                  </div>
                </div>

                <div className=" flex mt-1 w-full absolute bottom-0 left-0">
                  <button
                    onClick={() => setShowPopup(true)}
                    className="site-btn1 w-full !border-none !rounded-none !bg-[#0077BA]"
                  >
                    Callback
                  </button>
                  <a
                    href={`https://wa.me/+971543049309?text=Hello,%20Share%20more%20details%20Bahria%20Town%204-Bedroom%20Townhouse`}
                    className="site-btn1 items-center flex !border-none !rounded-none !bg-[#6B9B2D]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp
                      className="text-[1.4rem] m-auto"
                      aria-label="whats app"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div class="max-w-full overflow-hidden  border border-[#ffff] rounded-[10px] shadow bg-[#040406] relative mb-1">
                <div className="flex flex-col justify-between mb-[40px]">
                  <div
                    role="img"
                    aria-label={`studio offplan, aprtments, Dubai, real estate`}
                    style={{
                      backgroundImage: `url(${List07})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "166px",
                      position: "relative",
                    }}
                  >
                    <div className="bg-[#FFC700] border border-[#fff] rounded-l-full rounded-r-none w-fit px-5 py-0 absolute bottom-[-10px] right-0">
                      <h2 className="line-clamp-1 text-[0.8rem] font-normal m-0 px-1 py-1 text-[#000]">
                        Starting From: AED 3.877M
                      </h2>
                    </div>
                  </div>
                  <div class="p-5">
                    <h2 class="mb-0 text-2xl font-bold tracking-tight text-white line-clamp-1 text-[1rem]">
                      4-Bedroom Semi-Detached
                    </h2>
                    <div className="grid grid-cols-2">
                      <p class="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                        Plot: 3423 sqft
                      </p>
                    </div>
                    <p className="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                      Built-up: 3606 sqft
                    </p>
                  </div>
                </div>

                <div className=" flex mt-1 w-full absolute bottom-0 left-0">
                  <button
                    onClick={() => setShowPopup(true)}
                    className="site-btn1 w-full !border-none !rounded-none !bg-[#0077BA]"
                  >
                    Callback
                  </button>
                  <a
                    href={`https://wa.me/+971543049309?text=Hello,%20Share%20more%20details%20Bahria%20Town%204-Bedroom%20Semi-Detached`}
                    className="site-btn1 items-center flex !border-none !rounded-none !bg-[#6B9B2D]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp
                      className="text-[1.4rem] m-auto"
                      aria-label="whats app"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-2">
              <div class="max-w-full overflow-hidden  border border-[#ffff] rounded-[10px] shadow bg-[#040406] relative mb-1">
                <div className="flex flex-col justify-between mb-[40px]">
                  <div
                    role="img"
                    aria-label={`studio offplan, aprtments, Dubai, real estate`}
                    style={{
                      backgroundImage: `url(${List08})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "166px",
                      position: "relative",
                    }}
                  >
                    <div className="bg-[#FFC700] border border-[#fff] rounded-l-full rounded-r-none w-fit px-5 py-0 absolute bottom-[-10px] right-0">
                      <h2 className="line-clamp-1 text-[0.8rem] font-normal m-0 px-1 py-1 text-[#000]">
                        Starting From: AED 5.90M
                      </h2>
                    </div>
                  </div>
                  <div class="p-5">
                    <h2 class="mb-0 text-2xl font-bold tracking-tight text-white line-clamp-1 text-[1rem]">
                      6-Bedroom Villa (G+2)
                    </h2>
                    <div className="grid grid-cols-2">
                      <p class="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                        Plot: 4564 sqft
                      </p>
                    </div>
                    <p className="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                      Built-up: 5371 sqft
                    </p>
                  </div>
                </div>

                <div className=" flex mt-1 w-full absolute bottom-0 left-0">
                  <button
                    onClick={() => setShowPopup(true)}
                    className="site-btn1 w-full !border-none !rounded-none !bg-[#0077BA]"
                  >
                    Callback
                  </button>
                  <a
                    href={`https://wa.me/+971543049309?text=Hello,%20Share%20more%20details%20Bahria%20Town%206-Bedroom%20Villa%20(G+2)`}
                    className="site-btn1 items-center flex !border-none !rounded-none !bg-[#6B9B2D]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLogoWhatsapp
                      className="text-[1.4rem] m-auto"
                      aria-label="whats app"
                    />
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
        <div>
          {ShowPopup && <PopupModel onClose={() => setShowPopup(false)} />}
        </div>
      </div>
    </div>
  );
}

export default LPriceSection