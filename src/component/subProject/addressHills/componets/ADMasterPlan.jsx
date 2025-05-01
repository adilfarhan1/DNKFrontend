import React, { useState } from "react";
import masterPlanImg from "../../../../assets/pojects/addressVilla/newphase.webp";

export const ADMasterPlan = () => {

  return (
    <div
      className="container max-w-[1240px] py-6  px-4 m-auto"
    >
      <h1 className="text-[#fff] m-auto w-fit mb-4 mt-3">Master Plan</h1>
      <img className="w-full h-auto" src={masterPlanImg} />
    </div>
  );
};

export default ADMasterPlan;
