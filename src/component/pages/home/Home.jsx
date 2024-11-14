import React from "react";
import AboutSection from "./components/AboutSection";
import BannerHome from "./components/Banner";
import FeatureProject from "./components/FeatureProject";
import ServiceSection from "./components/ServiceSection";
import TeamSection from "./components/TeamSection";
import OurProcess from "./components/OurProcess";
import ReviewSection from "./components/ReviewSection";
import PartnerSection from "./components/PartnerSection";
import TalkSection from "./components/TalkSection";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export const Home = () => {
  // Scroll to the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "RealEstateCompany",
        "name": "Leading Real Estate Company in Dubai",
        "url": "https://dnkre.com",
        "logo": "https://www.dnkre.com/logo192.png",
        "image": "https://www.dnkre.com/logo192.png",
        "sameAs": [
          "https://www.facebook.com/dnkrealestate1/",
          "https://www.instagram.com/dnk_re/",
          "https://www.linkedin.com/company/dnkrealestate/mycompany/"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Silver Tower - Suite No: 2602 - Marasi Dr - Business Bay - Dubai",
          "addressLocality": "Silver Tower - Suite No: 2602 - Marasi Dr - Business Bay - Dubai",
          "addressRegion": "Dubai",
          "postalCode": "00000",
          "addressCountry": "UAE"
        },
        "description": "Leading real estate company in Dubai, specializing in luxury properties, affordable apartments, off-plan developments, waterfront villas, high-rise apartments, and investment opportunities. Offering premium and budget-friendly real estate for sale in top locations like Dubai Marina, Downtown Dubai, Palm Jumeirah, Business Bay, Jumeirah Village Circle (JVC), Dubai Hills Estate, Arabian Ranches, and Meydan. Providing the best deals on properties with low prices and exclusive offers. Expert guidance for property buyers, investors, and those looking to purchase in Dubai’s fast-growing real estate market. Recognized as the best real estate company in Dubai, offering exceptional services for buyers and investors.",
        "telephone": "+971 123 456 789"
      }
    `}
        </script>
      </Helmet>

      <div>
        <BannerHome />
        <div>
          <AboutSection />
          <FeatureProject />
          <ServiceSection />
          <TeamSection />
          <OurProcess />
          <ReviewSection />
          <PartnerSection />
          <TalkSection />
        </div>
      </div>
    </>
  );
};

export default Home;
