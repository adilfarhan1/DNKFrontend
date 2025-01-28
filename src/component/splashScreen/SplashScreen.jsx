import React, { useEffect, useState } from "react";
import DNKLogo from "../../assets/logo/dnklogo_1.webp"; // Rename the imported logo

export const SplashScreen = ({ onAnimationEnd }) => {
    
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onAnimationEnd) onAnimationEnd(); // Notify parent when animation ends
    }, 2500); // Match the animation duration (2s)

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="splash-screen flex justify-center items-center w-full h-[100vh] bg-[#000]">
      <img
        src={DNKLogo}
        alt="DNK Logo"
        className="h-[2px] md:h-[80px] logo-animation mb-6 md:mb-0"
      />
    </div>
  );
};

export default SplashScreen;
