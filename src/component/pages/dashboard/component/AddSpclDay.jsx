import React, { useEffect, useState } from "react";
import eventDefult from "../../../../assets/icons/adposter.webp";
import { useProjectServices } from "../../../../services/projectServices";
import Swal from "sweetalert2";
import { URL } from "../../../../url/axios";

export const AddSpclDay = () => {
  const [event, setEvent] = useState({ image: null });
  const [eventId, setEventId] = useState(null);
  const [imageUrl, setImageUrl] = useState(eventDefult);

  const { postEvent, putEvent, getEvent, deleteEvent } = useProjectServices();

  useEffect(() => {
    fetchEvent();
  }, []);

  const fetchEvent = async () => {
    try {
      const response = await getEvent();

      if (response.success) {
        const eventData = response.data;

        if (eventData.length > 0) {
          const eventImage = eventData[0].image;
          const eventId = eventData[0]._id;
          setEvent({ image: eventImage });
          setEventId(eventId);
        }
      }
    } catch (err) {
      console.error("Failed to fetch event:", err);
    }
  };

  const handleFileInput = (e) => {
    let field = e?.target?.name;
    const file = e.target.files[0];

    // Update the banner image state with the selected file
    setEvent((event) => ({ ...event, [field]: file }));

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
      if (event.image instanceof File) {
        formdata.append("image", event.image);
      } else {
        Swal.fire("Failed", "Please upload a valid image file!", "error");
        return;
      }

      let response;
      if (eventId) {
        response = await putEvent(eventId, formdata);
      } else {
        response = await postEvent(formdata);
      }

      if (response.success) {
        Swal.fire("Success", "Successfully added/updated", "success");
        fetchEvent();
      } else {
        Swal.fire("Failed", "Failed to add/update event", "error");
      }
    } catch (err) {
      Swal.fire(
        "Failed",
        err?.response?.data?.message || "Event upload operation failed",
        "error"
      );
    }
  };

  const handleDelete = async () => {
    try {
      const response = await deleteEvent();
      if (response.success) {
        Swal.fire(
          "Success",
          response.message || "Deleted event successfully",
          "success"
        );
        setEvent({ image: null });
        setEventId(null);
        setImageUrl(eventDefult);
      } else {
        Swal.fire("Failed", "Failed to delete the event", "error");
      }
    } catch (err) {
      Swal.fire(
        "Failed",
        err?.response?.data?.message || "Failed to delete the event",
        "error"
      );
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-[#000] font-semibold">
          {eventId ? "Update" : "Add"} Home Event Notification
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
                    : event.image
                    ? URL + event.image
                    : eventDefult
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
              {eventId ? "Update" : "Submit"}
            </button>
          </div>
        </div>
      </form>
      {eventId ? (
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

export default AddSpclDay;
