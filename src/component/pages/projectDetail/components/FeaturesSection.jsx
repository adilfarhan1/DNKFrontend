import React, { useEffect, useState } from 'react'
import pool from "../../../../assets/icons/swimming_pool.webp";
import health from "../../../../assets/icons/rehabilitation.webp";
import Retailoutlet from "../../../../assets/icons/wholesaler.webp";
import gym from "../../../../assets/icons/weights.webp";
import park from "../../../../assets/icons/park.webp";
import restro from "../../../../assets/icons/restaurant.webp";
import { useParams } from 'react-router-dom';
import { useProjectServices } from '../../../../services/projectServices';

export const FeaturesSection = () => {
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
    <>
      {projectData.about && (
        <div>
          <h2 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold mb-4 mt-3">
            Features & amenities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
            <div className="text-[#ffffff] w-full flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
              <img
                className="w-[1.5rem] md:w-[1.8rem] h-auto"
                src={park}
                alt="Park icon"
                loading="lazy"
              ></img>
              <p className="text-[#ffffff] m-0">Kids Play Area</p>
            </div>
            <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
              <img
                className="w-[1.5rem] md:w-[1.8rem] h-auto"
                src={pool}
                loading="lazy"
                alt="Swimming pool"
              ></img>
              <p className="text-[#ffffff] m-0">Swimming pool</p>
            </div>
            <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
              <img
                className="w-[1.5rem] md:w-[1.8rem] h-auto"
                src={health}
                loading="lazy"
                alt={`Health Care Centre`}
              ></img>
              <p className="text-[#ffffff] m-0">Health Care Centre</p>
            </div>
            <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
              <img
                className="w-[1.5rem] md:w-[1.8rem] h-auto"
                src={gym}
                loading="lazy"
                alt={`Gymnasium`}
              ></img>
              <p className="text-[#ffffff] m-0">Gymnasium</p>
            </div>
            <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
              <img
                className="w-[1.5rem] md:w-[1.8rem] h-auto"
                src={Retailoutlet}
                loading="lazy"
                alt={`Retail Outlets`}
              ></img>
              <p className="text-[#ffffff] m-0">Retail Outlets</p>
            </div>
            <div className="text-[#ffffff] w-full mr-1 flex items-center justify-center gap-2 rounded-md border border-[#ffffff] p-2">
              <img
                className="w-[1.5rem] md:w-[1.8rem] backdrop-brightness-200 h-auto"
                src={restro}
                loading="lazy"
                alt={`Restaurants`}
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
    </>
  );
}

export default FeaturesSection