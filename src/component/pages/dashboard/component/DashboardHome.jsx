import React, { useState } from "react";
import ViewList from "./ViewList";

export const DashboardHome = () => {
  const [params, setParams] = useState("allProject");
  return (
    <div className="p-3">
      <div className="dashboardHome flex items-center gap-3 justify-start">
        <button
          onClick={() => setParams("allProject")}
          className={`${
            params == "allProject" && "active"
          } site-sub-btn text-left bg-[#1C1D22] w-full !border-[#1C1D22]`}
        >
          All Project
        </button>
        <button
          onClick={() => setParams("off-plan")}
          className={`${
            params == "off-plan" && "active"
          } site-sub-btn text-left bg-[#1C1D22] w-full !border-[#1C1D22]`}
        >
          Off-Plan
        </button>
        <button
          onClick={() => setParams("buy")}
          className={`${
            params == "buy" && "active"
          } site-sub-btn text-left bg-[#1C1D22] w-full !border-[#1C1D22]`}
        >
          Buy
        </button>
        {/* <button
          onClick={() => setParams("sell")}
          className={`${
            params == "sell" && "active"
          } site-sub-btn text-left bg-[#1C1D22] w-full !border-[#1C1D22]`}
        >
          Sell
        </button> */}
        <button
          onClick={() => setParams("rent")}
          className={`${
            params == "rent" && "active"
          } site-sub-btn text-left bg-[#1C1D22] w-full !border-[#1C1D22]`}
        >
          Rent
        </button>
      </div>
      {/* {location.pathname == '/dashboard/'} */}
      <ViewList {...{ params }} />
    </div>
  );
};

export default DashboardHome;
