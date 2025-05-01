import React from "react";
import LHeader from "./componets/GPHeader";
import LFooter from "./componets/GPFooter";
import HomeLavioleta from "./HomeGrandPolo";


export const GrandPoloLayout = () => {
  return (
    <div className="layout-body bg-[#000]">
      <LHeader />
      <HomeLavioleta />
      <LFooter />
    </div>
  );
};

export default GrandPoloLayout;
