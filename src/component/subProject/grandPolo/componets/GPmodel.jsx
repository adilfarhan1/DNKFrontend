import React from "react";
import { IoClose } from "react-icons/io5";
import AdPoster from "../../../../assets/pojects/grandPolo/adImg.webp";
import  { ADModelForm } from "./GPModelForm";

export const PopupModel = ({ onClose, onFormSubmit }) => {

  const handleFormSubmit = (formData) => {
    onClose();
    // Perform any action needed with formData
  };

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
              backgroundImage: `url(${AdPoster})`,
            }}
          ></div>
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
            <ADModelForm onFormSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupModel;
