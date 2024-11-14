import React, { useEffect, useState } from "react";
import userIcon from "../../../../assets/icons/usericon.webp";
import { URL } from "../../../../url/axios";
import { useNavigate } from "react-router-dom";
import { userTeamServices } from "../../../../services/teamServices";

export const TeamList = (props) => {
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

  return (
    <div className="w-full bg-[#040406] flex items-center justify-center">
      <div className="container max-w-[1240px] py-5  px-4  md:py-9  relative">
        <h1>Find your agent to find a Dream home</h1>
        <div className="grid grid-cols-2  md:grid-cols-4">
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
                    src={data.image ? URL + data.image : userIcon}
                    alt="team image"
                    loading="lazy"
                  />
                  <div class="text-center pt-1">
                    <h5 class="mb-2 text-[1rem] md:text-2xl font-bold tracking-tight text-white">
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
              <div>
                <h1 className="text-center m-auto text-[1.4rem]">
                  Team Data Upload Soon
                </h1>
                {/* <p className="text-center m-auto text-[#CE8745]">
                We have many amazing property for you.
              </p> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamList;
