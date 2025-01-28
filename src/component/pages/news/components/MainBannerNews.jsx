import React, { useEffect, useState } from 'react'
import bannerImgPlaceholder from "../../../../assets/banner-img/news_banner.webp";
import { Link, useParams } from 'react-router-dom';
import { userNewsServices } from '../../../../services/newsServices';
import { useLazyLoadBackground } from '../../../../hooks/useLazyLoadBackground';

export const MainBannerNews = () => {
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

  const [bannerRef, loadedBannerImg] = useLazyLoadBackground(
    newsData?.bannerImage || bannerImgPlaceholder
  );

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
    <div
      className="w-full bg-[#040406] flex items-center justify-center bg-cover bg-no-repeat "
      ref={bannerRef}
      aria-a
      aria-label={`${newsData.newstitle || "News"}`}
      style={{
        backgroundImage: loadedBannerImg
          ? `url(${loadedBannerImg})`
          : `url(${bannerImgPlaceholder})`,
      }}
    >
      <div className="container max-w-[1240px] px-4 flex items-center justify-start">
        <div className="py-[20px] md:py-[50px] text-center w-[100%]">
          <h1 className=" text-center">{newsData.newstitle}</h1>
          <div className="flex text-[#fff] text-[0.8rem] mb-1 md:text-[0.9rem] justify-center">
            <Link to="/" className="text-[#fff] hover:text-[#CE8745] pr-1">
              Home
            </Link>
            /
            <Link to="/News" className="text-[#fff] hover:text-[#CE8745] pr-1">
              News
            </Link>
            /
            <Link className="text-[#979797] hover:text-[#fff] pr-1 hidden md:block text-left pl-1">
              {newsData.newstitle}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBannerNews