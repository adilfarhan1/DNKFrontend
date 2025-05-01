import React, { useEffect, useState } from "react";
import avatar from "../../../../assets/icons/avatar.webp";
import { userReviewServices } from "../../../../services/reviewServices";
import Swal from "sweetalert2";
import ViewReview from "./ViewReview";

export const ReviewAdd = (props) => {
  const initialState = {
    image: null,
    name: "",
    message: "",
  };

  const [addReview, setAddReview] = useState(initialState);
  const [imageUrl, setImageUrl] = useState({
    image: null,
  });

  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    if (e.target.value === "") {
      setAddReview({ ...addReview, [e.target.name]: null });
    } else {
      setAddReview({ ...addReview, [e.target.name]: e.target.value });
    }
  };

  const { postReview, getReview, putReview } = userReviewServices();

  useEffect(() => {
    if (props.mode === "update" && props.user_id) {
      fetchReview(props.user_id);
    }
  }, [props.mode, props.user_id]);

  const fetchReview = async (id) => {
    try {
      const response = await getReview(id);
      setAddReview(response.data);
      setImageUrl({
        image: response.data.imageUrl?.image || null,
      });
    } catch (err) {
      console.error("Faild to fetch review details:", err);
    }
  };

  const handleFileInput = (e) => {
    let field = e?.target?.name;
    const file = e.target.files[0];
    setAddReview((addReview) => ({ ...addReview, [field]: file }));

    setImageUrl((prevState) => ({
      ...prevState,
      [field]: window.URL.createObjectURL(file),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitData = { ...addReview };
      const formdata = new FormData();
      for (const [key, value] of Object.entries(submitData)) {
        if (value instanceof File || typeof value === "string") {
          formdata.append(key, value);
        } else {
          Swal.fire("Failed", "Please upload images!", "error");
          return;
        }
      }

      let response;
      if (addReview.id) {
        submitData._id = addReview.id;
        response = await putReview(addReview.id, formdata);
      } else {
        delete submitData._id;
        response = await postReview(formdata);
      }
      if (response.success) {
        Swal.fire("Success", "Successfully added/updated", "success");
        handleReset();
        setSubmit(!submit);
        fetchReview();
      } else {
        Swal.fire("Failed", "Failed to added/updated project", "error");
      }
    } catch (err) {
      Swal.fire("Failed", "Failed to added/updated project", "error");
    }
  };

  const handleReset = () => {
    setAddReview(initialState);
    setImageUrl({
      image: null,
      name: null,
      message: null,
    });
  };

  return (
    <div>
      <div>
        <h1 className="text-[#000] font-semibold">Add Review</h1>
      </div>
      <form
        action="/review/add-review'"
        method="POST"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div>
          <div>
            <div className="mb-4">
              <label htmlFor="userIcon">
                <img
                  className="rounded-full m-3  w-[80px] h-[80px]"
                  src={imageUrl?.image || avatar}
                  alt="user-icon"
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
            <label>Author Name</label>
            <input
              placeholder="Author Name"
              onChange={handleChange}
              name="name"
              value={addReview.name || ""}
              type="text"
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
            <label>Message</label>
            <textarea
              placeholder="Message"
              onChange={handleChange}
              name="message"
              value={addReview.message || ""}
              type=""
              cols="30"
              rows="5"
              class="w-full  border border-[#040406] p-[10px] rounded mb-[25px]"
            />
          </div>
          <div className="mb-3 flex gap-4 justify-end">
            <button
              onClick={handleReset}
              className=" bg-[#00A3FF] hover:bg-[#6A9F43] px-[2.5rem] py-[0.4rem] rounded-md text-[#ffffff]"
            >
              Clear
            </button>
            <button
              onClick={handleSubmit}
              className=" bg-[#00A3FF] hover:bg-[#6A9F43] px-[2.5rem] py-[0.4rem] rounded-md text-[#ffffff]"
            >
              {addReview.id ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      </form>
      <ViewReview {...{ addReview, setAddReview, submit }} />
    </div>
  );
};

export default ReviewAdd;
