import React from "react";
import FormEvent from "./components/FormEvent";
import { Helmet } from "react-helmet-async";

export const Attendance = () => {
  return (
    <div>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Event Attendance</title>
        <meta name="description" content="Attendance" />
      </Helmet>
      <div className="about-section w-full bg-[#040406] flex items-center justify-center">
        <div className="container max-w-[1240px] py-5  sm:px-4  md:py-9 relative">
          <div className="w-[100%] m-auto">
            {/* <img src={Logo} alt="logo" className="m-auto w-[20%]" /> */}
            <FormEvent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
