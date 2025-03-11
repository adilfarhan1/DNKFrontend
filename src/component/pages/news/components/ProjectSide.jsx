import React, { useEffect, useState } from "react";
import DemoImage from "../../../../assets/icons/image_demo.webp";
import { MdLocationPin } from "react-icons/md";
import { useProjectServices } from "../../../../services/projectServices";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../../../../url/axios";

export const ProjectSide = (props) => {
  const { params } = props;
  const [searchedList, setSearchedList] = useState([]);
  const [projectList, setProjectList] = useState([]);
  const { getProjectPublicList } = useProjectServices();
  const navigate = useNavigate();

  const statusValue = "off-plan";

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

  useEffect(() => {
    const tempList = projectList
      .filter((data) => data.status === statusValue)
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    setSearchedList(tempList);
  }, [params, projectList]);

  useEffect(() => {
    getData();
  }, []);

  const handleCardClick = (projectname) => {
    const slug = projectname.replace(/\s+/g, "-").toLowerCase();
    navigate(`/projects/${slug}`);
  };

  return (
    <>
      {searchedList.length > 0 ? (
        searchedList.slice(0, 10).map((data, index) => {
          return (
            <div
              key={data.projectname}
              onClick={() => handleCardClick(data.projectname)}
            >
              <Link to={() => handleCardClick(data.projectname)}>
                <div className="md:grid grid-cols-4 overflow-hidden flex  border border-[#ffff] rounded-md shadow bg-[#040406] cursor-pointer mb-4">
                  <div
                    className=" w-[100px] col-span-1"
                    role="img"
                    aria-label={`${data.altthumbnail}, ${data.projectname}`}
                    style={{
                      backgroundImage: `url(${
                        data?.thumbnail
                          ? URL + encodeURIComponent(data.thumbnail)
                          : DemoImage
                      })`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      position: "relative",
                    }}
                  ></div>
                  <div className="px-3 py-1 col-span-3">
                    <h2 class="mb-0 text-[1rem] font-semibold tracking-tight text-white line-clamp-1">
                      {data.projectname}
                    </h2>
                    <p class="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                      {data.developer.replace(/-/g, " ")}
                    </p>
                    {data?.locationname && (
                      <div className="flex items-center">
                        <MdLocationPin className="text-gray-400 text-[0.8rem]" />
                        <p class="m-0 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
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
    </>
  );
};

export default ProjectSide;
