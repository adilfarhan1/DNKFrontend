import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { userRoadshowServices } from "../../../services/roadshowService";
import Swal from "sweetalert2";

export const FormRoadshow = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [valid, setValid] = useState(true);
  const [eventList, setEventList] = useState([]);
  const [searchedEventList, setSearchedEventList] = useState([]);

  const { postClientResgister, getRoadshow, checkDuplicateClient } =
    userRoadshowServices();

  const initialState = {
    fullName: "",
    email: "",
    phone: "91",
    event: "Delhi Roadshow (11-12) 2025",
    attendDate: "",
    attendTime: "",
    sourcedRm: "",
  };

  const [addRegister, setAddRegister] = useState(initialState);

  useEffect(() => {
    getEventData();
  }, []);

  useEffect(() => {
    let tempList = eventList;
    setSearchedEventList(tempList);
  }, [eventList]);

  const getEventData = async () => {
    try {
      const response = await getRoadshow();
      if (response.success) {
        setEventList(response.data);
      }
    } catch (err) {}
  };

  const validateForm = () => {
    let formErrors = {};
    if (!addRegister.fullName) formErrors.fullName = "Full Name is required.";
    if (!addRegister.email) {
      formErrors.email = "Email is required.";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(addRegister.email))
        formErrors.email = "Invalid email.";
    }
    if (!addRegister.phone) formErrors.phone = "Phone Number is required.";
    //  if (!addRegister.event) formErrors.event = "Event location is required.";
    if (!addRegister.attendDate)
      formErrors.attendDate = "Event attend date is required.";
    if (!addRegister.attendTime)
      formErrors.attendTime = "Event attend time is required.";
    if (!addRegister.sourcedRm)
      formErrors.sourcedRm = "sourced RM is required.";
    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setAddRegister((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangePhone = (value) => {
    setAddRegister((prev) => ({ ...prev, phone: value }));
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);

    try {
      const duplicateCheck = await checkDuplicateClient({
        email: addRegister.email,
        eventName: addRegister.event,
      });

      if (duplicateCheck.duplicate) {
        // Check for duplicate field here
        Swal.fire(
          "Error",
          "You have already registered for this event.",
          "error"
        );
      } else {
        const response = await postClientResgister({
          fullName: addRegister.fullName,
          email: addRegister.email,
          phone: addRegister.phone,
          eventName: addRegister.event,
          attendDate: addRegister.attendDate,
          attendTime: addRegister.attendTime,
          sourcedRm: addRegister.sourcedRm,
        });

        if (response.success) {
          Swal.fire("Success", "Thank you for getting in touch!", "success");
          handleReset();
        } else {
          Swal.fire("Failed", "Registration failed", "error");
        }
      }
    } catch (err) {
      Swal.fire("Failed", "Registration failed", "error");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setAddRegister((prev) => ({
      ...initialState,
      event: prev.event,
      phone: prev.phone.slice(0, 2),
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid sm:grid-cols-2">
        <div className="mx-2 mb-4">
          <label className="text-[#ffffff]">Full Name</label>
          <input
            placeholder="Full Name*"
            name="fullName"
            type="text"
            className="w-full bg-transparent border border-[#ffffff] p-[10px] rounded  text-[#ffffff] "
            value={addRegister.fullName || ""}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className="error text-[0.9rem] m-0 text-[#FF0202]">
              {errors.fullName}
            </p>
          )}
        </div>

        <div className="mx-2 mb-4">
          <label className="text-[#ffffff]">Email</label>
          <input
            placeholder="Email*"
            type="text"
            name="email"
            className="w-full bg-transparent border border-[#ffffff] p-[10px] rounded  text-[#ffffff]"
            value={addRegister.email || ""}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="error text-[0.9rem] m-0 text-[#FF0202]">
              {errors.email}
            </p>
          )}
        </div>

        <div className=" phoneInput mx-2 mb-[25px] sm:mb-0">
          <label className="text-[#ffffff]">Mobile Number</label>
          <PhoneInput
            placeholder="Mobile Number*"
            type="text"
            name="phone"
            country={"in"}
            preferredCountries={["ae", "qa", "in", "sa"]} // Restrict to UAE and Qatar codes
            value={addRegister.phone || ""}
            onChange={handleChangePhone}
            enableAreaCodeStretch
            inputProps={{
              required: true,
            }}
            className="w-full bg-transparent border border-[#ffffff] p-[5px] pl-0 rounded text-[#ffffff]"
          />
          {errors.phone && (
            <p className="error text-[0.9rem] m-0 text-[#FF0202]">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="mx-2 mb-[25px]">
          <label className="text-[#ffffff]">Date</label>
          <select
            placeholder="Expected Date"
            onChange={handleChange}
            name="attendDate"
            value={addRegister.attendDate || ""}
            type="text"
            className="w-full  border border-[#ffffff] p-[10px] rounded  bg-transparent text-[#ffffff]"
          >
            <option className="text-[#000000]" value={""}>
              Select -
            </option>
            <option className="text-[#000000]" value={"11th-Jan"}>
              11th January
            </option>
            <option className="text-[#000000]" value={"12th-Jan"}>
              12th January
            </option>
          </select>
          {errors.attendDate && (
            <p className="error text-[0.9rem] m-0 text-[#FF0202]">
              {errors.attendDate}
            </p>
          )}
        </div>

        <div className="mx-2 mb-[25px]">
          <label className="text-[#ffffff]">Time</label>
          <select
            placeholder="Expected Time"
            onChange={handleChange}
            name="attendTime"
            value={addRegister.attendTime || ""}
            type="text"
            className="w-full  border border-[#ffffff] p-[10px] rounded  bg-transparent text-[#ffffff]"
          >
            <option className="text-[#000000]" value={""}>
              Select -
            </option>
            <option className="text-[#000000]" value={"10am-11am"}>
              10am - 11am
            </option>
            <option className="text-[#000000]" value={"11am-12pm"}>
              11am - 12pm
            </option>
            <option className="text-[#000000]" value={"12pm-1pm"}>
              12pm - 1pm
            </option>
            <option className="text-[#000000]" value={"1pm-2pm"}>
              1pm - 2pm
            </option>
            <option className="text-[#000000]" value={"2pm-3pm"}>
              2pm - 3pm
            </option>
            <option className="text-[#000000]" value={"3pm-4pm"}>
              3pm - 4pm
            </option>
            <option className="text-[#000000]" value={"4pm-5pm"}>
              4pm - 5pm
            </option>
            <option className="text-[#000000]" value={"5pm-6pm"}>
              5pm - 6pm
            </option>
            <option className="text-[#000000]" value={"6pm-7pm"}>
              6pm - 7pm
            </option>
            <option className="text-[#000000]" value={"7pm-8pm"}>
              7pm - 8pm
            </option>
            <option className="text-[#000000]" value={"8pm-9pm"}>
              8pm - 9pm
            </option>
          </select>
          {errors.attendTime && (
            <p className="error text-[0.9rem] m-0 text-[#FF0202]">
              {errors.attendTime}
            </p>
          )}
        </div>
        <div className="mx-2 mb-4">
          <label className="text-[#ffffff]">Sourced RM</label>
          <input
            placeholder="Sourced RM*"
            name="sourcedRm"
            type="text"
            className="w-full bg-transparent border border-[#ffffff] p-[10px] rounded  text-[#ffffff] "
            value={addRegister.sourcedRm || ""}
            onChange={handleChange}
          />
          {errors.sourcedRm && (
            <p className="error text-[0.9rem] m-0 text-[#FF0202]">
              {errors.sourcedRm}
            </p>
          )}
        </div>

        <div className="mx-2 mb-4">
          <input
            placeholder="Event"
            name="event"
            type="hidden"
            className="w-full bg-transparent border border-[#ffffff] p-[10px] rounded text-[#ffffff]"
            value={addRegister.event}
          />
        </div>
      </div>
      <button
        className="bg-[#CE8745] text-[#ffffff] hover:bg-[#ffffff] hover:text-[#CE8745] w-full p-[10px] mt-[25px] rounded duration-100 flex justify-center"
        disabled={loading}
      >
        {loading ? (
          <div className="loader !w-[24px] !h-[24px]"></div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default FormRoadshow;
