import React from "react";
import dnkLogo from "../../../assets/logo/dnklogo_1.webp";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { userUserServices } from "../../../services/userServices";
import Swal from "sweetalert2";

export const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logoutUser } = userUserServices();

  const handleLogout = async () => {
    await logoutUser();
    localStorage.removeItem("login");
    Swal.fire("Success", "Logged Out", "success");
    navigate("/admin");
  };
  return (
    <div>
      <div className="bg-[#040406] flex  items-center justify-between h-15  ">
        <div className="left-block flex container justify-start max-w-[1240px] mx-auto px-4">
          <img
            src={dnkLogo}
            alt="DNK Logo"
            className="site-logo h-[60px] md:h-[70px] py-2"
          />
        </div>
        <button
          onClick={handleLogout}
          className="bg-[#fff] w-fit p-2 rounded-full mr-3"
        >
          <RiLogoutCircleRLine className="text-[#000] text-[1rem]" />
        </button>
      </div>
      <div className="flex sideBarDashboard">
        <div
          className="bg-[#1C1D22] sticky"
          style={{ height: "100vh", width: "40%" }}
        >
          <div className="sidebar block">
            <button
              onClick={() => navigate("/dashboard")}
              className={`${
                location.pathname == "/dashboard" && "active"
              } site-sub-btn text-left bg-[#0F2C45] w-full !border-[#1C1D22]`}
            >
              Dashboard
            </button>
            <button
              onClick={() => navigate("/dashboard/team")}
              className={`${
                location.pathname == "/dashboard/team" && "active"
              } site-sub-btn text-left bg-[#0F2C45] w-full !border-[#1C1D22]`}
            >
              All Team
            </button>
            <button
              onClick={() => navigate("/dashboard/addProject")}
              className={`${
                location.pathname == "/dashboard/addProject" && "active"
              } site-sub-btn text-left bg-[#0F2C45] w-full !border-[#1C1D22]`}
            >
              Add Project
            </button>
            <button
              onClick={() => navigate("/dashboard/addTeam")}
              className={`${
                location.pathname == "/dashboard/addTeam" && "active"
              } site-sub-btn text-left bg-[#0F2C45] w-full !border-[#1C1D22]`}
            >
              Add Team
            </button>
            <button
              onClick={() => navigate("/dashboard/ad")}
              className={`${
                location.pathname == "/dashboard/ad" && "active"
              } site-sub-btn text-left bg-[#0F2C45] w-full !border-[#1C1D22]`}
            >
              Add Ad
            </button>
            <button
              onClick={() => navigate("/dashboard/review")}
              className={`${
                location.pathname == "/dashboard/review" && "active"
              } site-sub-btn text-left bg-[#0F2C45] w-full !border-[#1C1D22]`}
            >
              Add Review
            </button>
            <button
              onClick={() => navigate("/dashboard/partner")}
              className={`${
                location.pathname == "/dashboard/partner" && "active"
              } site-sub-btn text-left bg-[#0F2C45] w-full !border-[#1C1D22]`}
            >
              Add Partner
            </button>
            <button
              onClick={() => navigate("/dashboard/home-banner")}
              className={`${
                location.pathname == "/dashboard/home-banner" && "active"
              } site-sub-btn text-left bg-[#0F2C45] w-full !border-[#1C1D22]`}
            >
              Change Home Banner
            </button>

            <button
              onClick={() => navigate("/dashboard/special-day")}
              className={`${
                location.pathname == "/dashboard/special-day" && "active"
              } site-sub-btn text-left bg-[#0F2C45] w-full !border-[#1C1D22]`}
            >
              Special Day Wish
            </button>
            <button
              onClick={() => navigate("/dashboard/special-day-logo")}
              className={`${
                location.pathname == "/dashboard/special-day-logo" && "active"
              } site-sub-btn text-left bg-[#0F2C45] w-full !border-[#1C1D22]`}
            >
              Update Special Day Logo
            </button>
          </div>
        </div>
        <div className="container justify-start max-w-[1240px] mx-auto px-4 bg-white">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
