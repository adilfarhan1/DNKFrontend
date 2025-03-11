import React, { useEffect, useState } from "react";
import addLogo from "../../../../assets/icons/addlogo.webp";
import { userPartnerServices } from "../../../../services/partnerServices";
import Swal from "sweetalert2";
import ViewPartner from "./ViewPartner";

export const AddPartner = (props) => {
  const initialState = {
    partnername: "",
    image: null,
  };

  const [addPartner, setAddPartner] = useState(initialState);
  const [imageUrl, setImageUrl] = useState({
    image: null,
  });

  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.value === "") {
      setAddPartner({ ...addPartner, [e.target.name]: null });
    } else {
      setAddPartner({ ...addPartner, [e.target.name]: e.target.value });
    }
  };

  const { postPartner, getPartner, putPartner } = userPartnerServices();

  useEffect(() => {
    if (props.mode === "update" && props.user_id) {
      fetchPartner(props.user_id);
    }
  }, [props.mode, props.user_id]);

  const fetchPartner = async (id) => {
    try {
      const response = await getPartner(id);
      const fetchedPartner = {
        ...response.data,
        partnername: response.data.partnername.replace(/-/g, " "),
      };

      setAddPartner(fetchedPartner);
      setImageUrl({
        image: response.data.imageUrl?.image || null,
      });
    } catch (err) {
      console.error("Faild to fetch partner details:", err);
    }
  };

  const handleFileInput = (e) => {
    let field = e?.target?.name;
    const file = e.target.files[0];
    setAddPartner((addPartner) => ({ ...addPartner, [field]: file }));

    setImageUrl((prevState) => ({
      ...prevState,
      [field]: window.URL.createObjectURL(file),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitData = {
        ...addPartner,
        partnername: addPartner.partnername.replace(/\s+/g, "-"),
      };
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
      if (addPartner.id) {
        submitData._id = addPartner.id;
        response = await putPartner(addPartner.id, formdata);
      } else {
        delete submitData._id;
        response = await postPartner(formdata);
      }

      if (response.success) {
        Swal.fire("Success", "Successfully added/updated", "success");
        handleReset();
        setMessage("Please refresh the page");
        setSubmit(!submit);
        fetchPartner();
      } else {
        Swal.fire("Failed", "Failed to added/updated project", "error");
      }
    } catch (err) {
      Swal.fire("Failed", "Failed to added/updated project", "error");
    }
  };

  const handleReset = () => {
    setAddPartner(initialState);
    setImageUrl({
      image: null,
    });
  };

  return (
    <div>
      <div>
        <h1 className="text-[#000] font-semibold">Add Partner</h1>
      </div>
      <div>
        <form
          action="/partner/add-partner'"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label>Developer Name</label>
            <input
              placeholder="Developer Name"
              type="text"
              name="partnername"
              onChange={handleChange}
              value={addPartner.partnername || ""}
              class="w-full  border border-[#040406] p-[10px] rounded mb-[10px]"
            />
            <label htmlFor="userIcon">
              <img
                className="m-3  w-[200px] h-[70px] bg-black"
                src={imageUrl?.image || addLogo}
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
          <button
            onClick={handleSubmit}
            className=" bg-[#00A3FF] hover:bg-[#6A9F43] px-[2.5rem] py-[0.4rem] rounded-md text-[#ffffff]"
          >
            {addPartner.id ? "Update" : "Submit"}
          </button>
          {message && <p>{message}</p>}
        </form>
      </div>

      {addPartner && (
        <ViewPartner
          addPartner={addPartner}
          setAddPartner={setAddPartner}
          submit={submit}
        />
      )}
    </div>
  );
};

export default AddPartner;
