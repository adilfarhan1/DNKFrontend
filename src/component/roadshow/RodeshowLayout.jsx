import React from "react";
import HeaderRoadshow from "./components/HeaderRoadshow";
import { Outlet } from "react-router-dom";

export const RodeshowLayout = () => {
  return (
    <div className="bg-[#eceff4]">
      <HeaderRoadshow />
      <Outlet />
    </div>
  );
};

export default RodeshowLayout;
