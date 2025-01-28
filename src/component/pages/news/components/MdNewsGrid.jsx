import React, { useEffect, useState } from 'react'
import Newsimgic from "../../../../assets/icons/image_demo.webp";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPaginate from 'react-paginate';
import { userNewsServices } from '../../../../services/newsServices';
import { URL } from '../../../../url/axios';

export const MdNewsGrid = (props) => {
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

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = searchedList
    .filter(
      (data) => data.newsurl.toLowerCase().includes(searchTerm.toLowerCase()) // Filtering based on search term
    )
    .slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(searchedList.length / itemsPerPage);

  return (
    <div>
      <div className="block md:hidden">
        <div className="grid sm:grid-cols-2  md:grid-cols-3">
          {currentItems.length > 0 ? (
            currentItems.map((data) => (
              <div
                key={data.newsurl}
                onClick={() => handleCardClick(data.newsurl)}
              >
                <Link to={() => handleCardClick(data.newsurl)}>
                  <div className="p-3">
                    <div
                      role="img"
                      aria-label={data.alt}
                      style={{
                        backgroundImage: `url(${
                          data?.newsthumbnail
                            ? URL + encodeURIComponent(data.newsthumbnail)
                            : Newsimgic
                        })`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        height: "266px",
                        position: "relative",
                      }}
                    ></div>
                    <div>
                      <div className="flex flex-col justify-between h-full">
                        <h2 className="mb-2 text-[0.9rem] md:text-2xl font-semibold tracking-normal text-white line-clamp-2 pt-2">
                          {data.newstitle}
                        </h2>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: data?.newspara1,
                          }}
                          className="m-0 font-normal text-gray-400 line-clamp-4"
                        ></p>
                      </div>

                      <div className="flex gap-1">
                        <p class="m-0 font-normal text-gray-400 line-clamp-4 pt-3">
                          Published:
                        </p>
                        <p className="m-0 font-normal text-gray-400 line-clamp-4 pt-3">
                          {data.published}
                        </p>
                      </div>
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
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-5 pagination-block">
          <ReactPaginate
            className="flex text-[#fff]"
            previousLabel={<IoIosArrowBack className="text-[1.5rem]" />}
            nextLabel={<IoIosArrowForward className="text-[1.5rem]" />}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
            previousClassName={"previous-button"}
            nextClassName={"next-button"}
            disabledClassName={"disabled"}
          />
        </div>
      </div>
    </div>
  );
};

export default MdNewsGrid;