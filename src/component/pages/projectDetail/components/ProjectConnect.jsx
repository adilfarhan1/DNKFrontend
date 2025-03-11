import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import Profile from "../../../../assets/icons/leader_sale.webp";
import { useParams } from "react-router-dom";
import { PopupModel } from "../../../model/PopupModel";
import { useProjectServices } from "../../../../services/projectServices";
import { userUserServices } from "../../../../services/userServices";
import Swal from "sweetalert2";

export const ProjectConnect = ({ url, title }) => {
  const { slug } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(false);
  const [error, setError] = useState(null);
  const { getProjectById } = useProjectServices();
  const [ShowPopup, setShowPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);
  const { contactData } = userUserServices();
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchProject();
    // Log the API response
  }, [slug]);

  const fetchProject = async () => {
    try {
      const response = await getProjectById(slug);

      if (response.success) {
        const projectData = response.data;

        if (projectData) {
          setProjectData(projectData);
        } else {
          setError("No project found with the provided ID.");
        }
      } else {
        setError("Failed to fetch project details.");
      }
    } catch (err) {
      console.error("Failed to fetch team details", err);
      setError("An error occurred while fetching team details.");
    } finally {
      setLoading(false);
    }
  };

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
    // if (!city) formErrors.city = "City is required.";

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
        TITLE: `${projectData.projectname} Website Lead`,
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
    setLoading2(true);
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
      setLoading2(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#040406] text-center">
        <p className="m-auto loader !w-[24px] !h-[24px]"></p>
      </div>
    ); // Loading indicator
  }

  if (error) {
    return <div>{error}</div>; // Display error message
  }

  return (
    <div>
      <div className="border border-[#ffffff] border-spacing-1 rounded-md p-3">
        <div className="flex text-center">
          <img
            className="h-[60px] w-[60px] sm:h-[95px] sm:w-[95px]"
            src={Profile}
            alt={`Top real estate agent`}
            loading="lazy"
          />
          <div className="pl-2">
            <h2 className="m-0 text-[#ffffff] text-left text-[0.9rem] sm:text-[1rem] font-semibold">
              Velina Dsouza
            </h2>
            <p className="text-[0.89rem]">Property Consultant</p>
          </div>
        </div>

        <div className="flex items-center pt-3">
          <a
            href="tel:+971543049309"
            className="site-sub-btn w-full mr-1 text-center"
          >
            Call
          </a>
          <button
            onClick={() => setShowPopup(true)}
            className="site-sub-btn w-full ml-1"
          >
            Inquiry
          </button>
        </div>
        <div className="flex items-center justify-center mt-2">
          <p className="mb-0 text-[0.8rem] lg:text-[1rem]">
            Or get availability via
          </p>
          <a
            href={`https://wa.me/+971543049309?text=Hello,%20Share%20more%20details%20${projectData.projectname}`}
            className="flex items-center justify-center group"
          >
            <FaWhatsapp className="text-[#CE8745] ml-2 group-hover:text-[#6B9B2D] text-[1rem] lg:text-[1.3rem]" />
            <p className="mb-0 text-[#CE8745] group-hover:text-[#6B9B2D] text-[0.8rem] lg:text-[1rem]">
              WhatsApp
            </p>
          </a>
        </div>
      </div>

      <div className="border border-[#ffffff] border-spacing-1 rounded-md mt-3 overflow-hidden">
        <div className="bg-[#fff]">
          <h5 className="m-auto w-fit uppercase text-[0.9rem] md:text-[1rem] py-1">
            Get In Touch
          </h5>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col justify-between mt-3 md:mt-0 p-3 ">
            <div>
              <input
                placeholder="Full Name*"
                type="text"
                className="w-full bg-transparent border border-[#ffffff] p-[10px] rounded  text-[#ffffff]"
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
                className="w-full bg-transparent border border-[#ffffff] p-[10px] rounded mt-[10px] text-[#ffffff]"
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
                  className="w-full bg-transparent border border-[#ffffff] p-[5px] pl-0 mt-[10px] rounded text-[#ffffff]"
                />
                {errors.phoneNumber && (
                  <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>
              <textarea
                placeholder="Enter Message"
                type="text"
                className="w-full bg-transparent border border-[#ffffff] p-[10px] rounded mt-[10px] text-[#ffffff]"
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
                className="bg-[#CE8745] hover:bg-[#ffffff] hover:text-[#CE8745] w-full p-[10px] mt-[25px] rounded duration-100 flex justify-center"
                disabled={loading}
              >
                {loading2 ? (
                  <div className="loader !w-[24px] !h-[24px]"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {ShowPopup && <PopupModel onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default ProjectConnect;
