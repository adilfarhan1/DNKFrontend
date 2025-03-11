import React, { useEffect, useState } from 'react'
import { MdLocationPin } from "react-icons/md";
import { IoBedSharp } from "react-icons/io5";
import { MdAreaChart } from "react-icons/md";
import { AiOutlinePercentage } from "react-icons/ai";
import { BsCash } from "react-icons/bs";
import { PiCalendarCheckFill } from "react-icons/pi";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useProjectServices } from '../../../../services/projectServices';

export const TableDetail = () => {
  const { slug } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getProjectById } = useProjectServices();

    useEffect(() => {
      fetchProject();
    }, [slug]);
  
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
  
  return (
    <div className="mb-2">
      <div className="flex text-[#fff] text-[0.8rem] mb-1 md:text-[0.9rem]">
        <Link to="/" className="text-[#fff] hover:text-[#CE8745] pr-1">
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
            <MdLocationPin
              className="text-[#fff] text-[1rem]"
              aria-label="location"
            />
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
              <p className="m-0 font-normal text-[#979797] text-[0.8rem] text-right col-span-2 capitalize">
                {Object.keys(projectData)
                  .filter((key) => key.startsWith("type") && projectData[key]) // Filter keys that start with 'type'
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
                <MdAreaChart
                  className="text-[#fff] text-[0.9rem]"
                  aria-label="area chart"
                />
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
                <AiOutlinePercentage
                  className="text-[#fff] text-[0.9rem]"
                  aria-label="Down payment"
                />
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
                <BsCash
                  className="text-[#fff] text-[0.9rem]"
                  aria-label="Payment plan"
                />
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
                <PiCalendarCheckFill
                  className="text-[#fff] text-[0.9rem]"
                  aria-label="Handover"
                />
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
  );
}

export default TableDetail