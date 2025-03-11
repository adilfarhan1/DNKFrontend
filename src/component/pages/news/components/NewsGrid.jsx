import React, { useEffect, useState } from "react";
import Newsimgic from "../../../../assets/icons/image_demo.webp";
import { Link, useNavigate } from "react-router-dom";
import { MdDateRange } from "react-icons/md";
import { userNewsServices } from "../../../../services/newsServices";
import { URL } from "../../../../url/axios";

export const NewsGrid = (props) => {
  const { params, newsurl } = props;
  const [newsList, setNewsList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(30);
  const { getNews } = userNewsServices();
  const navigate = useNavigate();

  useEffect(() => {
    const tempList = newsList
      .filter(
        (data) =>
          data.status === params &&
          data.newsurl.replace(/\s+/g, "-").toLowerCase() !== newsurl
      )
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    setSearchedList(tempList);
  }, [params, newsList, newsurl]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getNews();
      if (response.success) {
        const sortedNews = response.data
          .filter(
            (data) =>
              data.status === params &&
              data.newsurl.replace(/\s+/g, "-").toLowerCase() !== newsurl
          )
          .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
        setNewsList(response.data);
        setSearchedList(sortedNews);
      }
    } catch (err) {
      console.error("Failed to fatch news list", err);
    }
  };

  const handleCardClick = (newsurl) => {
    const slug = newsurl.replace(/\s+/g, "-").toLowerCase();
    navigate(`/news/${slug}`);
  };

  return (
    <div>
      <div className="hidden md:block">
        {searchedList.length > 0 ? (
          searchedList.slice(0, 10).map((data) => (
            <div
              key={data.newsurl}
              onClick={() => handleCardClick(data.newsurl)}
            >
              <Link to={() => handleCardClick(data.newsurl)}>
                <div className="md:grid grid-cols-4 overflow-hidden flex  border border-[#ffff] rounded-md shadow bg-[#040406] cursor-pointer mb-4">
                  <div
                    className="w-[100px] col-span-1"
                    role="img"
                    aria-label={data.alt || "News"}
                    style={{
                      backgroundImage: `url(${
                        data?.newsthumbnail
                          ? URL + encodeURIComponent(data.newsthumbnail)
                          : Newsimgic
                      })`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      position: "relative",
                    }}
                  ></div>
                  <div className="px-3 py-1 col-span-3">
                    <h2 class="mb-0 text-[1rem] font-semibold tracking-tight text-white line-clamp-1">
                      {data.newstitle}
                    </h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data?.newspara1,
                      }}
                      class="m-0 font-normal text-gray-400 line-clamp-3 text-[0.8rem]"
                    ></p>
                    {data?.published && (
                      <div className="flex items-center">
                        <MdDateRange className="text-gray-400 text-[0.8rem]" />
                        <p class="m-0 pl-1 font-normal text-gray-400 line-clamp-1 text-[0.8rem]">
                          {data.published}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="flex justify-center">
            <div className="bg-[#040406] text-center">
              <p className="m-auto loader !w-[24px] !h-[24px]"></p>
            </div>
          </div>
        )}
        <Link
          to="/news"
          className="rounded-sm px-[6rem] py-2 w-full text-[#000] hover:text-[#000] bg-[#CFA028] hover:bg-[#fff]"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default NewsGrid;
