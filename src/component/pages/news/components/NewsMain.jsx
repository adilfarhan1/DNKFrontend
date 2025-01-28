import React, { useEffect, useState } from 'react'
import Newsimgic from "../../../../assets/icons/image.khaleejtimes.jpg"
import ProjectSide from './ProjectSide';
import NewsGrid from './NewsGrid';
import { useParams } from 'react-router-dom';
import { userNewsServices } from '../../../../services/newsServices';
import { URL } from '../../../../url/axios';
import MdNewsGrid from './MdNewsGrid';
import LazyImage from '../../../layout/LazyImage';

export const NewsMain = () => {
  const { newsurl } = useParams();
  const [newsData, setNewstData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getNewsById } = userNewsServices();

    useEffect(() => {
      fetchNews();
    }, [newsurl]);
  
  const fetchNews = async () => {
    try {
      const response = await getNewsById(newsurl);
      console.log("API Response:", response);

      if (response?.success) {
        if (response.data) {
          setNewstData(response.data);
          console.log("Fetched News Data:", response.data);
        } else {
          setError("News data not found for the provided newsurl.");
        }
      } else {
        setError(response?.message || "Failed to fetch news details.");
      }
    } catch (err) {
      console.error("Error fetching news details:", err);
      setError("An error occurred while fetching news details.");
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
    <div className="w-full bg-[#040406] flex items-center justify-center">
      <div className="container max-w-[1240px] py-5  px-4  md:py-9 relative">
        <div className="grid  md:grid-cols-3">
          <div className="md:col-span-2 newtext NewsBlock ">
            <div className="flex gap-1 pb-3">
              <p className="m-0 font-normal text-gray-400 line-clamp-4">
                Published:
              </p>
              <p className="m-0 font-normal text-gray-400 line-clamp-4">
                {newsData.published}
              </p>
            </div>
            <LazyImage
              className="max-w-full h-auto rounded-md"
              src={
                newsData.newsthumbnail
                  ? URL + newsData.newsthumbnail
                  : Newsimgic
              }
              alt={newsData.alt || 'Dubai Real Estate News'}
            />
            <p
              dangerouslySetInnerHTML={{
                __html: newsData?.newspara1,
              }}
              className="m-0 font-normal text-gray-400 text-justify pb-4 pt-1"
            ></p>
            <p
              dangerouslySetInnerHTML={{
                __html: newsData?.newspara2,
              }}
              className="m-0 font-normal text-gray-400 pb-4 text-justify"
            ></p>
            <p
              dangerouslySetInnerHTML={{
                __html: newsData?.newspara3,
              }}
              className="m-0 font-normal text-gray-400 pb-4 text-justify"
            ></p>
          </div>
          <div className="pl-4 hidden md:block">
            <h2 class="pb-2 text-[1rem] font-semibold tracking-tight text-white line-clamp-2 border border-x-0 border-t-0 border-b-[#fff]">
              Latest Projects in Dubai
            </h2>
            <ProjectSide />
            <h2 class="pb-2 text-[1rem] font-semibold tracking-tight text-white line-clamp-2 border border-x-0 border-t-0 border-b-[#fff]">
              Latest News
            </h2>
            <NewsGrid {...{ newsurl }} />
          </div>
        </div>
        <MdNewsGrid {...{ newsurl }} />
      </div>
    </div>
  );
}

export default NewsMain