import React, { useState } from "react";
import gr from "../../../../assets/pojects/sobhaCenter/floorplan2.webp";
import ff from "../../../../assets/pojects/sobhaCenter/floorplan1.webp";
import rf from "../../../../assets/pojects/addressVilla/floorPlan03.webp";
import PopupModel from "./ADmodel";

export const ADFloorPlan = () => {
  const [activeTab, setActiveTab] = useState("Tab1");
  const [showPopup, setShowPopup] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleViewPlanClick = () => {
    setShowPopup(true);
  };

  const handleFormSubmit = () => {
    setIsOverlayVisible(false);
    setShowPopup(false); // Optionally close the popup after submission
  };

  return (
    <div className="overflow-hidden">
      <div className="tabs1">
        <button
          className={`tab-btn hover:!bg-[#d59d52] !ml-0 z-30 ${
            activeTab === "Tab1" ? "!bg-[#d59d52]" : ""
          }`}
          onClick={() => handleTabClick("Tab1")}
        >
          1 BHK
        </button>
        <button
          className={`tab-btn hover:!bg-[#d59d52] z-20 ${
            activeTab === "Tab2" ? "!bg-[#d59d52]" : ""
          }`}
          onClick={() => handleTabClick("Tab2")}
        >
          2 BHK
        </button>
      </div>
      <div className="tab-content bg-[#D9D9D9] p-1 md:p-3">
        {activeTab === "Tab1" && (
          <div className="m-2 relative">
            {isOverlayVisible && (
              <div
                onClick={handleViewPlanClick}
                className="w-full h-[100%] absolute backdrop-blur-sm cursor-pointer flex items-center justify-center"
              >
                <div className="relative">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <button className="px-9 py-2 bg-sky-400 rounded-full  m-auto text-[#000] text-[0.8rem] md:text-[1rem]">
                    View Floor Plan
                  </button>
                </div>
              </div>
            )}
            <div className="w-[100%] h-fit text-center bg-[#ffffff]">
              <img
                className="h-[100%] w-full m-auto"
                src={gr}
                alt="floor plan"
              />
            </div>
          </div>
        )}
        {activeTab === "Tab2" && (
          <div className="m-2 relative">
            {isOverlayVisible && (
              <div
                onClick={handleViewPlanClick}
                className="w-full h-[100%] absolute backdrop-blur-sm cursor-pointer flex items-center justify-center"
              >
                <div className="relative">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <button className="px-9 py-2 bg-sky-400 rounded-full  m-auto text-[#000] ">
                    View Floor Plan
                  </button>
                </div>
              </div>
            )}
            <div className="w-[100%] h-fit text-center bg-[#ffffff]">
              <img
                className="h-[100%] w-full m-auto"
                src={ff}
                alt="floor plan"
              />
            </div>
          </div>
        )}
      </div>
      <div>
        {showPopup && (
          <PopupModel
            onClose={() => setShowPopup(false)}
            onFormSubmit={handleFormSubmit}
          />
        )}
      </div>
    </div>
  );
};

export default ADFloorPlan;
