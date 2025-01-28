import React, { useEffect, useRef, useState } from "react";
import bannerImg from "../../../../assets/banner-img/banner_home.webp";
import { PopupModel } from "../../../model/PopupModel";
import { useProjectServices } from "../../../../services/projectServices";
import { URL } from "../../../../url/axios";
import LazyImage from "../../../layout/LazyImage";

export const BannerHome = () => {
  const [ShowPopup, setShowPopup] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [homeBanner, setHomeBanner] = useState({ image: null });
  const [event, setEvent] = useState({ image: null });
  const bannerRef = useRef(null);
  const [error, setError] = useState(null);
  const { getHomeBanner, getEvent } = useProjectServices();

  useEffect(() => {
    fetchData();
    fetchEvent();
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000);

    return () => clearTimeout(timer); // Clear timeout if the component unmounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await getHomeBanner();
      if (response.success) {
        const homeBannerData = response.data;

        if (homeBannerData.length > 0) {
          const homeBannerImage = homeBannerData[0].image;
          setHomeBanner({ image: homeBannerImage });
        } else {
          setError("No banner found.");
        }
      } else {
        setError("Failed to fetch home banner image.");
      }
    } catch (err) {
      console.error("Failed to fetch home banner image", err);
    }
  };

  const fetchEvent = async () => {
    try {
      const response = await getEvent();
      if (response.success) {
        const EventData = response.data;
        if (EventData.length > 0) {
          const EventImage = EventData[0].image;
          setEvent({ image: EventImage });
        } else {
          setError("No event found.");
        }
      } else {
        setError("Failed to fetch event image.");
      }
    } catch (err) {
      console.error("Failed to fetch event image", err);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 } // Loads when 10% of the banner is in view
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current);
      }
    };
  }, []);

  const imageUrl = homeBanner.image
    ? `${URL}${encodeURIComponent(homeBanner.image)}`
    : bannerImg;

  const eventImageUrl = event.image
    ? `${URL}${encodeURIComponent(event.image)}`
    : "";

  return (
    <div
      ref={bannerRef}
      role="img"
      aria-label="dubai view, Real estate, off plan, ROI, investment"
      className="banner w-full bg-[#040406] flex items-center justify-center"
      style={isInView ? { backgroundImage: `url(${imageUrl})` } : {}}
    >
      <div className="container max-w-[1240px] px-4  items-center  overflow-hidden relative">
        <div className="banner-content grid md:grid-cols-3">
          <div className="z-10 w-fit col-span-2">
            <h1 className="banner-h1">
              Build Your Future in Dubai with DNK Real Estate
            </h1>
            <p className="pb-4 banner-h1">
              Discover your ideal <strong>property in Dubai</strong> with the
              help of our seasoned <strong>real estate experts</strong>. Whether
              you're looking for a dream home or a profitable{" "}
              <strong>investment opportunity</strong>, we provide personalized
              guidance to help you make the right choice.
            </p>
            <button onClick={() => setShowPopup(true)} className="site-btn1 ">
              Request callback
            </button>
          </div>
          <div className="w-[50%] md:w-[70%] order-first md:order-last z-10">
            <LazyImage src={eventImageUrl} alt="" className="" />
          </div>
        </div>
        <div className="bg-[#00000066] w-full h-full absolute left-0 top-0 z-0 sm:hidden"></div>
      </div>

      <div>
        {ShowPopup && <PopupModel onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default BannerHome;
