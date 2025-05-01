import React from "react";
import FloorCover1 from "../../../../assets/lavioleta/floorCover1.webp";
import ImgText from "../../../../assets/lavioleta/personally_visited_approved.webp";
import FloorPlan from "./LFloorPlan";

export const LFloorPlanComponent = () => {
  return (
    <div id="floorPlan" className="container max-w-[1240px] py-6  px-4 m-auto">
      <h2 className="text-[#fff] m-auto w-fit mb-4 mt-3">
        Bahria Town Dubai | Floor Plan
      </h2>
      <p className="text-center">
        At <strong>Bahria Dubai by BT Properties</strong>, we design homes that
        are <strong>comfortable, beautiful, and practical</strong>. Our team
        works with <strong>experienced architects and engineers</strong> to
        create floor plans that make the best use of space while keeping
        everything stylish and functional.
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
      <p className="text-center mt-3">
        We offer a variety of options, including{" "}
        <strong>
          spacious villas, modern apartments, and commercial spaces
        </strong>
        , all designed for{" "}
        <strong>good airflow, natural light, and everyday convenience</strong>.
        With <strong>BT Properties</strong>, you get a home that fits your
        lifestyle perfectly, giving you both{" "}
        <strong>comfort and quality</strong>.
      </p>
    </div>
  );
};

export default LFloorPlanComponent;
