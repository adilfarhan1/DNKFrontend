import React from "react";
import { RegisterList } from "./RegisterList";

export const RegisterRoadshow = () => {
  return (
    <div className="w-full flex items-start justify-center h-full">
      <div className="w-full">
        <div className="bg-[#ffffff] rounded-2xl py-10 px-3 sm:px-6 m-4 relative">
          <RegisterList />
        </div>
      </div>
    </div>
  );
};

export default RegisterRoadshow;
