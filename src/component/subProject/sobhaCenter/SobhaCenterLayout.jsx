import React from "react";
import LHeader from "./componets/ADHeader";
import LFooter from "./componets/ADFooter";
import HomeSobhaCenter from "./HomeSobhaCenter";


export const SobhaCenterLayout = () => {
  return (
    <div className="layout-body bg-[#000]">
      <LHeader />
      <HomeSobhaCenter />
      <LFooter />
    </div>
  );
};

export default SobhaCenterLayout;
