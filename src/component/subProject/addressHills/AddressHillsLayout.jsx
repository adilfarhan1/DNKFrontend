import React from "react";
import LHeader from "./componets/ADHeader";
import LFooter from "./componets/ADFooter";
import HomeLavioleta from "./HomeAddressHills";


export const AddressHillsLayout = () => {
  return (
    <div className="layout-body bg-[#000]">
      <LHeader />
      <HomeLavioleta />
      <LFooter />
    </div>
  );
};

export default AddressHillsLayout;
