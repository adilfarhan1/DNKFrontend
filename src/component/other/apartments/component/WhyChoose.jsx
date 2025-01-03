import React, { useState } from 'react'
import image01 from '../../../../assets/dubaiApaetment/image01.webp'
import image01M from "../../../../assets/dubaiApaetment/image01Mb.webp";
import PopupApatment from '../../../model/PopupApatment';

export const WhyChoose = () => {
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
              <h2 className="text-[#A4815C]">
                Why Choose Apartments in Dubai?
              </h2>
              <ul className="pl-2 list-disc list-outside">
                <li className=" m-0 text-[#000] text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  High ROI: Dubai offers exceptional rental yields and strong
                  capital growth.
                </li>
                <li className="m-0 text-[#000] text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  Luxury Living: World-class amenities, stunning views, and
                  modern designs.
                </li>
                <li className="m-0 text-[#000] text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  Tax-Free Benefits: No income or capital gains tax, maximizing
                  your returns.
                </li>
                <li className="m-0 text-[#000] text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  Prime Location: Strategic global hub with vibrant
                  neighborhoods.
                </li>
                <li className="m-0 text-[#000] text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  Secure Investment: Safe city with a well-regulated real estate
                  market.
                </li>
                <li className="m-0 text-[#000] text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  Lifestyle Perks: Iconic landmarks, shopping, dining, and
                  pristine beaches.
                </li>
                <li className="m-0 text-[#000] text-[0.8rem] md:text-[0.9rem] xl:text-[1rem]">
                  Residency Options: Own property and enjoy long-term visa
                  benefits.
                </li>
              </ul>
              <div>
                <button
                  onClick={() => setShowPopup(true)}
                  className="bg-[#997A5D] hover:bg-[#000] hover:text-[#997A5D] text-[#fff] w-fit px-[1.5rem] py-[10px] mt-[25px] rounded duration-100 flex justify-center mb-3 capitalize"
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
            {ShowPopup && <PopupApatment onClose={() => setShowPopup(false)} />}
          </div>
      </div>
    </div>
  );
}

export default WhyChoose