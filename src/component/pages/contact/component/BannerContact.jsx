import React from "react";
import contactBanner from "../../../../assets/banner-img/banner_contact.webp";
import { MdEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";

export const BannerContact = () => {
  return (
    <div
      aria-label="dubai view, Real estate, off plan, ROI, investment"
      className="banner w-full bg-[#040406] flex items-center justify-center"
      style={{ backgroundImage: `url(${contactBanner})` }}
    >
      <div className="container max-w-[1240px] px-4 flex items-center justify-start">
        <div className="banner-content">
          <h1 className="banner-h1">Contact Us</h1>
          <p className=" w-[100%] md:w-[70%]">
            We love to hear about your dream goals. Please get in touch with one
            of our Project Consultants.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:info@dnkre.com"
              className="flex gap-1 items-center group"
            >
              <MdEmail className="text-[#ffffff] group-hover:text-[#CE8745]" />
              <p className="mb-0 group-hover:text-[#CE8745]  transition duration-200 ease-out">
                info@dnkre.com
              </p>
            </a>
            <a
              href="tel:+971555769195"
              className="flex gap-1 items-center group"
            >
              <MdCall className="text-[#ffffff] group-hover:text-[#CE8745]" />
              <p className="mb-0 group-hover:text-[#CE8745]  transition duration-200 ease-out">
                +971 55 576 9195
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerContact;
