import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProjectConnect from "./ProjectConnect";
import StickyConnect from "./StickyConnect";
import { useProjectServices } from '../../../../services/projectServices';


export const SliderInfo = () => {
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
   <div className="pl-4 hidden lg:block">
        <ProjectConnect />
        {projectData.about && (
        <div id="content1">
            <div id="stickyDiv" className="sticky mt-4">
                <StickyConnect />
            </div>
        </div>
        )}
    </div>
  )
}

export default SliderInfo