import React, { useEffect, useState } from "react";
import { userRoadshowServices } from "../../../services/roadshowService";
import Swal from "sweetalert2";
import RoadshowList from "./RoadshowList";

export const CreateRoadshow = (props) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const initialState = {
    name: "",
    address: "",
    date: "",
    date2: "",
    hotelName: "",
    place: "",
  };

  const [addRoadshow, setAddRoadshow] = useState(initialState);
  const [submit, setSubmit] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.value === "") {
      setAddRoadshow({ ...addRoadshow, [e.target.name]: null });
    } else {
      setAddRoadshow({ ...addRoadshow, [e.target.name]: e.target.value });
    }
  };

  const { postRoadshow, getRoadshow, putRoadshow, deleteRoadshow } =
    userRoadshowServices();

  useEffect(() => {
    if (props.mode === "update" && props.user_id) {
      fetchRoadshow(props.user_id);
    }
  }, [props.mode, props.user_id]);

  const fetchRoadshow = async (id) => {
    try {
      const response = await getRoadshow(id);
      const fetchedRoadshow = {
        ...response.data,
      };

      setAddRoadshow(fetchedRoadshow);
    } catch (err) {
      console.error("Faild to fetch roadshow details:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append("name", addRoadshow.name);
      formdata.append("address", addRoadshow.address);
      formdata.append("date", addRoadshow.date);
      formdata.append("date2", addRoadshow.date2);
      formdata.append("hotelName", addRoadshow.hotelName);
      formdata.append("place", addRoadshow.place);

      let response;
      if (addRoadshow.id) {
        response = await putRoadshow(addRoadshow.id, formdata);
      } else {
        response = await postRoadshow(formdata);
      }

      if (response.success) {
        Swal.fire("Success", "Successfully added/updated", "success");
        handleReset();
        setSubmit(!submit);
      } else {
        Swal.fire("Failed", "Failed to add/update roadshow", "error");
      }
    } catch (err) {
      Swal.fire("Failed", "Failed to add/update roadshow", "error");
    }
  };
  const handleReset = () => {
    setAddRoadshow(initialState);
  };

  return (
    <div className="w-full flex items-start justify-center h-full">
      <div className="w-[100%] md:w-[70%] sm:w-[90%]">
        <div className="bg-[#ffffff] rounded-2xl py-10 px-3 sm:px-6 m-4 relative">
          <div>
            <h3 className="text-[#000] text-[1.5rem] font-semibold mb-4 m-auto text-center">
              Create Roadshow
            </h3>
            <form
              action="/partner/add-partner'"
              method="POST"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="grid sm:grid-cols-2">
                <div className="mx-2 mb-4">
                  <label>Roadshow Name</label>
                  <input
                    placeholder="Roadshow Name*"
                    type="text"
                    name="name"
                    className="w-full bg-transparent border border-[#000000] p-[10px] rounded  text-[#000000] "
                    value={addRoadshow.name || ""}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="mx-2 mb-4">
                  <label>Hotel Name</label>
                  <input
                    placeholder="Hotel Name*"
                    type="text"
                    name="hotelName"
                    className="w-full bg-transparent border border-[#000000] p-[10px] rounded  text-[#000000] "
                    value={addRoadshow.hotelName}
                    onChange={handleChange}
                  />
                  {errors.hotelName && (
                    <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                      {errors.hotelName}
                    </p>
                  )}
                </div>
                <div className="mx-2 mb-4">
                  <label>Hotal Address</label>
                  <input
                    placeholder="Hotal Address*"
                    type="text"
                    name="address"
                    className="w-full bg-transparent border border-[#000000] p-[10px] rounded  text-[#000000] "
                    value={addRoadshow.address}
                    onChange={handleChange}
                  />
                  {errors.address && (
                    <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div className="mx-2 mb-4">
                  <label>Event Date Day1</label>
                  <input
                    placeholder="Event Date Day1*"
                    type="text"
                    name="date"
                    className="w-full bg-transparent border border-[#000000] p-[10px] rounded  text-[#000000] "
                    value={addRoadshow.date}
                    onChange={handleChange}
                  />
                  {errors.date && (
                    <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                      {errors.date}
                    </p>
                  )}
                </div>
                <div className="mx-2 mb-4">
                  <label>Event Date Day2</label>
                  <input
                    placeholder="Event Date Day2*"
                    type="text"
                    name="date2"
                    className="w-full bg-transparent border border-[#000000] p-[10px] rounded  text-[#000000] "
                    value={addRoadshow.date2}
                    onChange={handleChange}
                  />
                  {errors.date2 && (
                    <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                      {errors.date2}
                    </p>
                  )}
                </div>
                <div className="mx-2 mb-4">
                  <label>Place Name</label>
                  <input
                    placeholder="Place Name*"
                    type="text"
                    name="place"
                    className="w-full bg-transparent border border-[#000000] p-[10px] rounded  text-[#000000] "
                    value={addRoadshow.place}
                    onChange={handleChange}
                  />
                  {errors.place && (
                    <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                      {errors.place}
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className=" bg-[#00A3FF] hover:bg-[#6A9F43] px-[2.5rem] py-[0.4rem] rounded-md text-[#ffffff]"
              >
                {addRoadshow.id ? "Update" : "Submit"}
              </button>
            </form>
          </div>
        </div>

        <div className="bg-[#ffffff] rounded-2xl py-10 px-3 sm:px-6 m-4 relative">
          <RoadshowList {...{ addRoadshow, setAddRoadshow, submit }} />
        </div>
      </div>
    </div>
  );
};

export default CreateRoadshow;
