import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import ProjectList from "./ProjectList";
import { Link, useNavigate } from "react-router-dom";

export const FeatureProject = () => {
  const navigate = useNavigate();

  //navigation
  const goToOffPlan = () => {
    navigate("/off-plan-project");
  };

  return (
    <div className="w-full bg-[#040406] flex items-center justify-center px-4 xl:px-0">
      <div className="featureProject container max-w-[1240px] py-5  px-4  md:py-9">
        <div className="flex flex-col  md:flex-row ">
          <div className="basis-4/5">
            <h2>Discover Featured Off-Plan Projects</h2>
            <div className="flex items-end justify-start mb-2">
              <h3 className="load-text m-0">In Dubai</h3>
              <span className="loadDot dot1"></span>
              <span className="loadDot dot2"></span>
              <span className="loadDot dot2"></span>
            </div>
          </div>
          <div className="basis-1/5">
            <Link
              to="/off-plan-project"
              className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem] p-2"
            >
              View More
              <MdOutlineKeyboardDoubleArrowRight
                className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]"
                aria-label="off-plan project"
              />
            </Link>
          </div>
        </div>
        <ProjectList />
      </div>
    </div>
  );
};

export default FeatureProject;
