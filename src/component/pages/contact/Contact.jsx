import React, { useState } from "react";
import BannerContact from "./component/BannerContact";
import ContactForm from "./component/ContactForm";
import Assist from "../../../assets/icons/assist.webp";
import Consultation from "../../../assets/icons/consultation.webp";
import Estimation from "../../../assets/icons/estimation.webp";
import Shedule from "../../../assets/icons/shedule.webp";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export const Contact = () => {
  const [keywords, setKeywords] = useState([]);

  // Scroll to the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Fetch keywords from an API or set them directly
    setKeywords([
      "DNK Real Estate",
      "Contact real estate team",
      "Get in touch for property inquiries",
      "Real estate contact page",
      "Property assistance",
      "Real estate consultation",
      "Buy or sell property",
      "Contact for property investment",
      "Dubai real estate experts",
      "Real estate agent contact details",
      "Property services assistance",
      "Register with us",
      "Call Us",
      "Booking",
      "Contact Details",
      "Registration",
      "Address",
      "Map",
      "Google Map",
    ]);
  }, []);
  return (
    <div>
      <Helmet>
        <title>
          Contact Our Expert Real Estate Team | Get in Touch for Property
          Assistance
        </title>
        <meta name="keywords" content={keywords.join(", ")} />
        <meta
          name="description"
          content="Our professional team is available 24/7 to assist you. Whether you have questions, concerns, or suggestions, we’d love to hear from you. Feel free to reach out via email by completing the form on the right, or schedule an appointment to meet us in person at one of our listed contact points below. We're here to help just be sure to arrange a meeting in advance. All contact details are provided below."
        />

        {/* -- Open Graph Meta Tags for WhatsApp and Social Media Sharing -- */}
        <meta
          property="og:title"
          content="Contact Our Expert Real Estate Team | Get in Touch for Property Assistance"
        />
        <meta
          property="og:description"
          content="Our professional team is available 24/7 to assist you. Whether you have questions, concerns, or suggestions, we’d love to hear from you. Feel free to reach out via email by completing the form on the right, or schedule an appointment to meet us in person at one of our listed contact points below. We're here to help just be sure to arrange a meeting in advance. All contact details are provided below."
        />
        <meta property="og:image" content="https://www.dnkre.com/logo.webp" />
        <meta property="og:url" content="https://dnkre.com/contact" />
        <meta property="og:type" content="https://dnkre.com/contact" />

        {/* -- Twitter Card for Sharing -- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Our Expert Real Estate Team | Get in Touch for Property Assistance"
        />
        <meta
          name="twitter:description"
          content="Our professional team is available 24/7 to assist you. Whether you have questions, concerns, or suggestions, we’d love to hear from you. Feel free to reach out via email by completing the form on the right, or schedule an appointment to meet us in person at one of our listed contact points below. We're here to help just be sure to arrange a meeting in advance. All contact details are provided below."
        />
        <meta name="twitter:image" content="https://www.dnkre.com/logo.webp" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            mainEntity: {
              "@type": "ContactPage",
              name: "Contact Our Expert Real Estate Team | Get in Touch for Property Assistance",
              description:
                "Our professional team is available 24/7 to assist you. Whether you have questions, concerns, or suggestions, we’d love to hear from you. Feel free to reach out via email by completing the form on the right, or schedule an appointment to meet us in person at one of our listed contact points below. We're here to help just be sure to arrange a meeting in advance. All contact details are provided below.",
              keywords: keywords.join(", "),
              image: "https://www.dnkre.com/logo.webp",
            },
          })}
        </script>
      </Helmet>
      <BannerContact />
      <div className=" w-full bg-[#040406] flex items-center justify-center">
        <div className="container max-w-[1240px] py-5  px-4  md:py-9">
          <h1 className="m-auto w-[100%] sm:w-[90%] md:w-[70%] text-center">
            Contact DNK Real Estate for Luxury Property Consultation in Dubai.
          </h1>
          <p className="text-center m-auto w-[100%] md:w-[80%]">
            Looking for help or any support? We are available for you.
          </p>
        </div>
      </div>
      <div className=" w-full bg-[#040406] flex items-center justify-center">
        <div className="container max-w-[1240px] py-5  px-4  md:py-9">
          <div className="grid  md:grid-cols-2 relative">
            <div className="grid grid-cols-2">
              <div className="p-2">
                <img
                  src={Assist}
                  alt="info icon"
                  className="pb-4 m-auto md:m-0"
                />
                <h5 className="text-center md:text-left text-[#ffffff]">
                  Call Enquiry Assistance
                </h5>
                <p className="text-center md:text-left">
                  We are always available on call to assist you with any
                  questions you may have.
                </p>
              </div>
              <div className="p-2">
                <img
                  src={Consultation}
                  alt="info icon"
                  className="pb-4 m-auto md:m-0"
                />
                <h5 className="text-center md:text-left text-[#ffffff]">
                  Project Consultation
                </h5>
                <p className="text-center md:text-left">
                  We provide you with all investment consultations for your
                  goal.
                </p>
              </div>
              <div className="p-2">
                <img
                  src={Estimation}
                  alt="info icon"
                  className="pb-4  m-auto md:m-0"
                />
                <h5 className="text-center md:text-left text-[#ffffff]">
                  Project Estimation
                </h5>
                <p className="mb-0 text-center md:text-left">
                  You come to us with your dream, and we do all of the planning
                  and costing for you.
                </p>
              </div>
              <div className="p-2">
                <img
                  src={Shedule}
                  alt="info icon"
                  className="pb-4  m-auto md:m-0"
                />
                <h5 className="text-center md:text-left text-[#ffffff]">
                  Scheduling Appointments
                </h5>
                <p className="mb-0 text-center md:text-left">
                  We assist you in scheduling appointments whenever you wish to
                  meet us.
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      <iframe
        class="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.546332658738!2d55.26173537506647!3d25.184791932203755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6929773eb961%3A0xc341839da661e4e1!2sDNK%20Real%20Estate!5e0!3m2!1sen!2sae!4v1719237952819!5m2!1sen!2sae"
      ></iframe>
    </div>
  );
};

export default Contact;
