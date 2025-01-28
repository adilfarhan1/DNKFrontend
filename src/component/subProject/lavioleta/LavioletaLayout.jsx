import React from "react";
import LHeader from "./componets/LHeader";
import LFooter from "./componets/LFooter";
import HomeLavioleta from "./HomeLavioleta";


export const LavioletaLayout = () => {
  return (
    <div className="layout-body bg-[#000]">
      <LHeader />
      <HomeLavioleta />
      <LFooter />
    </div>
  );
};

export default LavioletaLayout;
