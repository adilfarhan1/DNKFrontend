import React from "react";
import FloorCover1 from "../../../../assets/pojects/grandPolo/sideCover.webp";
import ImgText from "../../../../assets/lavioleta/personally_visited_approved.webp";
import FloorPlan from "./ADFloorPlan";

export const ADFloorPlanComponent = () => {
  return (
    <div id="floorPlan" className="container max-w-[1240px] py-6  px-4 m-auto">
      <h1 className="text-[#fff] m-auto w-fit mt-0 mb-0">Floor Plan</h1>
      <p className="w-[100%] md:w-[70%] m-auto text-center mb-4">
        Discover luxurious 1-2 bedroom apartments, offering spacious layouts,
        premium finishes, and world-class amenities for an unparalleled living
        experience.
      </p>
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

export default ADFloorPlanComponent;
