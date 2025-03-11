import React, { useEffect, useState } from "react";
import { userTeamServices } from "../../../../services/teamServices";
import Slider from "react-slick";
import { URL } from "../../../../url/axios";
import userProfile from "../../../../assets/icons/userprofile.webp";
import { useNavigate } from "react-router-dom";
import LazyImage from "../../../layout/LazyImage";

export const TeamListMain = (props) => {
  const { params } = props;
  const [searchedList, setSearchedList] = useState([]);
  const [teamList, setTeamList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getTeamPublicList } = userTeamServices();
  const navigate = useNavigate();

 const getData = async () => {
   try {
     const response = await getTeamPublicList();
     const fetchedData = Array.isArray(response.data) ? response.data : [];

     // Shuffle using timestamp seed
     const shuffled = fetchedData
       .map((item) => ({ ...item, sortKey: Math.random() })) // Assign random sort key
       .sort((a, b) => a.sortKey - b.sortKey) // Sort by random key
       .slice(0, 10); // Pick first 10

     setSearchedList(shuffled);
   } catch (err) {
     console.error("Failed to load team data:", err);
   } finally {
     setLoading(false);
   }
 };

  useEffect(() => {
    getData();
  }, []);


  const thumbnailUrls = teamList.map((data) =>
    data?.image ? `${URL}/${data.image}` : userProfile
  );

  const handleCardClick = (id) => {
    navigate(`/team-detail/${id}`);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  if (loading) {
    return (
      <div className="bg-[#040406] text-center">
        <p className="m-auto loader !w-[24px] !h-[24px]"></p>
      </div>
    );
  }

  return (
    <div>
      <Slider {...settings}>
        {searchedList.length > 0 ? (
          searchedList.map((data, index) => {
            return (
              <div
                className="p-4"
                key={data._id}
                onClick={() => handleCardClick(data._id)}
              >
                <div className="max-w-max bg-[#040406] cursor-pointer team-card">
                  <LazyImage
                    className="rounded-t-lg w-[70%] xl:w-[100%] md:w-[90%] m-auto"
                    src={data?.image ? `${URL}/${data.image}` : userProfile}
                    alt={`${data.position}, 'Real estate, Dubai Real estate, real estate money, make money, millionaire'`}
                  />
                  <div className="text-center pt-1">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-white">
                      {data.name}
                    </h2>
                    <p className="m-0 font-normal text-gray-400">
                      {data.position}
                    </p>
                    <p className="m-0 font-normal text-gray-400">
                      {data.language}
                    </p>
                  </div>
                </div>
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

export default TeamListMain;
