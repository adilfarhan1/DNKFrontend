import React, { useEffect, useState } from "react";
import { HeaderMain } from "../header/headerMain.jsx";
import { Outlet, useLocation } from "react-router-dom";
import FooterSection from "../footer/FooterSection.jsx";
import HeaderProject from "../header/HeaderProject.jsx";
import SplashScreen from "../splashScreen/SplashScreen.jsx";

export const Layout = () => {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  const isProjectPage = location.pathname.startsWith("/projects");

  return (
    <>
      {showSplash && <SplashScreen />}
      <div
        className="layout-body"
        style={{ visibility: showSplash ? "hidden" : "visible" }}
      >
        {isProjectPage ? <HeaderProject /> : <HeaderMain />}
        <Outlet />
        <FooterSection />
      </div>
    </>
  );
};

export default Layout;
