import React from "react";
import FormCallBack from "./component/FormCallBack";
import titileLogo from "../../../assets/other/palmjebelali-titile.webp";

export const JebelAli = () => {
  return (
    <div className="relative w-full h-screen bg-[#040406] flex items-center justify-center px-0 xl:px-0">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          objectPosition: "40% left", // Manually adjusting position
          backgroundImage:
            "url(https://www.tecma-demo.com/clients/palm-jebel-ali/video/PJA_hero_Loop_1.jpg)",
        }}
      >
        <source
          src="https://www.tecma-demo.com/clients/palm-jebel-ali/video/PJA_hero_Loop_1.mp4"
          type="video/mp4"
        />
        <source
          src="https://www.tecma-demo.com/clients/palm-jebel-ali/video/PJA_hero_Loop_1.webm" 
          type="video/webm"
        />
        <source
          src="https://www.tecma-demo.com/clients/palm-jebel-ali/video/PJA_hero_Loop_1.ogv"
          type="video/ogg"
        />
      </video>

      {/* Form Section */}
      <div className="relative z-10 w-full max-w-[1240px] py-5 px-4 md:py-9 bg-opacity-80">
        <div className="about-section w-full flex items-center justify-center">
          <div className="container max-w-[1240px] py-5 sm:px-4 md:py-9">
            <div className="w-full md:w-[70%] sm:w-[90%] mx-auto">
              <div className="bg-[#040406] bg-opacity-50 rounded-2xl py-10 px-3 sm:px-6 m-4 backdrop-blur-[2px]">
                <img
                  className="w-[40%] mb-4 m-auto"
                  src={titileLogo}
                  alt="jebel-ali"
                />
                <FormCallBack />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JebelAli;
