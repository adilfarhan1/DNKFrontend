import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useProjectServices } from '../../../../services/projectServices';

export const NearBySection = () => {
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
    <div className="grid md:grid-cols-2">
        <div>
            <h3 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold">
            {projectData?.nearby1}
            </h3>
            <p>{projectData?.dec1}</p>
        </div>
        <div>
            <h3 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold">
            {projectData?.nearby2}
            </h3>
            <p>{projectData?.dec2}</p>
        </div>
        <div>
            <h3 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold">
            {projectData?.nearby3}
            </h3>
            <p>{projectData?.dec3}</p>
        </div>
        <div>
            <h3 className="text-[#ffffff] text-left text-[1rem] sm:text-[1.4rem] font-semibold">
            {projectData?.nearby4}
            </h3>
            <p>{projectData?.dec4}</p>
        </div>
    </div>
  )
}

export default NearBySection