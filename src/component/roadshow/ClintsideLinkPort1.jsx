import React, { useEffect, useState } from "react";
import FormRoadshow from "./components/FormRoadshow";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { userRoadshowServices } from "../../services/roadshowService";

export const ClintsideLinkPort1 = () => {
  const { slug } = useParams();
   const [RoadshowLink, setRoadshowLinkData] = useState(null);

  const { getRoadshowLinkById } = userRoadshowServices();

  const fetchRoadshowLinkData = async () => {
    try {
      const response = await getRoadshowLinkById(slug);
      if (response.success) {
        const RoadshowLink = response.data;
        if (RoadshowLink) {
          setRoadshowLinkData(RoadshowLink);
        }
      }
    } catch (error) {
      console.error("Error fetching roadshow link data:", error);
    }
  };

  useEffect(() => {
    fetchRoadshowLinkData();
  }, [slug]);

  if (!RoadshowLink) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  return (
    <div>
      <Helmet>
        <meta name="robots" content="noindex" />
        <title>{`Client Registration ${RoadshowLink.place}`}</title>
        <meta name="description" content="Attendance" />
      </Helmet>
      <div className="about-section w-full bg-[#040406] flex items-center justify-center">
        <div className="container max-w-[1240px] py-5  sm:px-4  md:py-9 relative">
          <div className="w-[100%] md:w-[70%] sm:w-[90%] m-auto">
            {/* <img src={Logo} alt="logo" className="m-auto w-[20%]" /> */}
            <div className="bg-gray-700 rounded-2xl py-10 px-3 sm:px-6 m-4 relative">
              <div>
                <h3 className="text-[#ffffff] text-[1.5rem] font-semibold mb-4 m-auto text-center">
                  {`Registration Form - ${RoadshowLink.place}`}
                </h3>
                <FormRoadshow />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClintsideLinkPort1;
