import React, { useEffect, useState } from "react";
import HomeBannerDefult from "../../../../assets/icons/coverimage.webp";
import { useProjectServices } from "../../../../services/projectServices";
import Swal from "sweetalert2";
import { URL } from "../../../../url/axios";

export const AddHomeBanner = () => {
  const [homeBanner, setHomeBanner] = useState({ image: null });
  const [homeBannerId, setHomeBannerId] = useState(null);
  const [imageUrl, setImageUrl] = useState(HomeBannerDefult);

  const { putHomeBanner, postHomeBannerImage, getHomeBanner } =
    useProjectServices();

  useEffect(() => {
    fetchBanner();
  }, []);

  const fetchBanner = async () => {
    try {
      const response = await getHomeBanner();

      if (response.success) {
        const homeBannerData = response.data;

        if (homeBannerData.length > 0) {
          const homeBannerImage = homeBannerData[0].image;
          const homeBannerId = homeBannerData[0]._id;
          setHomeBanner({ image: homeBannerImage });
          setHomeBannerId(homeBannerId);
        }
      }
    } catch (err) {
      console.error("Failed to fetch Home Banner image:", err);
    }
  };

  const handleFileInput = (e) => {
    let field = e?.target?.name;
    const file = e.target.files[0];

    // Update the banner image state with the selected file
    setHomeBanner((homeBanner) => ({ ...homeBanner, [field]: file }));

    // Update the image preview with the newly selected file or keep the previous state
    setImageUrl((prevState) => ({
      ...prevState,
      [field]: file ? window.URL.createObjectURL(file) : prevState[field],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      if (homeBanner.image instanceof File) {
        formdata.append("image", homeBanner.image);
      } else {
        Swal.fire("Failed", "Please upload a valid image file!", "error");
        return;
      }

      let response;
      if (homeBannerId) {
        response = await putHomeBanner(homeBannerId, formdata);
      } else {
        response = await postHomeBannerImage(formdata);
      }

      if (response.success) {
        Swal.fire("Success", "Successfully added/updated", "success");
        fetchBanner();
      } else {
        Swal.fire("Failed", "Failed to add/update home banner", "error");
      }
    } catch (err) {
      Swal.fire(
        "Failed",
        err?.response?.data?.message || "Banner upload operation failed",
        "error"
      );
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-[#000] font-semibold">
          {homeBannerId ? "Update" : "Add"} Home Banner Image
        </h1>
      </div>
      <form
        action="/task/add-home-banner'"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div>
          <div>
            <label htmlFor="userIcon">
              <img
                className="w-fit h-[400px]"
                src={
                  imageUrl?.image
                    ? imageUrl.image
                    : homeBanner.image
                    ? URL + homeBanner.image
                    : HomeBannerDefult
                }
                alt="HomeBanner"
              />
            </label>
            <input
              type="file"
              className="d-none"
              name="image"
              onChange={handleFileInput}
              id="image"
            />
          </div>
          <button className=" bg-[#00A3FF] hover:bg-[#6A9F43] px-[2.5rem] py-[0.4rem] rounded-md text-[#ffffff] mt-6">
            {homeBannerId ? "Update" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddHomeBanner;
