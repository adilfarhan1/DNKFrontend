import React, { useEffect, useState } from 'react'
import Newsimgic from "../../../../assets/icons/image_demo.webp";
import Slider from 'react-slick';
import { TbPointFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { userNewsServices } from '../../../../services/newsServices';
import useSliderLazyLoad from '../../../../hooks/useSliderLazyLoad';
import { URL } from '../../../../url/axios';

export const NewsList = (props) => {
  const { params } = props;
  const [newsList, setNewsList] = useState([]);
  const [mainNews, setMainNews] = useState(null);
  const [sliderNews, setSliderNews] = useState([]);
  const { getNews } = userNewsServices();
  const navigate = useNavigate();

  useEffect(() => {
    const tempList = newsList
      .filter((data) => data.status == params)
      .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    setSliderNews(tempList);
  }, [params, newsList]);

   useEffect(() => {
      getData();
    }, []);

  const getData = async () => {
    try {
      const response = await getNews();
      if (response.success) {
        const sortedNews = response.data
          .filter((data) => data.status == params)
          .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      if (sortedNews.length > 0) {
        setMainNews(sortedNews[0]);
        setSliderNews(sortedNews.slice(1));
      }
      }
    } catch (err) {
      console.error("Failed to fatch news list", err);
    }
  }

    const handleCardClick = (newsurl) => {
      const slug = newsurl.trim().toLowerCase().replace(/\s+/g, "-"); 
      navigate(`/news/${encodeURIComponent(slug)}`);
    };

  const thumbnailUrls = sliderNews.map((data) => {
    return data?.newsthumbnail
      ? URL + encodeURIComponent(data.newsthumbnail)
      : Newsimgic;
  });

  const [imageUrls, loadImages] = useSliderLazyLoad(thumbnailUrls, 3);
  
  var settings = {
    dots: false,
    infinite: true,
    speed: 290,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,

        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => {
      loadImages(newIndex); // Load images for new visible slides
    },
    afterChange: (current) => {
      loadImages(current); // Ensure images are loaded after slide change
    },
  };

   useEffect(() => {
      loadImages(0); // Load initial images for visible slides
   }, [sliderNews]);
  
  return (
    <div className="w-full bg-[#040406] flex items-center justify-center">
      <div className="container max-w-[1240px] py-5  px-4  md:py-9 relative">
        <div className="w-fit pb-4 flex items-start">
          <h2 className="mb-0">DNK News Today</h2>
          <div className="relative">
            <TbPointFilled className="text-[1.6rem] text-[#FF0000] m-auto" />
            <TbPointFilled className="text-[1.9rem] text-[#FF0000] animate-ping absolute top-[-2px] left-[-2.5px]" />
          </div>
        </div>
        <div className="grid  xl:grid-cols-3">
          <div className="xl:col-span-2">
            {mainNews && (
              <div onClick={() => handleCardClick(mainNews.newsurl)}>
                <Link
                  to={() => handleCardClick(mainNews.newsurl)}
                  className="block md:grid grid-cols-4 mainNewsSection"
                >
                  <div
                    role="img"
                    aria-label={`${mainNews.alt}, Dubai News, Real estate News, latest news`}
                    className="rounded-md w-full h-[200px] md:h-[200px] relative col-span-1"
                    style={{
                      backgroundImage: `url(${
                        mainNews.newsthumbnail
                          ? URL + encodeURIComponent(mainNews.newsthumbnail)
                          : Newsimgic
                      })`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="md:px-3 py-2 pt-0 flex flex-col justify-between col-span-3">
                    <div>
                      <h2 className="mb-2 text-2xl font-bold tracking-tight text-white line-clamp-2">
                        {mainNews.newstitle}
                      </h2>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: mainNews?.newspara1,
                        }}
                        className="m-0 font-normal text-gray-400 line-clamp-4"
                      ></p>
                    </div>

                    <div className="flex gap-1">
                      <p className="m-0 font-normal text-gray-400 line-clamp-4 pt-3">
                        Published:
                      </p>
                      <p className="m-0 font-normal text-gray-400 line-clamp-4 pt-3">
                        {mainNews.published}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )}
          </div>
          <div className="hidden xl:block">
            <Slider {...settings} className="overflow-hidden">
              {sliderNews.length > 0 ? (
                sliderNews.slice(0, 10).map((data, index) => {
                  const thumbnailUrl = imageUrls[index] || Newsimgic;
                  return (
                    <div
                      key={data.newsurl}
                      onClick={() => handleCardClick(data.newsurl)}
                    >
                      <Link to={() => handleCardClick(data.newsurl)}>
                        <div className=" grid grid-cols-5 py-3 border border-x-0 border-t-0 border-[#979797]">
                          <div
                            role="img"
                            aria-label={`${mainNews.alt}, News report, Dubai latest News, UAE News, Real estate News`}
                            className="rounded-sm mr-3"
                            style={{
                              backgroundImage: `url(${thumbnailUrl})`,
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              height: "40px",
                              width: "",
                              position: "relative",
                            }}
                          ></div>
                          <div className=" col-span-4">
                            <h2 class="text-[1rem] font-semibold tracking-tight text-white line-clamp-2 mb-0">
                              {data.newstitle}
                            </h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })
              ) : (
                <div className="bg-[#040406] text-center">
                  <p className="m-auto loader !w-[24px] !h-[24px]"></p>
                </div>
              )}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsList