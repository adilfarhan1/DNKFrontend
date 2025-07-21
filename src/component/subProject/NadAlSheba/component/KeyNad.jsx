import React, { useState } from 'react'
import image01 from '../../../../assets/pojects/NadAlSheba/image01.webp'
import image01M from "../../../../assets/pojects/NadAlSheba/image01M.webp";
import PopupNad from './PopupNad';

export const KeyNad = () => {
  const [ShowPopup, setShowPopup] = useState(false);

  return (
    <div className="w-full bg-[#040406] flex items-center justify-center px-4 pt-0 xl:px-0">
      <div className="container max-w-[1240px] py-5 !pt-0  px-4  md:py-9">
        <div className="bg-[#EFEBE2] rounded-xl overflow-hidden">
          <div
            className="!w-full h-[200px] bg-cover bg-no-repeat bg-bottom block md:hidden"
            style={{
              backgroundImage: `url(${image01M})`,
            }}
          ></div>
          <div className="grid grid-cols-3">
            <div className="col-span-3 md:col-span-2 pl-5 md:pl-[3rem] pr-5 md:pr-0 py-[2rem]">
              <h2 className="text-[#258493]">Key Features</h2>
              <p className=" m-0 text-[#000] text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                Choose from beautiful 3-bedroom townhouses and 4 to 7-bedroom
                villas, starting at AED 5.1M. Homes come with modern designs,
                big windows, open layouts, and private outdoor spaces.
              </p>
              <ul className="pl-2 list-disc list-outside">
                <li className=" m-0 text-[#000] text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  G+1 and G+2 townhouses
                </li>
                <li className="m-0 text-[#000] text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  Different villa styles with a modern look
                </li>
                <li className="m-0 text-[#000] text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  Floor-to-ceiling windows
                </li>
                <li className="m-0 text-[#000] text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  Private gardens and rooftop spaces
                </li>
                <li className="m-0 text-[#000] text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  Options with family rooms, study areas, and maid’s rooms.
                </li>
                <li className="m-0 text-[#000] text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  Lifestyle Perks: Iconic landmarks, shopping, dining, and
                  pristine beaches.
                </li>
              </ul>
              <div>
                <button
                  onClick={() => setShowPopup(true)}
                  className="bg-[#258493] hover:bg-[#000] hover:text-[#258493] text-[#fff] w-fit px-[1.5rem] py-[10px] mt-[25px] rounded duration-100 flex justify-center mb-3 capitalize"
                >
                  Inquire more about
                </button>
              </div>
            </div>
            <div
              className="w-full h-full bg-cover bg-no-repeat bg-left hidden md:block"
              style={{
                backgroundImage: `url(${image01})`,
              }}
            ></div>
          </div>
        </div>
        <div>
          {ShowPopup && <PopupNad onClose={() => setShowPopup(false)} />}
        </div>
      </div>
    </div>
  );
};

export default KeyNad;