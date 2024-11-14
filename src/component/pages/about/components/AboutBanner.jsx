import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import coverUser from "../../../../assets/icons/coveruser.webp";
import { userTeamServices } from "../../../../services/teamServices";
import { useNavigate } from "react-router-dom";
import { URL } from "../../../../url/axios";

export const AboutBanner = () => {
  const [searchedList, setSearchedList] = useState([]);
  const [teamList, setTeamList] = useState([]);
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const { getTeamPublicList } = userTeamServices();
  const navigate = useNavigate();

  useEffect(() => {
    let tempList = teamList;
    setSearchedList(tempList);
  }, [teamList]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getTeamPublicList();
      if (response.success) {
        setTeamList(response.data);
      }
    } catch (err) {
      console.error("Failed to fetch team list", err);
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

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,

        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 640,

        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="w-full relative bg-[#040406]">
      <div className="absolute bottom-8 left-0 z-30 w-full">
        <h1 className="w-full text-center m-0">Who we are</h1>
        <p className="w-full text-center mb-2 text-[#ffffff]">
          Get to Know Our Team
        </p>
      </div>
      <Slider {...settings}>
        {searchedList.length > 0 ? (
          searchedList.map((data) => (
            <div className="relative">
              <div className="bg-[#050612] opacity-60 w-full absolute top-0 left-0 h-full hover:bg-transparent ease-in-out duration-1000"></div>
              <img
                src={
                  data.sliderimg
                    ? `${URL}${encodeURIComponent(data.sliderimg)}`
                    : coverUser
                }
                alt="cover img"
                loading="lazy"
              />
            </div>
          ))
        ) : (
          <div className="bg-[#040406] text-center">
            <p className="m-auto loader !w-[24px] !h-[24px]"></p>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default AboutBanner;
