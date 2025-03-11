import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProjectServices } from "../../../../services/projectServices";
import LocationComponent from "./LocationComponent";
import FeaturesSection from "./FeaturesSection";
import TableDetail from "./TableDetail";
import GallaySection from "./GallaySection";
import VideoComponent from "./VideoComponent";
import NearBySection from "./NearBySection";
import SliderInfo from "./SliderInfo";

export const DetailProject = () => {
  const { slug } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getProjectById } = useProjectServices();
  const [videoVisible, setVideoVisible] = useState(false);
  const [dataFetched, setDataFetched] = useState(false);

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
      console.error("Failed to fetch team details", err);
      setError("An error occurred while fetching team details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, [slug]);

  // Simulate fetching data
  useEffect(() => {
    setTimeout(() => {
      setDataFetched(true);
    }, 800); // Assuming data is fetched after 1 second
  }, []);

  useEffect(() => {
    if (dataFetched) {
      const timer = setTimeout(() => {
        setVideoVisible(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [dataFetched]);

  useEffect(() => {
    const handleScroll = () => {
      const stickyDiv = document.getElementById("stickyDiv");
      const content = document.getElementById("content1");

      if (content) {
        const contentHeight = content.offsetHeight;
        const scrollPosition = window.scrollY;

        if (scrollPosition > contentHeight / 1) {
          stickyDiv.classList.add("sticky-active");
        } else {
          stickyDiv.classList.remove("sticky-active");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="bg-[#040406] text-center">
        <p className="m-auto loader !w-[24px] !h-[24px]"></p>
      </div>
    ); // Loading indicator
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  const thumbnailUrl = `https://img.youtube.com/vi/${projectData.youtubeid}/maxresdefault.jpg`;
  const youtubeLink = `https://www.youtube.com/embed/${projectData?.youtubeid}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&loop=1&playlist=${projectData?.youtubeid}`;

  return (
    <div className=" w-full bg-[#040406] flex items-center justify-center">
      <div className="container max-w-[1240px] relative">
        <div className=" py-5  px-4  md:py-9 relative">
          <div className="grid  lg:grid-cols-3">
            <div className="col-span-2">
                <TableDetail />
              <div className="hidden sm:block">
                  <GallaySection />
                {videoVisible && (
                  <div className="mt-6">
                      <VideoComponent
                        youtubeLink={youtubeLink}
                        thumbnailUrl={thumbnailUrl}
                        projectData={projectData}
                      />
                  </div>
                )}
              </div>
              <FeaturesSection />
              <div className="block sm:hidden">
                  <GallaySection />
                {videoVisible && (
                  <div className="mt-6 mb-2">
                      <VideoComponent
                        youtubeLink={youtubeLink}
                        thumbnailUrl={thumbnailUrl}
                        projectData={projectData}
                      />
                  </div>
                )}
              </div>
              {projectData?.location && (
                <LocationComponent
                  projectData={projectData}
                  aria-label="location"
                />
              )}
                <NearBySection />
            </div>
            {/* side section */}
              <SliderInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProject;
