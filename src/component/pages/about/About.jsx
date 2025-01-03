import React, { useState } from "react";
import AboutBanner from "./components/AboutBanner";
import AboutDetail from "./components/AboutDetail";
import TeamSection from "../home/components/TeamSection";
import OurProcess from "../home/components/OurProcess";
import ReviewSection from "../home/components/ReviewSection";
import PartnerSection from "../home/components/PartnerSection";
import TalkSection from "../home/components/TalkSection";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

export const About = () => {
  const [keywords, setKeywords] = useState([]);

  // Scroll to the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Fetch keywords from an API or set them directly
    setKeywords([
      "About us",
      "DNK Real Estate",
      "DNK Properties",
      "About DNK Company",
      " About DNK Real Estate",
      "About DNK Dubai",
      "Marketing Team",
      "team",
      "values",
      "Vision",
      "Mission",
      "Friends",
      "Love",
      "Team Work",
    ]);
  }, []);
  return (
    <div>
      <Helmet>
        <title>About Us - Buy and Sale Property Dubai</title>
        <meta name="keywords" content={keywords.join(", ")} />
        <meta
          name="description"
          content="DNK is the harmony, dream and friendship between Dann Leslie and Waseem Khursheed who placed their trust and confidence in each other and believed in each other to make a tangible difference in people's lives, in their communities, and this ambitious commitment and burning passion endured them through life's challenges and helped them emerge as successful. Hence, they understand the importance of trust, confidence, and commitment extremely well. These are the tenets of DNK morals and each member of the DNK family swears to extend the same values to every client, investor, and shareholder they cross paths with. DNK Real Estate, we are dedicated to understanding the unique needs of our clients, listening to their stories, and empathetically guiding them toward the perfect home. Through unwavering commitment and world-class service, we transform dreams into reality, nurturing investments and safeguarding the vision of families, entrepreneurs, and dreamers."
        />

        {/* -- Open Graph Meta Tags for WhatsApp and Social Media Sharing -- */}
        <meta
          property="og:title"
          content="About Us - Buy and Sale Property Dubai"
        />
        <meta
          property="og:description"
          content="DNK is the harmony, dream and friendship between Dann Leslie and Waseem Khursheed who placed their trust and confidence in each other and believed in each other to make a tangible difference in people's lives, in their communities, and this ambitious commitment and burning passion endured them through life's challenges and helped them emerge as successful. Hence, they understand the importance of trust, confidence, and commitment extremely well. These are the tenets of DNK morals and each member of the DNK family swears to extend the same values to every client, investor, and shareholder they cross paths with. DNK Real Estate, we are dedicated to understanding the unique needs of our clients, listening to their stories, and empathetically guiding them toward the perfect home. Through unwavering commitment and world-class service, we transform dreams into reality, nurturing investments and safeguarding the vision of families, entrepreneurs, and dreamers."
        />
        <meta property="og:image" content="https://www.dnkre.com/logo.webp" />
        <meta property="og:url" content="https://www.dnkre.com/about" />
        <meta property="og:type" content="website" />

        {/* -- Twitter Card for Sharing -- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Us - Buy and Sale Property Dubai"
        />
        <meta
          name="twitter:description"
          content="DNK is the harmony, dream and friendship between Dann Leslie and Waseem Khursheed who placed their trust and confidence in each other and believed in each other to make a tangible difference in people's lives, in their communities, and this ambitious commitment and burning passion endured them through life's challenges and helped them emerge as successful. Hence, they understand the importance of trust, confidence, and commitment extremely well. These are the tenets of DNK morals and each member of the DNK family swears to extend the same values to every client, investor, and shareholder they cross paths with. DNK Real Estate, we are dedicated to understanding the unique needs of our clients, listening to their stories, and empathetically guiding them toward the perfect home. Through unwavering commitment and world-class service, we transform dreams into reality, nurturing investments and safeguarding the vision of families, entrepreneurs, and dreamers."
        />
        <meta name="twitter:image" content="https://www.dnkre.com/logo.webp" />
      </Helmet>
      <AboutBanner />
      <AboutDetail />
      <TeamSection />
      <OurProcess />
      <ReviewSection />
      <PartnerSection />
      <TalkSection />
    </div>
  );
};

export default About;
