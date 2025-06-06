import React, { useEffect, useState } from "react";
import projectCover from "../../../../assets/icons/coverblack.webp";
import { TbPointFilled } from "react-icons/tb";
import { IoLogoWhatsapp } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useProjectServices } from "../../../../services/projectServices";
import { PopupModel } from "../../../model/PopupModel";
import { URL } from "../../../../url/axios";

export const ProjectBanner = () => {
  const { slug } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ShowPopup, setShowPopup] = useState(false);
  const { getProjectById } = useProjectServices();

  // Lazy-load hook for both cover image and logo

  // Memoize the fetch function to prevent unnecessary re-renders
  const fetchProject = async () => {
    try {
      const response = await getProjectById(slug);

      if (response.success) {
        const projectData = response.data;
        if (projectData) {
          setProjectData(projectData);
        } else {
          setError("No project found with the provided ID.");
        }
      } else {
        setError("Failed to fetch project details.");
      }
    } catch (err) {
      console.error("Failed to fetch project details", err);
      setError("An error occurred while fetching project details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-[#040406] text-center">
        <p className="m-auto loader !w-[24px] !h-[24px]"></p>
      </div>
    ); // Loading indicator
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div
      className="banner w-full bg-[#040406] flex items-center justify-center"
      role="img"
      aria-label={`${projectData.projectname || "Project"}, ${
        projectData.altcoverimage || "Banner image"
      }`}
      style={{
        backgroundImage: `url(${
          projectData?.coverimage ? URL + projectData.coverimage : projectCover
        })`,
      }}
    >
      <img
        src={
          URL +
          (projectData.coverimage
            ? projectData.coverimage
            : "default-image.webp")
        }
        alt={`${projectData.projectname || "Project"}, ${
          projectData.altcoverimage || "Banner image"
        }`}
        loading="eager"
        fetchPriority="high"
        style={{ display: "none" }}
      />
      <div className="container max-w-[1240px] px-4 flex items-center justify-start z-10">
        <div className="banner-content">
          <div className="grid  md:grid-cols-2">
            <div>
              {projectData?.projectlogo && (
                <div className="w-full h-[40px] md:h-[90px] relative py-1 flex justify-start items-center ">
                  <img
                    className={`h-full transition-opacity`}
                    src={URL + projectData.projectlogo}
                    alt={`${projectData.altprojectlogo || "Project Logo"}, ${
                      projectData.projectname || "Banner image Logo"
                    }`}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              )}
              <h1 className="banner-h1">{projectData?.bannertitile}</h1>
              <p className="mb-0">{projectData?.bannersubtitile}</p>
              {projectData.startingprice && (
                <div className="w-fit pb-4 flex items-center">
                  <div className="relative">
                    <TbPointFilled className="text-[1.6rem] text-[#fff] m-auto" />
                    <TbPointFilled className="text-[1.9rem] text-[#fff] animate-ping absolute top-[-2px] left-[-2.5px]" />
                  </div>

                  <h2 className="mb-0">Starting From: {projectData.startingprice}</h2>
                </div>
              )}
              <div className=" flex gap-3 mt-2">
                <button
                  onClick={() => setShowPopup(true)}
                  className="site-btn1 "
                >
                  Request callback
                </button>
                <a
                  href={`https://wa.me/+971543049309?text=Hello,%20Share%20more%20details%20${projectData.projectname}`}
                  className="site-btn1 items-center flex"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoWhatsapp
                    className="text-[1.4rem] m-auto"
                    aria-label="whats app"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#00000066] w-full h-full absolute left-0 top-0 z-0 sm:hidden"></div>
      <div>
        {ShowPopup && <PopupModel onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default ProjectBanner;
