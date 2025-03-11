import React, { useEffect, useState } from "react";
import BannerNews from "./components/BannerNews";
import Newsimgic from "../../../assets/icons/image_demo.webp";
import { Link, useNavigate } from "react-router-dom";
import { userNewsServices } from "../../../services/newsServices";
import { URL } from "../../../url/axios";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReactPaginate from "react-paginate";
import { Helmet } from "react-helmet";

export const News = (props) => {
  const { params, newsurl } = props;
  const [newsList, setNewsList] = useState([]);
  const [searchedList, setSearchedList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(30);
  const [filterType, setFilterType] = useState("All");
  const { getNews } = userNewsServices();
  const navigate = useNavigate();

  useEffect(() => {
    const filteredList =
      filterType === "All"
        ? newsList
        : newsList.filter((item) => item.type === filterType);
    const sortedList = filteredList.sort(
      (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
    );
    setSearchedList(sortedList);
  }, [newsList, filterType]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getNews();
      if (response.success) {
        const sortedNews = response.data.sort(
          (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
        );
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

  const handleFilterClick = (type) => {
    setFilterType(type);
    setCurrentPage(0);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = searchedList
    .filter(
      (data) => data.newsurl.toLowerCase().includes(searchTerm.toLowerCase()) // Filtering based on search term
    )
    .slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(searchedList.length / itemsPerPage);

  return (
    <>
      <Helmet>
        <title>News</title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link rel="canonical" href={`https://www.dnkre.com/news/`} />
        <meta name="author" content="DNK Real Estate" />

        {/* Ensure the page is indexable */}
        <meta name="robots" content="index, follow" />

        <meta property="og:url" content={`https://www.dnkre.com/news/`} />
        <meta property="og:type" content="https://www.dnkre.com/" />
        <meta property="og:title" content="News" />
        <meta property="og:description" content="" />
        <meta
          property="og:image:secure_url"
          content="https://www.dnkre.com/logo.webp"
        />
        <link rel="preload" as="image" href="" type="image/webp"></link>

        <link rel="shortcut icon" href="https://www.dnkre.com/logo.ico" />

        {/* -- Twitter Card for Sharing -- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content=" " />
        <meta name="twitter:description" content="" />
        <meta name="twitter:image" content="" />
        <script type="application/ld+json">
          {JSON.stringify([
            // Organization Schema
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "DNK Real Estate",
              logo: "https://www.dnkre.com/logo.webp",
              url: "https://dnkre.com",
              sameAs: [
                "https://www.instagram.com/dnk_re/",
                "https://www.facebook.com/dnkrealestate1/",
                "https://www.linkedin.com/company/dnkrealestate/",
                "https://www.youtube.com/channel/UCKH7d3Sx2dkfb4pEXXaMpFA",
              ],
              telephone: "+971555769195",
              email: "info@dnkre.com",
              address: "Merasi Drive, Business Bay, Dubai",
            },

            // BreadcrumbList Schema
            {
              "@context": "http://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@id": "https://dnkre.com",
                    name: "Home",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "News",
                    name: "Naws",
                    "@id": `https://www.dnkre.com/news/`,
                  },
                },
              ],
              numberOfItems: 2,
            },

            // ItemPage Schema
            {
              "@context": "http://schema.org",
              "@type": "ItemPage",
              mainEntity: {
                "@type": "WebPage",
                name: " ",
                description: "",
                keywords: "",
                url: `https://www.dnkre.com/news/`,
                image: "",
              },
            },
          ])}
        </script>
      </Helmet>
      <BannerNews />
      <div className="mb-4 w-full bg-[#040406] flex items-center justify-center">
        <div className="container max-w-[1240px] relative">
          <div className=" hidden NewsFilterButton md:flex items-center gap-3 justify-start mt-4">
            {["All", "Market Insights", "General", "News", "Off-Plan"].map(
              (type) => (
                <button
                  key={type}
                  onClick={() => handleFilterClick(type)}
                  className={`${
                    filterType === type ? "active" : ""
                  } site-sub-btn1 text-left bg-[#1C1D22] w-full !border-[#1C1D22]`}
                >
                  {type}
                </button>
              )
            )}
          </div>
          <div className="md:hidden p-2">
            <select
              className="bg-[#1C1D22] w-full !border-[#1C1D22] text-white px-4 py-2 rounded-sm"
              value={filterType}
              onChange={(e) => handleFilterClick(e.target.value)}
            >
              <option value="All">All</option>
              <option value="Market Insights">Market Insights</option>
              <option value="General">General</option>
              <option value="News">News</option>
              <option value="Off-Plan">Off-Plan</option>
            </select>
          </div>

          <div>
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
                          aria-label=""
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
      </div>
    </>
  );
};

export default News;
