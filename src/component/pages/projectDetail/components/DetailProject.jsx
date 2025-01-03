import React, { useEffect, useState } from "react";
import LoadImg from "../../../../assets/icons/loadimg.webp";
import { IoClose } from "react-icons/io5";
import { IoMdHelpCircle } from "react-icons/io";
import { IoChevronForwardCircle } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { IoBedSharp } from "react-icons/io5";
import { MdAreaChart } from "react-icons/md";
import { AiOutlinePercentage } from "react-icons/ai";
import { BsCash } from "react-icons/bs";
import { PiCalendarCheckFill } from "react-icons/pi";
import { FaFeatherPointed } from "react-icons/fa6";
import ProjectConnect from "./ProjectConnect";
import pool from "../../../../assets/icons/swimming_pool.webp";
import health from "../../../../assets/icons/rehabilitation.webp";
import Retailoutlet from "../../../../assets/icons/wholesaler.webp";
import gym from "../../../../assets/icons/weights.webp";
import park from "../../../../assets/icons/park.webp";
import restro from "../../../../assets/icons/restaurant.webp";
import { useParams } from "react-router-dom";
import { URL } from "../../../../url/axios";
import { useProjectServices } from "../../../../services/projectServices";
import StickyConnect from "./StickyConnect";
import FeatureProject from "../../home/components/FeatureProject";
import ProjectList from "../../home/components/ProjectList";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useLazyLoadImage from "../../../../hooks/useLazyLoadImage ";

