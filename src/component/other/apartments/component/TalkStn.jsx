import React, { useState } from 'react'
import Assist from '../../../../assets/dubaiApaetment/icon01.webp'
import Consultation from "../../../../assets/dubaiApaetment/icon02.webp";
import Estimation from "../../../../assets/dubaiApaetment/icon03.webp";
import Shedule from "../../../../assets/dubaiApaetment/icon04.webp";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Swal from "sweetalert2";
import { userUserServices } from '../../../../services/userServices';

export const TalkStn = () => {
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
           TITLE: "Dubai Apartments Website Lead",
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

         await response.json(); // Parse the JSON response
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
    <div>
      <div className="w-full bg-[#040406] flex items-center justify-center">
        <div className="container max-w-[1240px] py-5 px-4 md:py-9 talkSection">
          <h2 className="m-auto w-fit">Let's Talk Together</h2>
          <p className="text-center m-auto w-[100%] md:w-[80%] pb-4">
            We love talk with new people. Please take a moment to tell us about
            your Dream. Your messages will be responded to within ONE BUSINESS
            DAY.
          </p>
          <div className="grid md:grid-cols-2 relative pt-8">
            <div className="grid grid-cols-2">
              <div className="p-2">
                <img
                  src={Assist}
                  alt="info icon"
                  className="pb-4 m-auto md:m-0 w-[48px]"
                />
                <h3 className="text-center md:text-left">
                  Call Enquiry Assistance
                </h3>
                <p className="text-center md:text-left">
                  We are always available on call to assist you with any
                  questions you may have.
                </p>
              </div>
              <div className="p-2">
                <img
                  src={Consultation}
                  alt="info icon"
                  className="pb-4 m-auto md:m-0 w-[48px]"
                />
                <h3 className="text-center md:text-left">
                  Project Consultation
                </h3>
                <p className="text-center md:text-left">
                  We provide you with all investment consultations for your
                  goal.
                </p>
              </div>
              <div className="p-2">
                <img
                  src={Estimation}
                  alt="info icon"
                  className="pb-4  m-auto md:m-0 w-[48px]"
                />
                <h3 className="text-center md:text-left">Project Estimation</h3>
                <p className="mb-0 text-center md:text-left">
                  You come to us with your dream, and we do all of the planning
                  and costing for you.
                </p>
              </div>
              <div className="p-2">
                <img
                  src={Shedule}
                  alt="info icon"
                  className="pb-4  m-auto md:m-0 w-[48px]"
                />
                <h3 className="text-center md:text-left">
                  Scheduling Appointments
                </h3>
                <p className="mb-0 text-center md:text-left">
                  We assist you in scheduling appointments whenever you wish to
                  meet us.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-between mx-[0px] md:mx-[10px] mt-3 md:mt-0">
                <div>
                  <input
                    placeholder="Full Name*"
                    type="text"
                    className="w-full bg-transparent border border-[#fff] p-[10px] rounded  text-[#fff]"
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
                    className="w-full bg-transparent border border-[#fff] p-[10px] rounded mt-[25px] text-[#fff]"
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
                      className="w-full bg-transparent border border-[#fff] p-[5px] pl-0 mt-[25px] rounded text-[#fff]"
                    />
                    {errors.phoneNumber && (
                      <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                        {errors.phoneNumber}
                      </p>
                    )}
                    {!valid && (
                      <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                        Invalid phone number.
                      </p>
                    )}
                  </div>
                  <input
                    placeholder="City"
                    type="text"
                    className="w-full bg-transparent border border-[#fff] p-[10px] rounded mt-[25px] text-[#fff]"
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
                    className="bg-[#997A5D] hover:bg-[#fff] hover:text-[#997A5D] text-[#fff] w-full p-[10px] mt-[25px] rounded duration-100 flex justify-center mb-3"
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
      </div>
      <div className="bg-custom-gradient h-[8px] md:h-[15px] w-full"></div>
    </div>
  );
};

export default TalkStn