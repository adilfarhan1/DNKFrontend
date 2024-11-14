import React, { useEffect, useState } from "react";
import { useProjectServices } from "../../../../services/projectServices";
import { URL } from "../../../../url/axios";
import { useNavigate } from "react-router-dom";
import DemoImage from "../../../../assets/icons/image_demo.webp";

export const ProjectGridList = (props) => {
  const { params } = props;
  const [projectList, setProjectList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const { getProjectPublicList } = useProjectServices();
  const navigate = useNavigate();

  const statusValue = "sell";

  useEffect(() => {
    const tempList = projectList.filter((data) => data.status === statusValue);
    setSearchedList(tempList);
  }, [params, projectList]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getProjectPublicList();
      if (response.success) {
        setProjectList(response.data);
        setSearchedList(
          response.data.filter((data) => data.status === statusValue)
        );
      }
    } catch (err) {
      console.error("Failed to fatch project list", err);
    }
  };
  console.log(getData);

  const handleCardClick = (id) => {
    navigate(`/project-detail/${id}`);
  };

  return (
    <div className="about-section w-full bg-[#040406] flex items-center justify-center">
      <div className="container max-w-[1240px] py-5  px-4  md:py-9 relative">
        <h1 className="m-auto w-fit">Our Work Principles</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 pt-[3rem]">
          {/* Preparation */}
          <div class=" xl:max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] group m-1 xl:m-4 p-4 ">
            <div class="relative">
              <div className="py-4">
                <h5 class="mb-2 tracking-tight text-white m-auto w-fit">
                  Preparation
                </h5>
                <div className="relative">
                  <p class="m-0 font-normal text-gray-400 text-center">
                    We meet either online or in our Dubai office, evaluate the
                    property, and conclude an agreement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Promotion */}
          <div class=" xl:max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] group m-1 xl:m-4 p-4 ">
            <div class="relative">
              <div className="py-4">
                <h5 class="mb-2 tracking-tight text-white m-auto w-fit">
                  Promotion
                </h5>
                <div className="relative">
                  <p class="m-0 font-normal text-gray-400 text-center">
                    We capture photos and videos, launch contextual advertising
                    and personalized email newsletters, and publish
                    advertisements on public platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Agreement */}
          <div class=" xl:max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] group m-1 xl:m-4 p-4 ">
            <div class="relative">
              <div className="py-4">
                <h5 class="mb-2 tracking-tight text-white m-auto w-fit">
                  Agreement
                </h5>
                <div className="relative">
                  <p class="m-0 font-normal text-gray-400 text-center">
                    We find a buyer and prepare documents, including the
                    purchase and sale agreement, while resolving tax and
                    registration issues.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Agreement */}
          <div class=" xl:max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] group m-1 xl:m-4 p-4 ">
            <div class="relative">
              <div className="py-4">
                <h5 class="mb-2 tracking-tight text-white m-auto w-fit">
                  Payment
                </h5>
                <div className="relative">
                  <p class="m-0 font-normal text-gray-400 text-center">
                    Upon the successful completion of the transaction, you will
                    receive the payment with the agency commission deducted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGridList;
