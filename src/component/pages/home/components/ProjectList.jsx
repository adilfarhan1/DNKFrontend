import React, { useEffect, useState } from "react";
import { MdLocationPin } from "react-icons/md";
import DemoImage from "../../../../assets/icons/image_demo.webp";
import Slider from "react-slick";
import { useProjectServices } from "../../../../services/projectServices";
import { URL } from "../../../../url/axios";
import { useNavigate } from "react-router-dom";
import useSliderLazyLoad from "../../../../hooks/useSliderLazyLoad";
import { Link } from "react-router-dom";

export const ProjectList = (props) => {
  const { params } = props;
  const [searchedList, setSearchedList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const [autoplay, setAutoplay] = useState(false);
  const { getProjectPublicList } = useProjectServices();
  const navigate = useNavigate();

  const statusValue = "off-plan";

  useEffect(() => {
    const tempList = projectList
      .filter((data) => data.status === statusValue)
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    setSearchedList(tempList);
  }, [params, projectList]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const delay = setTimeout(() => {
      setAutoplay(true);
    }, 3000); // Delay in milliseconds (3 seconds)

    return () => clearTimeout(delay);
  }, []);

  const getData = async () => {
    try {
      const response = await getProjectPublicList();
      if (response.success) {
        const sortedProjects = response.data
          .filter((data) => data.status === statusValue)
          .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setProjectList(sortedProjects);
        setSearchedList(sortedProjects);
      }
    } catch (err) {
      console.error("Failed to fatch project list", err);
    }
  };

  const handleCardClick = (projectname) => {
    const slug = projectname.replace(/\s+/g, "-").toLowerCase();
    navigate(`/projects/${slug}`);
  };

  const thumbnailUrls = searchedList.map((data) => {
    return data?.thumbnail
      ? URL + encodeURIComponent(data.thumbnail)
      : DemoImage;
  });

  const [imageUrls, loadImages] = useSliderLazyLoad(thumbnailUrls, 3);

  var settings = {
    dots: false,
    infinite: true,
    speed: 290,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: autoplay,
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

  return (
    <div>
      <Slider {...settings}>
        {searchedList.length > 0 ? (
          searchedList.slice(0, 10).map((data, index) => {
            const thumbnailUrl = imageUrls[index] || DemoImage;
            return (
              <div
                className="p-4"
                key={data.projectname}
                onClick={() => handleCardClick(data.projectname)}
              >
                <Link to={() => handleCardClick(data.projectname)}>
                  <div class="max-w-full overflow-hidden  border border-[#ffff] rounded-[10px] shadow bg-[#040406] cursor-pointer">
                    <div
                      role="img"
                      aria-label={`${data.projectname}, ${data.altthumbnail}, offplan, aprtments, Dubai, real estate`}
                      style={{
                        backgroundImage: `url(${thumbnailUrl})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "266px",
                        position: "relative",
                      }}
                    >
                      {data.runingstatus === "newlaunch" && (
                        <div className="card-status-tag  bg-[#B30000] text-[#ffffff] rotate-[-40deg] w-fit px-9 absolute top-8 left-[-35px]">
                          <h2 className="text-[0.8rem] font-normal m-0 px-1 py-1">
                            New Launch
                          </h2>
                        </div>
                      )}

                      {data.runingstatus === "soldout" && (
                        <div className="card-status-tag bg-[#FF9900] text-[#000000] rotate-[-40deg] w-fit px-12 absolute top-8 left-[-35px]">
                          <h2 className="text-[0.8rem] font-normal m-0 px-1 py-1">
                            SOLD OUT
                          </h2>
                        </div>
                      )}
                      <div className="bg-[#0000006b] backdrop-blur-sm border border-[#fff] rounded-full w-fit px-5 py-0 absolute top-2 right-2">
                        <h2 className="line-clamp-1 text-[#fff] text-[0.8rem] font-normal m-0 py-1">
                          Under Construction
                        </h2>
                      </div>
                      {data.startingprice && (
                        <div className="bg-[#FFC700] border border-[#fff] rounded-l-full rounded-r-none w-fit px-5 py-0 absolute bottom-[-10px] right-0">
                          <h2 className="line-clamp-1 text-[0.8rem] font-normal m-0 px-1 py-1 text-[#000]">
                            Starting From: {data.startingprice}
                          </h2>
                        </div>
                      )}
                    </div>
                    <div class="p-5">
                      <h2 class="mb-2 text-2xl font-bold tracking-tight text-white line-clamp-1">
                        {data.projectname}
                      </h2>
                      <p class="m-0 font-normal text-gray-400 line-clamp-1">
                        {data.developer.replace(/-/g, " ")}
                      </p>
                      {data?.locationname && (
                        <div className="flex items-center">
                          <MdLocationPin
                            className="text-gray-400 text-[1rem]"
                            aria-label="location"
                          />
                          <p class="m-0 font-normal text-gray-400 line-clamp-1">
                            {data.locationname}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="bg-[#040406] text-center">
            <p className="m-auto loader !w-[24px] !h-[24px]"></p>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default ProjectList;
