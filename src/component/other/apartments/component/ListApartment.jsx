import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { URL } from "../../../../url/axios";
import DemoImage from "../../../../assets/icons/image_demo.webp";
import Slider from 'react-slick';
import useSliderLazyLoad from "../../../../hooks/useSliderLazyLoad";
import { useProjectServices } from '../../../../services/projectServices';
import PopupClick from './PopupClick';

export const ListApartment = (props) => {
  const { params } = props;
  const [searchedList, setSearchedList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Track form submission
  const { getProjectPublicList } = useProjectServices();
  const navigate = useNavigate();

  useEffect(() => {
    const tempList = projectList
      .filter((data) =>
        ["type", "type2", "type3", "type4", "type5", "type6"].some(
          (typeKey) => data[typeKey] === "apartment"
        )
      )
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    setSearchedList(tempList);
  }, [params, projectList]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getProjectPublicList();
      if (response.success) {
        const sortedProjects = response.data
          .filter((data) =>
            ["type", "type2", "type3", "type4", "type5", "type6"].some(
              (typeKey) => data[typeKey] === "apartment"
            )
          )
          .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setProjectList(sortedProjects);
        setSearchedList(sortedProjects);
      }
    } catch (err) {
      console.error("Failed to fatch project list", err);
    }
  };

  const handleCardClick = (data) => {
    if (!isFormSubmitted) {
      const thumbnailUrl = data?.thumbnail
        ? URL + encodeURIComponent(data.thumbnail)
        : DemoImage;
       setSelectedProject({ ...data, imageUrl: thumbnailUrl });
      setIsPopupVisible(true);
    }
  };

  const handlePopupSubmit = () => {
    if (selectedProject) {
      const slug = selectedProject.projectname
        .replace(/\s+/g, "-")
        .toLowerCase();
      setIsPopupVisible(false); // Hide the popup
      setIsFormSubmitted(true); // Mark form as submitted
      navigate(`/projects/${slug}`); // Navigate to the next page
    }
  };

  const thumbnailUrls = searchedList.map((data) => {
    return data?.thumbnail
      ? URL + encodeURIComponent(data.thumbnail)
      : DemoImage;
  });

  const [imageUrls, loadImages] = useSliderLazyLoad(thumbnailUrls, 3);

  var settings = {
    dots: true,
    infinite: true,
    speed: 290,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,

        settings: {
          slidesToShow: 2,

          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 640,

        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => {
      loadImages(newIndex); // Load images for new visible slides
    },
    afterChange: (current) => {
      loadImages(current); // Ensure images are loaded after slide change
    },
  };

  useEffect(() => {
    loadImages(0); // Load initial images for visible slides
  }, [searchedList]);

  //navigation
  const goToOffPlan = () => {
    navigate("/off-plan-project");
  };

  return (
    <div className="w-full bg-[#040406] flex items-center justify-center px-4 xl:px-0">
      <div className="featureProject container max-w-[1240px] py-5  px-4  md:py-9">
        <div className="flex flex-col  md:flex-row ">
          <div className="basis-4/5">
            <h2 className="m-0">Premium Dubai Apartments</h2>
            <h3 className="m-0 text-[#A4815C]">
              Dubai's Best Properties for Sale
            </h3>
          </div>
          <div className="basis-1/5">
            <Link
              to="/off-plan-project"
              className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem]"
            >
              View More
              <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
            </Link>
          </div>
        </div>
        <div>
          <Slider {...settings}>
            {searchedList.length > 0 ? (
              searchedList.slice(0, 10).map((data, index) => {
                const thumbnailUrl = imageUrls[index] || DemoImage;
                return (
                  <a
                    className="p-4"
                    key={data.projectname}
                    onClick={() => handleCardClick(data)}
                  >
                    <Link to={() => handleCardClick(data)}>
                      <div class="max-w-full overflow-hidden  border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer">
                        <div
                          role="img"
                          aria-label={data.projectname}
                          style={{
                            backgroundImage: `url(${thumbnailUrl})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            // minWidth: "380px",
                            height: "266px",
                            position: "relative",
                          }}
                        >
                          {data.runingstatus === "newlaunch" && (
                            <div className="card-status-tag text-[0.8rem] bg-[#FF0000] text-[#ffffff] rotate-[-40deg] w-fit px-9 absolute top-8 left-[-35px]">
                              <h6>New Launch</h6>
                            </div>
                          )}

                          {data.runingstatus === "soldout" && (
                            <div className="card-status-tag text-[0.8rem] bg-[#FF9900] text-[#000000] rotate-[-40deg] w-fit px-12 absolute top-8 left-[-35px]">
                              <h6>SOLD OUT</h6>
                            </div>
                          )}
                          <div className="bg-[#0000006b] backdrop-blur-sm border border-[#fff] rounded-full w-fit px-5 py-0 absolute top-2 right-2">
                            <h6 className="line-clamp-1 text-[#fff] text-[0.8rem]">
                              Under Construction
                            </h6>
                          </div>
                          {data.startingprice && (
                            <div className="bg-[#FFC700] border border-[#fff] rounded-l-full rounded-r-none w-fit px-5 py-0 absolute bottom-[-10px] right-0">
                              <h6 className="line-clamp-1">
                                Starting From: {data.startingprice}
                              </h6>
                            </div>
                          )}
                        </div>
                        <div class="p-5">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-white line-clamp-1">
                            {data.projectname}
                          </h5>
                          <p class="m-0 font-normal text-gray-400 line-clamp-1">
                            {data.developer.replace(/-/g, " ")}
                          </p>
                          {data?.locationname && (
                            <div className="flex items-center">
                              <MdLocationPin className="text-gray-400 text-[1rem]" />
                              <p class="m-0 font-normal text-gray-400 line-clamp-1">
                                {data.locationname}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  </a>
                );
              })
            ) : (
              <div className="bg-[#040406] text-center">
                <p className="m-auto loader !w-[24px] !h-[24px]"></p>
              </div>
            )}
          </Slider>
        </div>
      </div>
      <div>
        {isPopupVisible && (
          <PopupClick
            data={selectedProject}
            onClose={() => setIsPopupVisible(false)}
            onFormSubmit={handlePopupSubmit}
            imageUrl={selectedProject.imageUrl}
          />
        )}
      </div>
    </div>
  );
};

export default ListApartment