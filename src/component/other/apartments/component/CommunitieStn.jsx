import React, { useState } from 'react'
import PopupApatment from '../../../model/PopupApatment';

export const CommunitieStn = () => {
    const [ShowPopup, setShowPopup] = useState(false);

  return (
    <div className="w-full bg-[#040406] flex items-center justify-center px-4 xl:px-0">
      <div className="container max-w-[1240px] py-5 !pt-0 px-4  md:py-9">
        <div className="mb-4">
          <h2 className="m-0">Top Communities in Dubai</h2>
          <h3 className="m-0 text-[#A4815C]">
            Live Where Luxury Meets Lifestyle
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3  md:grid-cols-4 lg:grid-cols-5 gap-2">
          <div className="site-btn1 !p-1.5 md:!p-2 flex items-center justify-c">
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              Jumeirah Village Circle
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 flex items-center justify-c">
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              Business Bay
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 flex items-center justify-c">
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              Dubailand
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 flex items-center justify-c">
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              Dubai Silicon OASIS
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 flex items-center justify-c">
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              Dubai Hills Estate
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 flex items-center justify-c">
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              Al Furjan
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 flex items-center justify-c">
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              DAMAC Hills
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 flex items-center justify-c">
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              Dubai Creek Harbour
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 flex items-center justify-c">
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              Palm Jumeirah
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 flex items-center justify-c">
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              Dubai South
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 flex items-center justify-c">
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              Al Reem Island
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 flex items-center justify-c">
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              Dubai Marina
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 flex items-center justify-c">
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              Yas Island
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 flex items-center justify-c">
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              Sobha Hartland
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 flex items-center justify-c">
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              Dubai Sports City
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={() => setShowPopup(true)}
            className="bg-[#997A5D] hover:bg-[#000] hover:text-[#997A5D] text-[#fff] w-fit px-[1.5rem] py-[10px] mt-[25px] rounded duration-100 flex justify-center mb-3 capitalize"
          >
            Inquire more about
          </button>
        </div>
        <div>
          {ShowPopup && <PopupApatment onClose={() => setShowPopup(false)} />}
        </div>
      </div>
    </div>
  );
}

export default CommunitieStn