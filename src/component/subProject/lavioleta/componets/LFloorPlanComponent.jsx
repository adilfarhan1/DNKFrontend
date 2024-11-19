import React from "react";
import FloorCover1 from "../../../../assets/lavioleta/floorCover1.webp";
import ImgText from "../../../../assets/lavioleta/personally_visited_approved.webp";
import FloorPlan from "./LFloorPlan";

export const LFloorPlanComponent = () => {
  return (
    <div id="floorPlan" className="container max-w-[1240px] py-6  px-4 m-auto">
      <h1 className="text-[#000000] m-auto w-fit mb-4 mt-3">
        Townhouse Floor Plan
      </h1>
      <div className="grid grid-cols-4">
        <div className="col-span-3">
          <FloorPlan />
        </div>
        <div
          className=" w-full bg-no-repeat bg-cover bg-center rounded-lg flex items-start justify-end p-2 md:p-5 ml-2"
          style={{ backgroundImage: `url(${FloorCover1})` }}
        >
          <img className="w-[40%]" src={ImgText} />
        </div>
      </div>
    </div>
  );
};

export default LFloorPlanComponent;
