import React, { useEffect, useState } from "react";
import { userTeamServices } from "../../../../services/teamServices";
import Slider from "react-slick";
import { URL } from "../../../../url/axios";
import userProfile from "../../../../assets/icons/userprofile.webp";
import { useNavigate } from "react-router-dom";

export const TeamListMain = (props) => {
  const { params } = props;
  const [searchedList, setSearchedList] = useState([]);
  const [teamList, setTeamList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getTeamPublicList } = userTeamServices();
  const navigate = useNavigate();

  useEffect(() => {
    let tempList = teamList;
    setSearchedList(tempList);
  }, [params, teamList]);

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
  const handleCardClick = (id) => {
    navigate(`/team-detail/${id}`);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    beforeChange: (current, next) =>
      console.log("before change", current, next),
    afterChange: (current) => console.log("after change", current),
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
  };
  return (
    <div>
      <Slider {...settings}>
        {searchedList.length > 0 ? (
          searchedList.map((data) => (
            <div
              className="p-4"
              key={data._id}
              onClick={() => handleCardClick(data._id)}
            >
              <div class="max-w-max bg-[#040406] cursor-pointer team-card">
                <img
                  class="rounded-t-lg w-[70%] xl:w-[100%] md:w-[90%] m-auto"
                  src={data.image ? URL + data.image : userProfile}
                  alt="team image"
                  loading="lazy"
                />
                <div class="text-center pt-1">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
                    {data.name}
                  </h5>
                  <p class="m-0 font-normal text-gray-400">{data.position}</p>
                  <p class="m-0 font-normal text-gray-400">{data.language}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center">
            <p className="text-center m-auto">No team created yet</p>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default TeamListMain;
