import React, { useState } from 'react'
import PopupApatment from '../../../model/PopupApatment';
import { IoLogoWhatsapp } from "react-icons/io";
import image02 from "../../../../assets/dubaiApaetment/image02.webp"
import logo01 from "../../../../assets/dubaiApaetment/logo01.webp"
import logo02 from "../../../../assets/dubaiApaetment/logo02.webp"
import logo03 from "../../../../assets/dubaiApaetment/logo03.webp"
import logo04 from "../../../../assets/dubaiApaetment/logo04.webp"
import logo05 from "../../../../assets/dubaiApaetment/logo05.webp"
import logo06 from "../../../../assets/dubaiApaetment/logo06.webp"

export const DeveloperStn = () => {
    const [ShowPopup, setShowPopup] = useState(false);

  return (
    <div className="w-full bg-[#040406] flex items-center justify-center px-4 pt-0 xl:px-0">
      <div className="container max-w-[1240px] py-5 !pt-0  px-4  md:py-9">
        <div className="md:flex">
          <div
            className="rounded-xl bg-cover bg-no-repeat bg-center px-5 md:px-7 py-[2rem] md:py-[3rem] md:max-w-[500px]"
            style={{
              backgroundImage: `url(${image02})`,
            }}
          >
            <h2>Top UAE Developer</h2>
            <p className="mb-10 text-[#fff]">
              Explore Leading Developers in Dubai and Beyond Inquire Now to Find
              the Perfect Match for Your Dream Property!
            </p>
            <div className=" flex gap-3 mt-2">
              <button onClick={() => setShowPopup(true)} className="site-btn ">
                Request callback
              </button>
              <a
                href={`https://wa.me/+971543049309?text=Hello, I’m interested in learning more about Dubai apartments. Please send me the details`}
                className="site-btn1 items-center flex"
                target="_blank"
              >
                <IoLogoWhatsapp className="text-[1.4rem] m-auto" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 md:pl-5 gap-3 pt-3 md:pt-0">
            <div className="bg-[#EFEBE2] rounded-lg md:rounded-xl p-3 md:p-6 flex items-center justify-center">
              <div className="w-fit h-[30px] md:h-[50px] flex items-center justify-center">
                <img className="w-fit h-full" src={logo01} alt="Emaar" />
              </div>
            </div>
            <div className="bg-[#EFEBE2] rounded-lg md:rounded-xl  p-3 md:p-6 flex items-center justify-center">
              <div className="w-fit h-[30px] md:h-[50px] flex items-center justify-center">
                <img className="w-fit h-full" src={logo02} alt="Sobha" />
              </div>
            </div>
            <div className="bg-[#EFEBE2] rounded-lg md:rounded-xl  p-3 md:p-6 flex items-center justify-center">
              <div className="w-fit h-[30px] md:h-[50px] flex items-center justify-center">
                <img className="w-fit  h-full" src={logo03} alt="Damac" />
              </div>
            </div>
            <div className="bg-[#EFEBE2] rounded-lg md:rounded-xl  p-3 md:p-6 flex items-center justify-center">
              <div className="w-fit h-[30px] md:h-[50px] flex items-center justify-center">
                <img className="w-fit h-full" src={logo04} alt="Meraas" />
              </div>
            </div>
            <div className="bg-[#EFEBE2] rounded-lg md:rounded-xl  p-3 md:p-6 flex items-center justify-center">
              <div className="w-fit h-[30px] md:h-[50px] flex items-center justify-center">
                <img className="w-fit h-full" src={logo05} alt="binghatti" />
              </div>
            </div>
            <div className="bg-[#EFEBE2] rounded-lg md:rounded-xl  p-3 md:p-6 flex items-center justify-center">
              <div className="w-fit h-[30px] md:h-[50px] flex items-center justify-center">
                <img className="h-full" src={logo06} alt="Aldar" />
              </div>
            </div>
          </div>
        </div>

        <div>
          {ShowPopup && <PopupApatment onClose={() => setShowPopup(false)} />}
        </div>
      </div>
    </div>
  );
}

export default DeveloperStn