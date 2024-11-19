import React from "react";
import Lbanner from "./componets/Lbanner";
import LFormBanner from "./componets/LFormBanner";
import LaboutSection from "./componets/LaboutSection";
import LimgSlider from "./componets/LimgSlider";
import LFloorPlanComponent from "./componets/LFloorPlanComponent";
import LpaymentPlan from "./componets/LpaymentPlan";
import LAmenitiesImg from "./componets/LAmenitiesImg";
import LDownloadSection from "./componets/LDownloadSection";
import LBanner360 from "./componets/LBanner360";
import LTalkSection from "./componets/LTalkSection";

export const DamacIsland = () => {
  return (
    <div className="bg-[#000]">
      <div className="overflow-hidden">
        <Lbanner />
        <LFormBanner />
        <LaboutSection />
        <LimgSlider />
        <LFloorPlanComponent />
        <LpaymentPlan />
        <LAmenitiesImg />
        <LDownloadSection />
        <LBanner360 />
        <LTalkSection />
        {/* <AboutSection />
        <ImgSlider />
        <FloorPlanComponent />
        <PaymentPlan />
        <AmenitiesImg />
        <DownloadSection />
        <Banner360 />
        <TalkSection /> */}
      </div>
    </div>
  );
};

export default DamacIsland;
