import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import partnerLogo from "../../../../assets/icons/addlogo.webp";
import { userPartnerServices } from "../../../../services/partnerServices";
import { URL } from "../../../../url/axios";
import LazyImage from "../../../layout/LazyImage";

export const PartnerSection = (props) => {
  const { params } = props;
  const [searchedList, setSearchedList] = useState([]);
  const [partnerList, setPartnerList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getPartner } = userPartnerServices();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // Shuffle and slice 10 random items when `params` or `partnerList` changes
    if (partnerList.length > 0) {
      const shuffled = [...partnerList].sort(() => 0.5 - Math.random());
      const sliced = shuffled.slice(0, 10);
      setSearchedList(sliced);
    }
  }, [params, partnerList]);

  const getData = async () => {
    try {
      const response = await getPartner();
      setPartnerList(Array.isArray(response.data) ? response.data : []);
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
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 992,

        settings: {
          slidesToShow: 4,
        },
      },

      {
        breakpoint: 640,

        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="w-full bg-[#040406] flex items-center justify-center">
      <div className=" container max-w-[1240px] py-5  px-4  md:py-9">
        <h2 className="m-auto w-fit">Our Partners</h2>
        <p className="text-center m-auto w-[100%] md:w-[80%]">
          We are honoured to have these amazing partners.
        </p>
        <div className="relative">
          <span className="bg-gradient-to-r from-[#040406] from-10% to-transparent absolute left-0 top-0  h-[130px] w-[150px] z-20"></span>
          <Slider {...settings} className="p-4 pb-0 pt-6 relative">
            {Array.isArray(searchedList) && searchedList.length > 0 ? (
              searchedList.map((data) => (
                <div
                  key={data._id}
                  className="!flex !items-center !justify-center w-[160px]  h-[70px] px-2 xl:px-0"
                >
                  <LazyImage
                    src={data.image ? URL + data.image : partnerLogo}
                    alt={data.partnername.replace(/\s+/g, "-")}
                    className="w-fit h-fit opacity-80 hover:opacity-100"
                  />
                </div>
              ))
            ) : (
              <div className="bg-[#040406] text-center">
                <p className="m-auto loader !w-[24px] !h-[24px]"></p>
              </div>
            )}
          </Slider>
          <span className="bg-gradient-to-l from-[#040406] from-10% to-transparent absolute right-0 top-0  h-[130px] w-[150px] z-20"></span>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
