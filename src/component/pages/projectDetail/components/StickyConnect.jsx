import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Profile from "../../../../assets/icons/leader_sale.webp";
import { useParams } from "react-router-dom";
import { PopupModel } from "../../../model/PopupModel";
import { useProjectServices } from "../../../../services/projectServices";
import { URL } from "../../../../url/axios";
import { userTeamServices } from "../../../../services/teamServices";

export const StickyConnect = () => {
  const { slug } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getProjectById } = useProjectServices();
  const [ShowPopup, setShowPopup] = useState(false);
    const { getTeamPublicList } = userTeamServices();
    const [agent, setAgent] = useState(null);

   const fetchSalesAgent = async (projectSlug) => {
     try {
       const cacheKey = `selectedAgent-${projectSlug}`;
       const cachedAgent = localStorage.getItem(cacheKey);

       if (cachedAgent) {
         setAgent(JSON.parse(cachedAgent));
         console.log("Loaded cached agent for", projectSlug);
         return;
       }

       const res = await getTeamPublicList();

       if (res.success && Array.isArray(res.data)) {
         const salesTeam = res.data
           .filter((member) => member.department === "Sales")
           .sort((a, b) => a.sortKey - b.sortKey);

         const randomAgent =
           salesTeam[Math.floor(Math.random() * salesTeam.length)];

         setAgent(randomAgent);
         localStorage.setItem(cacheKey, JSON.stringify(randomAgent));
         console.log("Selected & cached new agent for", projectSlug);
       }
     } catch (err) {
       console.error("Failed to fetch sales agent", err);
     }
   };

  useEffect(() => {
    fetchProject();
     if (slug) {
       fetchSalesAgent(slug);
     }
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
    <div>
       {agent && (
              <div className="border border-[#ffffff] border-spacing-1 rounded-md p-3">
                <div className="flex text-center">
                  <img
                    className="h-[60px] w-[60px] sm:h-[95px] sm:w-[95px] border rounded bg-white object-cover"
                    src={agent.image ? `${URL}${agent.image}` : Profile}
                    alt={agent.name || "Top real estate agent"}
                    loading="lazy"
                  />
                  <div className="pl-2 text-left">
                    <h2 className="m-0 text-[#ffffff] text-[0.9rem] sm:text-[1rem] font-semibold">
                      {agent.name}
                    </h2>
                    <p className="text-[0.89rem]">{agent.position}</p>
                  </div>
                </div>
      
                <div className="flex items-center pt-3">
                  <a
                    href="tel:+971543049309"
                    className="site-sub-btn w-full mr-1 text-center"
                  >
                    Call
                  </a>
                  <button
                    onClick={() => setShowPopup(true)}
                    className="site-sub-btn w-full ml-1"
                  >
                    Inquiry
                  </button>
                </div>
                <div className="flex items-center justify-center mt-2">
                  <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
                    Or get availability via
                  </p>
                  <a
                    href={`https://wa.me/+971543049309?text=Hello,%20Share%20more%20details%20${projectData?.projectname}`}
                    className="flex items-center justify-center group"
                  >
                    <FaWhatsapp className="text-[#CE8745] ml-2 group-hover:text-[#6B9B2D] text-[1rem] lg:text-[1.3rem]" />
                    <p className="mb-0 text-[#CE8745] group-hover:text-[#6B9B2D] text-[0.8rem] lg:text-[1rem]">
                      WhatsApp
                    </p>
                  </a>
                </div>
              </div>
            )}
      <div className="rounded-full bg-[#fff] mt-3">
        <h4 className="text-[#000] m-auto w-fit font-semibold">
          Direct Sales & 0% Commission
        </h4>
      </div>
      <div className="border border-[#ffffff] border-spacing-1 rounded-md p-3 mt-3">
        <h6 className="text-[#ffffff] text-left text-[0.9rem] sm:text-[1.1rem] font-medium border-b-[#ffffff] border-b pb-2 mb-3">
          Quick Facts
        </h6>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">Project:</span>
          {projectData.projectname}
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">Developer:</span>
          {projectData.developer.replace(/-/g, " ")}
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">Location:</span>
          {projectData.locationname}
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">Bedroom:</span>
          {projectData.bedroom}
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">Type:</span>
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
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">
            Handover date:
          </span>
          {projectData.handover}
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">Total Area:</span>
          {projectData.totalarea}
        </p>
        <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
          <span className="text-[#ffffff] font-medium pr-2">
            Starting Price:
          </span>
          {projectData.startingprice}
        </p>
      </div>
      <div>
        {ShowPopup && <PopupModel onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default StickyConnect;
