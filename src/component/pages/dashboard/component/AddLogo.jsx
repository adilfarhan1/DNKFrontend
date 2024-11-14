import React, { useEffect, useState } from "react";
import logoDefult from "../../../../assets/logo/dnklogo_1.webp";
import { useProjectServices } from "../../../../services/projectServices";
import { URL } from "../../../../url/axios";
import Swal from "sweetalert2";

export const AddLogo = () => {
  const [logo, setLogo] = useState({ image: null });
  const [logoId, setLogoId] = useState(null);
  const [imageUrl, setImageUrl] = useState(logoDefult);

  const { postLogo, putLogo, getLogo, deleteLogo } = useProjectServices();

  useEffect(() => {
    fetchLogo();
  }, []);

  const fetchLogo = async () => {
    try {
      const response = await getLogo();

      if (response.success) {
        const logoData = response.data;

        if (logoData.length > 0) {
          const logoImage = logoData[0].image;
          const logoId = logoData[0]._id;
          setLogo({ image: logoImage });
          setLogoId(logoId);
        }
      }
    } catch (err) {
      console.error("Failed to fetch logo:", err);
    }
  };

  const handleFileInput = (e) => {
    let field = e?.target?.name;
    const file = e.target.files[0];

    // Update the banner image state with the selected file
    setLogo((logo) => ({ ...logo, [field]: file }));

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
      if (logo.image instanceof File) {
        formdata.append("image", logo.image);
      } else {
        Swal.fire("Failed", "Please upload a valid image file!", "error");
        return;
      }

      let response;
      if (logoId) {
        response = await putLogo(logoId, formdata);
      } else {
        response = await postLogo(formdata);
      }

      if (response.success) {
        Swal.fire("Success", "Successfully added/updated", "success");
        fetchLogo();
      } else {
        Swal.fire("Failed", "Failed to add/update logo", "error");
      }
    } catch (err) {
      Swal.fire(
        "Failed",
        err?.response?.data?.message || "Logo upload operation failed",
        "error"
      );
    }
  };
  const handleDelete = async () => {
    try {
      const response = await deleteLogo();
      if (response.success) {
        Swal.fire(
          "Success",
          response.message || "Deleted logo successfully",
          "success"
        );
        setLogo({ image: null });
        setLogoId(null);
        setImageUrl(logoDefult);
      } else {
        Swal.fire("Failed", "Failed to delete the logo", "error");
      }
    } catch (err) {
      Swal.fire(
        "Failed",
        err?.response?.data?.message || "Failed to delete the logo",
        "error"
      );
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-[#000] font-semibold">
          {logoId ? "Update" : "Change"} Site Logo
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
                className="w-fit h-[400px] bg-slate-600"
                src={
                  imageUrl?.image
                    ? imageUrl.image
                    : logo.image
                    ? URL + logo.image
                    : logoDefult
                }
                alt="event image"
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
          <div className="flex gap-3">
            <button className=" bg-[#00A3FF] hover:bg-[#6A9F43] px-[2.5rem] py-[0.4rem] rounded-md text-[#ffffff] mt-6">
              {logoId ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      </form>
      {logoId ? (
        <button
          onClick={handleDelete}
          className=" bg-[#00A3FF] hover:bg-[#6A9F43] px-[2.5rem] py-[0.4rem] rounded-md text-[#ffffff] mt-6"
        >
          Delete
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default AddLogo;
