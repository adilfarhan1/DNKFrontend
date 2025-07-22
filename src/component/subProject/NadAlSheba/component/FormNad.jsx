import React, { useState } from 'react'
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Swal from 'sweetalert2';
import { userUserServices } from '../../../../services/userServices';

export const FormNad = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const { contactData } = userUserServices();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    if (!fullName) formErrors.fullName = "Full Name is required.";
    if (!email) {
      formErrors.email = "Email is required.";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) formErrors.email = "Invalid email.";
    }
    if (!phoneNumber) formErrors.phoneNumber = "Phone Number is required.";
    if (!city) formErrors.city = "City is required.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const addLeadtobitrix = async (name, email, phone, city) => {
    const apiUrl = process.env.REACT_APP_B4API;

    const leadData = {
      fields: {
        TITLE: "Nad Al Sheba Gardens Website Lead",
        NAME: name,
        PHONE: [
          {
            VALUE: phone,
            VALUE_TYPE: "WORK",
          },
        ],
        UF_CRM_LEAD_1724493296911: city,
        EMAIL: [{ VALUE: email, VALUE_TYPE: "WORK" }],
      },
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Include any necessary headers like authentication tokens here
          // 'Authorization': `Bearer ${yourToken}`
        },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        // Check if the response status is OK
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Parse the JSON response
    } catch (error) {
      console.error("Error adding lead:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setLoading(true);
    try {
      await contactData({
        fullName,
        email,
        phoneNumber,
        city,
      });

      Swal.fire({
        title: "Thank you",
        html: "<p>Our expert will contact you shortly</p>",
        icon: "success",
      });
      addLeadtobitrix(fullName, email, phoneNumber, city);
      // Clear the form fields
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setCity("");
    } catch (err) {
      console.error("Error submitting form:", err);
      Swal.fire("Failed", "Check your internet connection", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:mt-[-7rem]" id="about">
      <div className="w-full flex items-center justify-center">
        <div className="container max-w-[1240px]  px-4 md:flex gap-3 order-last md:order-first">
          <div className="w-full order-none">
            <div className="bg-[#fff] px-7 py-5  rounded-xl">
              <h2 className="text-[#000] m-auto w-fit">
                Unlock Exclusive Access
              </h2>
              <p className="m-auto mb-6 w-fit">
                Register Today to Find Your Dream Property!
              </p>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col justify-between mx-[0px] md:mx-[10px] mt-3 md:mt-0">
                  <div>
                    <input
                      placeholder="Full Name*"
                      type="text"
                      className="w-full bg-transparent border border-[#000] p-[10px] rounded  text-[#000]"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    {errors.fullName && (
                      <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                        {errors.fullName}
                      </p>
                    )}
                    <input
                      placeholder="Email Address*"
                      type="text"
                      className="w-full bg-transparent border border-[#000] p-[10px] rounded mt-[25px] text-[#000]"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && (
                      <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                        {errors.email}
                      </p>
                    )}

                    <div className=" phoneInput">
                      <PhoneInput
                        placeholder="Mobile Number*"
                        type="text"
                        country={"ae"}
                        value={phoneNumber}
                        onChange={handleChange}
                        enableAreaCodeStretch
                        inputProps={{
                          required: true,
                        }}
                        className="w-full bg-transparent border border-[#000] p-[5px] pl-0 mt-[25px] rounded text-[#000]"
                      />
                      {errors.phoneNumber && (
                        <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                    <input
                      placeholder="City"
                      type="text"
                      className="w-full bg-transparent border border-[#000] p-[10px] rounded mt-[25px] text-[#000]"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                    {errors.city && (
                      <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                        {errors.city}
                      </p>
                    )}
                  </div>
                  <div>
                    <button
                      className="bg-[#258493] hover:bg-[#000] hover:text-[#258493] text-[#fff] w-full p-[10px] mt-[25px] rounded duration-100 flex justify-center mb-3"
                      disabled={loading}
                    >
                      {loading ? (
                        <div className="loader !w-[24px] !h-[24px] FormSubmitButton"></div>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="order-last md:order-first flex items-end">
            <div className="h-full relative grid">
              <div className="h-[1rem] md:h-[2.5rem] w-full"></div>
              <div className="bg-gradient-to-br from-[#819EA3] to-[#258493] px-8 py-5 rounded-xl md:max-w-[800px]">
                <div className="flex justify-end">
                  <div className="flex gap-1 items-center mb-4">
                    <div className="h-2.5 w-2.5 bg-[#ff0000] rounded-full animate-blink"></div>
                    <p className="m-0 text-[#fff]">Limited Slots</p>
                  </div>
                </div>
                <h2 className="text-[1rem] md:text-[1.5rem]">
                  Why Choose Nad Al Sheba Gardens Phase 10?
                </h2>
                <p className="text-[#fff]">
                  This community is in a great location close to the city but
                  still quiet and peaceful. It’s just minutes from Downtown
                  Dubai and other popular areas. Built by Meraas, one of Dubai’s
                  top developers, the homes here are stylish, well designed, and
                  perfect for both families and investors.
                </p>

                <p className="text-[#fff] m-0">
                  Completion Date: From FEB 2029
                </p>
                <p className="text-[#fff] m-0">Payment Plan: 60/40</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormNad;