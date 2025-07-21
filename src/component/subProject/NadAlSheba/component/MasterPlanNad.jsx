import React, { useState } from "react";
import masterPlanImg from "../../../../assets/pojects/NadAlSheba/master-plan.webp";

export const MasterPlanNad = () => {
  return (
    <div className="container max-w-[1240px] py-6  px-4 m-auto">
      <h1 className="text-[#fff] m-auto w-fit mt-3 mb-0">Master Plan</h1>
      <h3 className="m-0 text-[#258493] text-center mb-2">
        Nad Al Sheba Gardens
      </h3>
      <img className="w-full h-auto rounded-lg" src={masterPlanImg} />
    </div>
  );
};

export default MasterPlanNad;
