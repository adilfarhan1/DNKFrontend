import React, { useEffect, useState } from "react";
import avatar from "../../../../assets/icons/avatar.webp";
import quotes from "../../../../assets/icons/quotes.webp";
import quotes01 from "../../../../assets/icons/quotes01.webp";
import Slider from "react-slick";
import { userReviewServices } from "../../../../services/reviewServices";
import { URL } from "../../../../url/axios";

export const ReviewSection = (props) => {
  const { params } = props;
  const [searchedList, setSearchedList] = useState([]);
  const [reviewList, setReviewList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getReview } = userReviewServices();

  useEffect(() => {
    let tempList = reviewList;
    setSearchedList(tempList);
  }, [params, reviewList]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await getReview();

      if (response.success) {
        setReviewList(response.data);
      }
    } catch (err) {
      console.error("Failed to fetch team list", err);
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

  var settings = {
    spaceBetween: 10,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div className="w-full bg-[#040406] flex items-center justify-center px-4 xl:px-0">
      <div className="ReviewSection container max-w-[1240px] py-5  px-4  md:py-9">
        <h2 className="m-auto w-fit">What Our Clients Say</h2>
        <p className="text-center m-auto w-[100%] md:w-[80%]">
          We would love to learn what our satisfied clients have to say about
          our services.
        </p>
        <Slider {...settings}>
          {searchedList.length > 0 ? (
            searchedList.map((data) => (
              <div className="p-4" key={data._id}>
                <div>
                  <div className="py-5">
                    <img
                      src={data.image ? URL + data.image : avatar}
                      alt="Top real estate companies in dubai, River side living"
                      className="rounded-full m-auto w-[80px] h-[80px]"
                      loading="lazy"
                    />
                  </div>
                  <div className="relative">
                    <img
                      src={quotes}
                      alt="Dubai hills villas for sale, Real estate inverstment"
                      className="absolute left-0 top-0 animate-wiggle animate-once z-0 opacity-25 md:opacity-100"
                      loading="lazy"
                    />
                    <p className="text-center m-auto w-[100%] md:w-[80%] mb-4 relative z-40">
                      {data.message}
                    </p>
                    <img
                      src={quotes01}
                      alt="3 bedroom villa for sale in dubai, Dubai Downtown, Dubai South"
                      className="absolute right-0 bottom-0 animate-wiggle z-0 opacity-25 md:opacity-100"
                      loading="lazy"
                    />
                  </div>

                  <div className="relative m-auto w-[270px]">
                    <span className="h-[0.1rem] w-[270px] bg-white m-auto rounded absolute"></span>
                  </div>

                  <p className="m-auto text-white text-[1rem] w-fit pt-4">
                    {data.name}
                  </p>
                  {/* <p className="text-[0.8rem] m-auto w-fit">
                    Director of Company name
                  </p> */}
                </div>
              </div>
            ))
          ) : (
            <div className="bg-[#040406] text-center">
              <p className="m-auto loader !w-[24px] !h-[24px]"></p>
            </div>
          )}
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSection;
