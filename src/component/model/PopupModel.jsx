import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import ContactForm from "../pages/contact/component/ContactForm";
import AdPoster from "../../assets/icons/adposter.webp";
import { useProjectServices } from "../../services/projectServices";
import { URL } from "../../url/axios";

export const PopupModel = ({ onClose, onFormSubmit }) => {
  const [adPoster, setAdPoster] = useState({ image: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getAd } = useProjectServices();

  useEffect(() => {
    console.log(adPoster);
    fetchData();
  }, []);

  const handleFormSubmit = (formData) => {
    onClose();
    console.log("Form submitted:", formData);
    // Perform any action needed with formData
  };

  const fetchData = async () => {
    try {
      const response = await getAd();
      console.log("API response:", response);
      if (response.success) {
        const adData = response.data;

        if (adData.length > 0) {
          const adImage = adData[0].image;
          console.log("Fetched image:", adImage);
          setAdPoster({ image: adImage });
        } else {
          setError("No Ad found.");
        }
      } else {
        setError("Failed to fetch Ad image.");
      }
    } catch (err) {
      console.error("Failed to fetch Ad Image", err);
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

  const imageUrl = adPoster.image
    ? `${URL}${encodeURIComponent(adPoster.image)}`
    : AdPoster;
  console.log("Image URL:", imageUrl);

  return (
    <div
      id="default-modal"
      tabIndex="-1"
      aria-hidden="true"
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
    >
      <div className="relative  w-full max-w-2xl md:max-w-5xl max-h-full rounded-lg shadow bg-gray-700 grid md:grid-cols-2 m-3 overflow-hidden">
        <div className="hidden md:block">
          <div
            className="bg-cover w-[100%] h-[100%]"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          ></div>
          {/* <img src={sohbaPoster} alt="" /> */}
        </div>
        <div>
          <div className="flex items-center justify-end p-4 md:p-5 rounded-t ">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <IoClose className="text-[1.5rem]" />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="p-4 md:p-5 space-y-4">
            <ContactForm onFormSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModel;
