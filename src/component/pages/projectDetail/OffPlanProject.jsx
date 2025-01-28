import React, { useEffect, useState } from "react";
import BannerBuy from "./components/BannerBuy";
import TalkSection from "../home/components/TalkSection";
import { OffPlanProjectGridList } from "./components/OffPlanProjectGridList";
import { Helmet } from "react-helmet-async";

export const OffPlanProject = () => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setKeywords([
      "Latest",
      "Off Plan Projects",
      "Latest Offplan Projects",
      "Developments in Dubai",
      "Buy Dubai Properties",
      "DNK Real Estate",
      "New Off Plan Project",
      "Upcoming Off Plan Projects",
      "Dubai Properties Projects",
      "Dubai Real Estate",
      "Real Estate Projects in Dubai",
      "New Launches",
      "Under Constructions",
      "Ready to Move",
      "Latest Off Plan Projects in Dubai",
      "Latest Properties in Dubai",
      "New Launch Properties",
      "New Launch",
      "Dubai",
    ]);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Latest Off Plan Projects - Developments in Dubai</title>
        <meta
          name="description"
          content="Explore the Latest Off-Plan Projects and Developments in Dubai with DNK Real Estate. Our platform offers exclusive access to some of the most desirable new developments in the city, providing exceptional opportunities for both investors and homebuyers. Whether you’re seeking contemporary apartments, luxurious villas, or prime commercial spaces, our listings showcase innovative designs, premium amenities, and flexible payment plans. Step into the future of Dubai’s real estate market and claim your place in one of the world’s most dynamic cities with DNK Real Estate."
        />
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="canonical" href="https://www.dnkre.com/off-plan-project" />
        <meta
          property="og:title"
          content="Latest Off Plan Projects - Developments in Dubai"
        />
        <meta
          property="og:description"
          content="Explore the Latest Off-Plan Projects and Developments in Dubai with DNK Real Estate. Our platform offers exclusive access to some of the most desirable new developments in the city, providing exceptional opportunities for both investors and homebuyers. Whether you’re seeking contemporary apartments, luxurious villas, or prime commercial spaces, our listings showcase innovative designs, premium amenities, and flexible payment plans. Step into the future of Dubai’s real estate market and claim your place in one of the world’s most dynamic cities with DNK Real Estate."
        />
        <meta property="og:image" content="https://www.dnkre.com/logo.webp" />
        <meta
          property="og:url"
          content="https://www.dnkre.com/off-plan-project"
        />

        {/* -- Open Graph Meta Tags for WhatsApp and Social Media Sharing -- */}
        <meta
          property="og:title"
          content="Latest Off Plan Projects - Developments in Dubai"
        />
        <meta
          property="og:description"
          content="Explore the Latest Off-Plan Projects and Developments in Dubai with DNK Real Estate. Our platform offers exclusive access to some of the most desirable new developments in the city, providing exceptional opportunities for both investors and homebuyers. Whether you’re seeking contemporary apartments, luxurious villas, or prime commercial spaces, our listings showcase innovative designs, premium amenities, and flexible payment plans. Step into the future of Dubai’s real estate market and claim your place in one of the world’s most dynamic cities with DNK Real Estate."
        />
        <meta property="og:image" content="https://www.dnkre.com/logo.webp" />
        <meta
          property="og:url"
          content="https://www.dnkre.com/off-plan-project"
        />
        <meta property="og:type" content="product" />

        {/* -- Twitter Card for Sharing -- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Latest Off Plan Projects - Developments in Dubai"
        />
        <meta
          name="twitter:description"
          content="Explore the Latest Off-Plan Projects and Developments in Dubai with DNK Real Estate. Our platform offers exclusive access to some of the most desirable new developments in the city, providing exceptional opportunities for both investors and homebuyers. Whether you’re seeking contemporary apartments, luxurious villas, or prime commercial spaces, our listings showcase innovative designs, premium amenities, and flexible payment plans. Step into the future of Dubai’s real estate market and claim your place in one of the world’s most dynamic cities with DNK Real Estate."
        />
        <meta name="twitter:image" content="https://www.dnkre.com/logo.webp" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "product",
            mainEntity: {
              "@type": "product",
              name: "Latest Off Plan Projects - Developments in Dubai",
              description:
                "Explore the Latest Off-Plan Projects and Developments in Dubai with DNK Real Estate. Our platform offers exclusive access to some of the most desirable new developments in the city, providing exceptional opportunities for both investors and homebuyers. Whether you’re seeking contemporary apartments, luxurious villas, or prime commercial spaces, our listings showcase innovative designs, premium amenities, and flexible payment plans. Step into the future of Dubai’s real estate market and claim your place in one of the world’s most dynamic cities with DNK Real Estate.",
              keywords: keywords.join(", "),
              image: "https://www.dnkre.com/logo.webp",
              url: "https://www.dnkre.com/off-plan-project",
            },
          })}
        </script>
      </Helmet>
      <BannerBuy />
      <OffPlanProjectGridList />
      <TalkSection />
    </div>
  );
};

export default OffPlanProject;
