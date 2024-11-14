import React, { useEffect, useState } from "react";
import BannerBuy from "./components/BannerBuy";
import ProjectGridList from "./components/ProjectGridList";
import TalkSection from "../home/components/TalkSection";
import { Helmet } from "react-helmet";

export const BuyProject = () => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setKeywords([
      "Properties for Sale",
      "Available For Sale",
      "Property List",
      "Buy Properties",
      "Buy Dubai Properties",
      "Buy Dubai Home",
      "Buy Apartments in Dubai",
      "Buy Villas in UAE",
      "Buy Ready to Move Property",
      "Buy Property",
      "Buy Apartments",
      "Buy Villas",
      "Buy Townhouses",
      "Buy Penthouses",
      "Properties for Sale in UAE",
      "Properties for Sale in Sharjah",
      "Apartments for Sale in Dubai",
      "Villa for sale in Dubai",
      "Townhouses for sale in Dubai",
      "Office Space for sale in Dubai",
      "Warehouse for sale in Dubai",
    ]);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Available for Sale - Apartment, Villa, Townhouse</title>
        <meta
          name="description"
          content="At DNK Real Estate, we simplify your property journey. As the UAE's leading real estate hub, we offer a vast selection of residential and commercial properties, ensuring that you find the perfect match for your needs. Whether you're seeking to invest, buy, or rent, our platform provides cutting-edge tools and expert guidance every step of the way. Explore the finest properties across the UAE with confidence, knowing that DNK Real Estate has you covered for all your real estate aspirations."
        />
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="canonical" href="https://dnkre.com/buy-project" />
        <meta
          property="og:title"
          content="Available for Sale - Apartment, Villa, Townhouse"
        />
        <meta
          property="og:description"
          content="At DNK Real Estate, we simplify your property journey. As the UAE's leading real estate hub, we offer a vast selection of residential and commercial properties, ensuring that you find the perfect match for your needs. Whether you're seeking to invest, buy, or rent, our platform provides cutting-edge tools and expert guidance every step of the way. Explore the finest properties across the UAE with confidence, knowing that DNK Real Estate has you covered for all your real estate aspirations."
        />
        <meta property="og:image" content="https://www.dnkre.com/logo.webp" />
        <meta property="og:url" content="https://dnkre.com/buy-project" />

        {/* -- Open Graph Meta Tags for WhatsApp and Social Media Sharing -- */}
        <meta
          property="og:title"
          content="Available for Sale - Apartment, Villa, Townhouse"
        />
        <meta
          property="og:description"
          content="At DNK Real Estate, we simplify your property journey. As the UAE's leading real estate hub, we offer a vast selection of residential and commercial properties, ensuring that you find the perfect match for your needs. Whether you're seeking to invest, buy, or rent, our platform provides cutting-edge tools and expert guidance every step of the way. Explore the finest properties across the UAE with confidence, knowing that DNK Real Estate has you covered for all your real estate aspirations."
        />
        <meta property="og:image" content="https://www.dnkre.com/logo.webp" />
        <meta property="og:url" content="https://dnkre.com/buy-project" />
        <meta property="og:type" content="https://dnkre.com/buy-project" />

        {/* -- Twitter Card for Sharing -- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Available for Sale - Apartment, Villa, Townhouse"
        />
        <meta
          name="twitter:description"
          content="At DNK Real Estate, we simplify your property journey. As the UAE's leading real estate hub, we offer a vast selection of residential and commercial properties, ensuring that you find the perfect match for your needs. Whether you're seeking to invest, buy, or rent, our platform provides cutting-edge tools and expert guidance every step of the way. Explore the finest properties across the UAE with confidence, knowing that DNK Real Estate has you covered for all your real estate aspirations."
        />
        <meta name="twitter:image" content="https://www.dnkre.com/logo.webp" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            mainEntity: {
              "@type": "BuyProjectPage",
              name: "Available for Sale - Apartment, Villa, Townhouse",
              description:
                "At DNK Real Estate, we simplify your property journey. As the UAE's leading real estate hub, we offer a vast selection of residential and commercial properties, ensuring that you find the perfect match for your needs. Whether you're seeking to invest, buy, or rent, our platform provides cutting-edge tools and expert guidance every step of the way. Explore the finest properties across the UAE with confidence, knowing that DNK Real Estate has you covered for all your real estate aspirations.",
              keywords: keywords.join(", "),
              image: "https://www.dnkre.com/logo.webp",
            },
          })}
        </script>
      </Helmet>
      <BannerBuy />
      <ProjectGridList />
      <TalkSection />
    </div>
  );
};

export default BuyProject;