export const DetailProject = () => {
  const { slug } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [navR, setNavR] = useState(true);
  const { getProjectById } = useProjectServices();
  const [isVisible1, imgRef1] = useLazyLoadImage(projectData?.gallary1);
  const [isVisible2, imgRef2] = useLazyLoadImage(projectData?.gallary2);
  const [isVisible3, imgRef3] = useLazyLoadImage(projectData?.gallary3);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    fetchProject();
  }, [slug]);

  useEffect(() => {
    if (projectData?.youtubeid && !iframeLoaded) {
      const timer = setTimeout(() => {
        const iframe = document.getElementById("video-iframe");
        if (iframe) {
          iframe.src = youtubeLink;
          setIframeLoaded(true);
        }
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [projectData, iframeLoaded]);

   

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

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const thumbnailUrl = `https://img.youtube.com/vi/${projectData.youtubeid}/maxresdefault.jpg`;
  const youtubeLink = `https://www.youtube.com/embed/${projectData?.youtubeid}?autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&loop=1&playlist=${projectData?.youtubeid}`;

  //nav menu button
  const handleNavR = () => {
    setNavR(!navR);
  };

  // Function to open modal with the selected image
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className=" w-full bg-[#040406] flex items-center justify-center">
      <div className="container max-w-[1240px] relative">
        <div className=" py-5  px-4  md:py-9 relative">
          <div className="grid  lg:grid-cols-3">
            <div className="col-span-2">
              <div className="mb-2">
                <div className="flex text-[#fff] text-[0.8rem] mb-1 md:text-[0.9rem]">
                  <Link
                    to="/"
                    className="text-[#fff] hover:text-[#CE8745] pr-1"
                  >
                    Home
                  </Link>
                  /
                  <Link
                    to="/off-plan-project"
                    className="text-[#fff] hover:text-[#CE8745] pr-1"
                  >
                    Projects
                  </Link>
                  /
                  <Link
                    to={`/projects/${projectData.projectname}`}
                    className="text-[#979797] hover:text-[#CE8745] pr-1"
                  >
                    {projectData.projectname}
                  </Link>
                </div>
                <div className="flex justify-between">
                  {projectData?.runingstatus && (
                    <div className="flex">
                      <div className="bg-[#fff] px-3 py-[0.1rem] hidden md:block">
                        <p className="text-[#000] mb-0">Status</p>
                      </div>
                      <div className="px-3 py-[0.1rem] border border-[#fff]">
                        <p className="text-[#fff] mb-0 capitalize">
                          {projectData?.runingstatus === "newlaunch" && (
                            <span>New Launch</span>
                          )}
                          {projectData?.runingstatus === "soldout" && (
                            <span>Sold Out</span>
                          )}
                        </p>
                      </div>
                    </div>
                  )}

                  {projectData?.startingprice && (
                    <div className="flex">
                      <div className="bg-[#fff] px-3 py-[0.1rem]">
                        <p className="text-[#000] mb-0">Starting Price</p>
                      </div>
                      <div className="px-3 py-[0.1rem] border border-[#fff]">
                        <p className="text-[#fff] mb-0 capitalize">
                          {projectData?.startingprice}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="sm:flex justify-between mb-1">
                  <h2 className="m-0 font-normal text-[#fff] line-clamp-1 text-[1rem] my-1">
                    {projectData.projectname} By{" "}
                    {projectData.developer.replace(/-/g, " ")}
                  </h2>

                  {projectData?.locationname && (
                    <div className="flex items-center">
                      <MdLocationPin className="text-[#fff] text-[1rem]" />
                      <h2 className="m-0 font-normal text-[#fff] line-clamp-1 text-[1rem]">
                        {projectData.locationname}
                      </h2>
                    </div>
                  )}
                </div>
                <div>
                  <div className="grid md:grid-cols-2 ">
                    {projectData.type && (
                      <div className="grid grid-cols-3 p-2 border border-[#ffffff31]">
                        <p className="m-0 font-normal text-[#fff] text-[0.8rem]">
                          Property Type:
                        </p>
                        <p className="m-0 font-normal text-[#979797] text-[0.8rem] text-right col-span-2">
                          {Object.keys(projectData)
                            .filter(
                              (key) =>
                                key.startsWith("type") && projectData[key]
                            ) // Filter keys that start with 'type'
                            .map((key, index, array) => (
                              <React.Fragment key={index}>
                                {projectData[key]}
                                {array.length > 1 &&
                                  (index < array.length - 2
                                    ? ", "
                                    : index === array.length - 2
                                    ? " & "
                                    : "")}
                              </React.Fragment>
                            ))}
                        </p>
                      </div>
                    )}

                    {projectData.type && (
                      <div className="grid grid-cols-3 p-2 border border-[#ffffff31]">
                        <div className="flex">
                          <IoBedSharp className="text-[#fff] text-[0.9rem] " />
                          <p className="m-0 font-normal text-[#fff] text-[0.8rem] pl-1">
                            Bedroom:
                          </p>
                        </div>

                        <p className="m-0 font-normal text-[#979797] text-[0.8rem] text-right col-span-2">
                          {projectData.bedroom}
                        </p>
                      </div>
                    )}

                    {projectData.totalarea && (
                      <div className="grid grid-cols-2 p-2 border border-[#ffffff31] ">
                        <div className="flex">
                          <MdAreaChart className="text-[#fff] text-[0.9rem]" />
                          <p className="m-0 font-normal text-[#fff] text-[0.8rem]  pl-1">
                            Total Area:
                          </p>
                        </div>

                        <p className="m-0 font-normal text-[#979797] text-[0.8rem] text-right">
                          {projectData.totalarea}
                        </p>
                      </div>
                    )}
                    {projectData.downpayment && (
                      <div className="grid grid-cols-2 p-2 border border-[#ffffff31] ">
                        <div className="flex">
                          <AiOutlinePercentage className="text-[#fff] text-[0.9rem]" />
                          <p className="m-0 font-normal text-[#fff] text-[0.8rem]  pl-1">
                            Down Payment:
                          </p>
                        </div>

                        <p className="m-0 font-normal text-[#979797] text-[0.8rem] text-right">
                          {projectData.downpayment}
                        </p>
                      </div>
                    )}
                    {projectData.paymentplan && (
                      <div className="grid grid-cols-2 p-2 border border-[#ffffff31] ">
                        <div className="flex">
                          <BsCash className="text-[#fff] text-[0.9rem]" />
                          <p className="m-0 font-normal text-[#fff] text-[0.8rem]  pl-1">
                            Payment Plan:
                          </p>
                        </div>

                        <p className="m-0 font-normal text-[#979797] text-[0.8rem] text-right">
                          {projectData.paymentplan}
                        </p>
                      </div>
                    )}

                    {projectData.totalarea && (
                      <div className="grid grid-cols-2 p-2 border border-[#ffffff31] ">
                        <div className="flex">
                          <PiCalendarCheckFill className="text-[#fff] text-[0.9rem]" />
                          <p className="m-0 font-normal text-[#fff] text-[0.8rem]  pl-1">
                            Handover:
                          </p>
                        </div>

                        <p className="m-0 font-normal text-[#979797] text-[0.8rem] text-right">
                          {projectData.handover}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="border border-[#ffffff31] ">
                    <h2 className="text-[#fff] m-auto w-fit font-semibold md:text-[1.3rem] py-1">
                      Direct Sales & 0% Commission
                    </h2>
                  </div>
                </div>
              </div>
              <h2>{projectData?.mainhead}</h2>
              {projectData.about && <p>Personally Visited & Approved</p>}

              <div
                className="grid 
                    grid-cols-3 mb-3"
              >
                <div
                  className="col-span-2 mr-1 h-[170px] md:h-[285px] w-full"
                  ref={imgRef1}
                  onClick={() =>
                    handleImageClick(
                      projectData?.gallary1
                        ? URL + encodeURIComponent(projectData.gallary1)
                        : LoadImg
                    )
                  }
                  role="img"
                  aria-label={projectData.projectname}
                  style={{
                    backgroundImage: `url(${
                      isVisible1 && projectData?.gallary1
                        ? URL + encodeURIComponent(projectData.gallary1)
                        : LoadImg
                    })`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>

                <div className="ml-1">
                  <div
                    className=""
                    ref={imgRef2}
                    onClick={() =>
                      handleImageClick(
                        projectData?.gallary2
                          ? URL + encodeURIComponent(projectData.gallary2)
                          : LoadImg
                      )
                    }
                    role="img"
                    aria-label={projectData.projectname}
                    style={{
                      backgroundImage: `url(${
                        isVisible2 && projectData?.gallary2
                          ? URL + encodeURIComponent(projectData.gallary2)
                          : LoadImg
                      })`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "49.5%",
                    }}
                  ></div>
                  <div className="h-[1.5%] w-full"></div>
                  <div
                    className=""
                    ref={imgRef3}
                    onClick={() =>
                      handleImageClick(
                        projectData?.gallary3
                          ? URL + encodeURIComponent(projectData.gallary3)
                          : LoadImg
                      )
                    }
                    role="img"
                    aria-label={projectData.projectname}
                    style={{
                      backgroundImage: `url(${
                        isVisible3 && projectData?.gallary3
                          ? URL + encodeURIComponent(projectData.gallary3)
                          : LoadImg
                      })`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      width: "100%",
                      height: "49.5%",
                    }}
                  >
                    {/* <div className="white-cover flex">
                  <p className="m-auto text-[#000000] ">View More</p>
                </div> */}
                  </div>
                </div>
              </div>

              {projectData?.youtubeid && (
                <div className="video-container">
                  {isPlaying ? (
                    <iframe
                      width="100%"
                      height="315"
                      src={youtubeLink}
                      style={{ border: "none" }}
                      allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <div
                      style={{ cursor: "pointer", position: "relative" }}
                      onClick={handlePlay}
                    >
                      <img
                        src={thumbnailUrl}
                        alt="YouTube Video Thumbnail"
                        style={{ width: "100%" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          backgroundColor: "rgba(0, 0, 0, 0.6)",
                          borderRadius: "50%",
                          padding: "20px",
                        }}
                      >
                        <svg
                          width="60"
                          height="60"
                          viewBox="0 0 24 24"
                          fill="white"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {projectData.about && (
                <div>
                  <h2 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold mb-4">
                    Features & amenities
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    <div className="text-[#ffffff] w-full flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
                      <img
                        className="w-[1.5rem] md:w-[1.8rem]"
                        src={park}
                        loading="lazy"
                      ></img>
                      <p className="text-[#ffffff] m-0">Kids Play Area</p>
                    </div>
                    <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
                      <img
                        className="w-[1.5rem] md:w-[1.8rem]"
                        src={pool}
                        loading="lazy"
                      ></img>
                      <p className="text-[#ffffff] m-0">Swimming pool</p>
                    </div>
                    <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
                      <img
                        className="w-[1.5rem] md:w-[1.8rem]"
                        src={health}
                        loading="lazy"
                      ></img>
                      <p className="text-[#ffffff] m-0">Health Care Centre</p>
                    </div>
                    <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
                      <img
                        className="w-[1.5rem] md:w-[1.8rem]"
                        src={gym}
                        loading="lazy"
                      ></img>
                      <p className="text-[#ffffff] m-0">Gymnasium</p>
                    </div>
                    <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
                      <img
                        className="w-[1.5rem] md:w-[1.8rem]"
                        src={Retailoutlet}
                        loading="lazy"
                      ></img>
                      <p className="text-[#ffffff] m-0">Retail Outlets</p>
                    </div>
                    <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
                      <img
                        className="w-[1.5rem] md:w-[1.8rem] backdrop-brightness-200"
                        src={restro}
                        loading="lazy"
                      ></img>
                      <p className="text-[#ffffff] m-0">Restaurants</p>
                    </div>
                  </div>

                  <h2 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold mb-4">
                    Life style at {projectData?.projectname}
                  </h2>
                  <p
                    className="text-justify"
                    dangerouslySetInnerHTML={{ __html: projectData?.about }}
                  ></p>
                  <p
                    className="text-justify"
                    dangerouslySetInnerHTML={{ __html: projectData?.about1 }}
                  ></p>
                  <p
                    className="text-justify"
                    dangerouslySetInnerHTML={{ __html: projectData?.about2 }}
                  ></p>
                  <h2 className="text-[#ffffff] text-left text-[1rem] sm:text-[1rem] font-semibold mb-2">
                    {projectData?.pointhead}
                  </h2>
                  <ul className="list-disc list-outside pl-4 text-[#fff]">
                    {projectData?.point1 && (
                      <li className="text-[#979797]  text-[0.9rem] sm:text-[1rem]">
                        {projectData.point1}
                      </li>
                    )}
                    {projectData?.point2 && (
                      <li className="text-[#979797]  text-[0.9rem] sm:text-[1rem]">
                        {projectData.point2}
                      </li>
                    )}
                    {projectData?.point3 && (
                      <li className="text-[#979797] text-[0.9rem] sm:text-[1rem]">
                        {projectData.point3}
                      </li>
                    )}
                    {projectData?.point4 && (
                      <li className="text-[#979797] text-[0.9rem] sm:text-[1rem]">
                        {projectData.point4}
                      </li>
                    )}
                    {projectData?.point5 && (
                      <li className="text-[#979797] text-[0.9rem] sm:text-[1rem]">
                        {projectData.point5}
                      </li>
                    )}
                    {projectData?.point6 && (
                      <li className="text-[#979797] text-[0.9rem] sm:text-[1rem]">
                        {projectData.point6}
                      </li>
                    )}
                    {projectData?.point7 && (
                      <li className="text-[#979797] text-[0.9rem] sm:text-[1rem]">
                        {projectData.point7}
                      </li>
                    )}
                    {projectData?.point8 && (
                      <li className="text-[#979797] text-[0.9rem] sm:text-[1rem]">
                        {projectData.point8}
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {projectData?.location && (
                <iframe
                  class="map mb-3 mt-2"
                  src={projectData?.location}
                ></iframe>
              )}
              <div className="grid md:grid-cols-2">
                <div>
                  <h3 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold">
                    {projectData?.nearby1}
                  </h3>
                  <p>{projectData?.dec1}</p>
                </div>
                <div>
                  <h3 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold">
                    {projectData?.nearby2}
                  </h3>
                  <p>{projectData?.dec2}</p>
                </div>
                <div>
                  <h3 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold">
                    {projectData?.nearby3}
                  </h3>
                  <p>{projectData?.dec3}</p>
                </div>
                <div>
                  <h3 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold">
                    {projectData?.nearby4}
                  </h3>
                  <p>{projectData?.dec4}</p>
                </div>
              </div>
            </div>

            {/* side section */}
            <div className="pl-4 hidden lg:block">
              <div>
                <ProjectConnect />
              </div>
              {projectData.about && (
                <div id="content1">
                  <div id="stickyDiv" className="sticky mt-4">
                    <StickyConnect />
                  </div>
                </div>
              )}
            </div>
          </div>

          <h3 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold mb-4">
            Explore other projects across Dubai
          </h3>
          <div className="px-4 xl:px-0">
            <ProjectList />
          </div>
        </div>
      </div>

      {/* slidebar */}
      <div
        className="fixed right-[-17px] top-[15rem] bg-[#CE8745] rounded-bl-2xl rounded-tl-2xl  lg:hidden z-30 bounce-left"
        onClick={handleNavR}
      >
        {!navR ? (
          <IoChevronForwardCircle className="text-[#ffffff] text-[2rem]  mr-7" />
        ) : (
          <IoMdHelpCircle className="text-[#ffffff] text-[2rem] mr-7" />
        )}
      </div>

      <div
        className={
          !navR
            ? "fixed right-0 top-[50px] w-[85%] bg-[#040406] h-full ease-in-out duration-500 slide-bar"
            : "fixed right-[-100%] slide-bar top-15 h-full"
        }
      >
        <div className="p-4">
          <div
            className="absolute left-[-44px] top-[10rem] bg-[#CE8745] rounded-bl-2xl rounded-tl-2xl"
            onClick={handleNavR}
          >
            <IoChevronForwardCircle className="text-[#ffffff] text-[2rem]  mr-3" />
          </div>
          <ProjectConnect />
        </div>
      </div>

      {/* Modal for fullscreen image */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-screen max-h-screen object-contain"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 bg-white text-black p-2 rounded-full shadow-lg"
            >
              <IoClose className="text-[1.2rem] text-[#000]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailProject;
