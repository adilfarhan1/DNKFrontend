import React from "react";
import HeaderRoadshow from "./components/HeaderRoadshow";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const RodeshowLayout = () => {
  return (
    <div className="bg-[#eceff4]">
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>Dashboard</title>
        <meta name="description" content="Dashboard" />
      </Helmet>
        <HeaderRoadshow />
      <Outlet />
    </div>
  );
};

export default RodeshowLayout;
