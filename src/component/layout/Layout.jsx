import React from "react";
import { HeaderMain } from "../header/headerMain.jsx";
import BannerHome from "../pages/home/components/Banner.jsx";
import { Outlet, useLocation } from "react-router-dom";
import FooterSection from "../footer/FooterSection.jsx";
import HeaderProject from "../header/HeaderProject.jsx";

export const Layout = () => {
  const location = useLocation();

  const isProjectPage = location.pathname.startsWith("/projects");

  return (
    <div className="layout-body">
      {isProjectPage ? <HeaderProject /> : <HeaderMain />}
      <Outlet />
      <FooterSection />
    </div>
  );
};

export default Layout;
