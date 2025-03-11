import React, { useEffect, useState } from "react";
import BannerCareer from "./component/BannerCareer";
import { FaWhatsapp } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import PartnerSection from "../home/components/PartnerSection";
import { userUserServices } from "../../../services/userServices";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

export const CareerPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [cv, setCv] = useState(null);
  const [valid, setValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const { careerMail } = userUserServices();
  const [keywords, setKeywords] = useState([]);
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
    if (!cv) formErrors.cv = "CV is required.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setKeywords([
      "Careers at DNK Real Estate",
      "Real Estate Jobs in Dubai",
      "Join Our Team",
      "Property Management Careers",
      "Sales and Marketing Jobs Dubai",
      "Real Estate Careers",
      "Work at DNK Real Estate",
      "Job Opportunities in Dubai Real Estate",
      "Real Estate Employment",
      "Professional Development in Real Estate",
      "Dynamic Workplace Dubai",
      "Inclusive Work Environment",
      "Talent Development Dubai",
      "Real Estate Industry Careers",
      "Join a Passionate Team",
    ]);
  }, []);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const handleFileInput = (e) => {
    setCv(e.target.files[0]);
  };

  const addLeadtobitrix = async (name, email, phone, city, cv) => {
    const apiUrl = process.env.REACT_APP_B4API;

    // Convert the file to Base64
    const convertFileToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result.split(",")[1]); // Extract Base64 string without the prefix
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    };

    // Convert CV file to Base64 if it exists
    let cvBase64 = null;
    if (cv) {
      try {
        cvBase64 = await convertFileToBase64(cv);
      } catch (error) {
        console.error("Error converting CV to Base64:", error);
      }
    }

    const leadData = {
      fields: {
        TITLE: "Careers Form Application",
        NAME: name,
        PHONE: [
          {
            VALUE: phone,
            VALUE_TYPE: "WORK",
          },
        ],
        UF_CRM_LEAD_1724493296911: city,
        UF_CRM_1725366782309: {
          fileData: ["CV.pdf", cvBase64], // Use the Base64 encoded string here
        },
        EMAIL: [{ VALUE: email, VALUE_TYPE: "WORK" }],
      },
    };

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
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
      const formData = new FormData();
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("phoneNumber", phoneNumber);
      formData.append("city", city);
      if (cv) {
        formData.append("cv", cv);
      }

      const response = await careerMail(formData);
      Swal.fire({
        title: "Thank You For Your Application.",
        html: "<p>Our HR will get back to you shortly</p>",
        icon: "success",
      });
      //Clear the form fields
      addLeadtobitrix(fullName, email, phoneNumber, city, cv);
      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setCity("");
      setCv(null);
    } catch (err) {
      console.error("Error submitting form:", err);
      Swal.fire("Failed", "Check your internet connection", "error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Helmet>
        <title>Join Our Team at DNK Real Estate</title>
        <meta
          name="description"
          content="At DNK Real Estate, we are committed to fostering a dynamic and inclusive workplace where talent thrives. Explore exciting career opportunities in the real estate sector, from sales and marketing to property management and administration. Join us and be part of a passionate team dedicated to excellence and innovation in Dubai's vibrant real estate market."
        />
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="canonical" href="https://dnkre.com/careers" />
        <meta property="og:title" content="Join Our Team at DNK Real Estate" />
        <meta
          property="og:description"
          content="At DNK Real Estate, we are committed to fostering a dynamic and inclusive workplace where talent thrives. Explore exciting career opportunities in the real estate sector, from sales and marketing to property management and administration. Join us and be part of a passionate team dedicated to excellence and innovation in Dubai's vibrant real estate market."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:image" content="https://www.dnkre.com/logo.webp" />
        <meta property="og:url" content="https://dnkre.com/careers" />
        <meta property="og:type" content="website" />

        {/* -- Twitter Card for Sharing -- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Join Our Team at DNK Real Estate" />
        <meta
          name="twitter:description"
          content="At DNK Real Estate, we are committed to fostering a dynamic and inclusive workplace where talent thrives. Explore exciting career opportunities in the real estate sector, from sales and marketing to property management and administration. Join us and be part of a passionate team dedicated to excellence and innovation in Dubai's vibrant real estate market."
        />
        <meta name="twitter:image" content="https://www.dnkre.com/logo.webp" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "website",
            mainEntity: {
              "@type": "website",
              name: "Join Our Team at DNK Real Estate",
              description:
                "At DNK Real Estate, we are committed to fostering a dynamic and inclusive workplace where talent thrives. Explore exciting career opportunities in the real estate sector, from sales and marketing to property management and administration. Join us and be part of a passionate team dedicated to excellence and innovation in Dubai's vibrant real estate market.",
              keywords: keywords.join(", "),
              image: "https://www.dnkre.com/logo.webp",
            },
          })}
        </script>
      </Helmet>
      <BannerCareer />
      <div className="about-section w-full bg-[#040406] flex items-center justify-center">
        <div className="container max-w-[1240px] py-5  px-4  md:py-9 relative">
          <h2 className="m-auto w-fit text-center">
            Build a career in an innovative real estate agency
          </h2>
          <p className="text-center m-auto w-[100%] md:w-[80%]">
            Welcome to DNK Real Estate, your trusted partner in Dubai’s vibrant
            real estate market. We are a licensed real estate brokerage company
            headquartered in the dynamic city of Dubai, operating under the
            regulatory authority of the Dubai Real Estate. With nearly two
            decades of experience in Dubai’s ever-evolving real estate
            landscape, we have witnessed its growth and transformation, and we
            are here to guide you through every step of your real estate
            journey.
          </p>

          <div className="border border-[#ffff] rounded-[10px] shadow bg-[#121218] group mx-0 md:m-4 mt-14 py-8 px-4 md:px-9">
            <div>
              <h2 className="m-auto w-fit text-center">Send resume</h2>
              <p className="text-center m-auto w-[100%] mb-7">
                Let Us Know About Your Experience With Us
              </p>
              <div className="">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col justify-between mx-[0px] md:mx-[10px] mt-3 md:mt-0">
                    <div className="grid  md:grid-cols-2 gap-3">
                      <div className="mb-[25px]">
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
                      </div>
                      <div className="mb-[25px]">
                        <input
                          placeholder="Email Address*"
                          type="text"
                          className="w-full bg-transparent border border-[#ffffff] p-[10px] rounded  text-[#ffffff]"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && (
                          <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div className="mb-[25px] phoneInput">
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
                          className="w-full bg-transparent border border-[#ffffff] p-[5px] pl-0 rounded text-[#ffffff]"
                        />
                        {errors.phoneNumber && (
                          <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                            {errors.phoneNumber}
                          </p>
                        )}
                      </div>
                      <div className="mb-[25px]">
                        <input
                          placeholder="City"
                          type="text"
                          className="w-full bg-transparent border border-[#ffffff] p-[10px] rounded  text-[#ffffff]"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                        />
                        {errors.city && (
                          <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                            {errors.city}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mb-[25px]">
                      <label htmlFor="" className="text-[#ffffff] mb-1">
                        Attach CV (PDF required)
                      </label>
                      <input
                        type="file"
                        className="w-full bg-transparent border border-[#ffffff] p-[10px] rounded text-[#ffffff]"
                        onChange={handleFileInput}
                      />
                      {errors.cv && (
                        <p className="error text-[0.9rem] m-0 text-[#FF0202]">
                          {errors.cv}
                        </p>
                      )}
                    </div>

                    <div>
                      <button
                        className="bg-[#CE8745] hover:bg-[#ffffff] hover:text-[#CE8745] w-full p-[10px] rounded duration-100 flex justify-center"
                        disabled={loading}
                      >
                        {loading ? (
                          <div className="loader !w-[24px] !h-[24px]"></div>
                        ) : (
                          "Submit"
                        )}
                      </button>
                      <div className="flex items-center justify-center mt-4">
                        <p className="mb-0 text-center m-auto w-[100%] md:w-[80%]">
                          DNK Real Estate is always interested in motivated
                          people on its team. Send your CV and we will contact
                          you if we find a suitable position.
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PartnerSection />
    </div>
  );
};

export default CareerPage;
