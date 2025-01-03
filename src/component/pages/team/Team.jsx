import React, { useEffect, useState } from "react";
import AboutBanner from "../about/components/AboutBanner";
import OurProcess from "../home/components/OurProcess";
import TeamList from "./components/TeamList";
import ReviewSection from "../home/components/ReviewSection";
import PartnerSection from "../home/components/PartnerSection";
import TalkSection from "../home/components/TalkSection";
import { Helmet } from "react-helmet";

export const Team = () => {
  const [keywords, setKeywords] = useState([]);

  // Scroll to the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Fetch keywords from an API or set them directly
    setKeywords([
      "Real estate team",
      "Dubai real estate experts",
      "Property buying and selling",
      "Real estate professionals",
      "Top real estate agents",
      "Experienced real estate agents",
      "Real estate services",
      "Property investment advisors",
      "Real estate guidance",
      "Best real estate team in Dubai",
      "Buy, sell, invest in real estate",
      "Residential and commercial real estate",
      "Dubai property market experts",
      "Real estate consultants",
      "Personalized real estate services",
      "joining a real estate team",
    ]);
  }, []);

  return (
    <div>
      <Helmet>
        <title>
          Meet The Top Real Estate Agents in Dubai | Buy and Sale Property Dubai
        </title>
        <meta name="keywords" content={keywords.join(", ")} />
        <meta
          name="description"
          content="Meet our expert real estate team dedicated to helping you buy, sell, or invest in properties. With years of Dubai market knowledge and personalized service, we ensure a smooth real estate experience. Contact us for professional guidance and start your property journey today."
        />

        {/* -- Open Graph Meta Tags for WhatsApp and Social Media Sharing -- */}
        <meta
          property="og:title"
          content="Meet The Top Real Estate Agents in Dubai | Buy and Sale Property Dubai"
        />
        <meta
          property="og:description"
          content="Meet our expert real estate team dedicated to helping you buy, sell, or invest in properties. With years of Dubai market knowledge and personalized service, we ensure a smooth real estate experience. Contact us for professional guidance and start your property journey today."
        />
        <meta property="og:image" content="https://www.dnkre.com/logo.webp" />
        <meta property="og:url" content="https://www.dnkre.com/team" />
        <meta property="og:type" content="WebSite" />

        {/* -- Twitter Card for Sharing -- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Meet The Top Real Estate Agents in Dubai | Buy and Sale Property Dubai"
        />
        <meta
          name="twitter:description"
          content="Meet our expert real estate team dedicated to helping you buy, sell, or invest in properties. With years of Dubai market knowledge and personalized service, we ensure a smooth real estate experience. Contact us for professional guidance and start your property journey today."
        />
        <meta name="twitter:image" content="https://www.dnkre.com/logo.webp" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            mainEntity: {
              "@type": "WebSite",
              name: `Meet The Top Real Estate Agents in Dubai | Buy and Sale Property Dubai`,
              description: `Meet our expert real estate team dedicated to helping you buy, sell, or invest in properties. With years of Dubai market knowledge and personalized service, we ensure a smooth real estate experience. Contact us for professional guidance and start your property journey today.`,
              keywords: keywords.join(", "),
              image: `https://www.dnkre.com/logo.webp`,
              url: `https://www.dnkre.com/team`,
            },
          })}
        </script>
      </Helmet>
      <AboutBanner />
      <TeamList />
      <OurProcess />
      <ReviewSection />
      <PartnerSection />
      <TalkSection />
    </div>
  );
};

export default Team;
