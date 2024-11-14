import React, { useEffect, useState } from "react";
import BannerBuy from "./components/BannerBuy";
import TalkSection from "../home/components/TalkSection";
import SellProjectGrid from "../projectDetail/components/SellProjectGrid";
import { Helmet } from "react-helmet";

export const SellProject = () => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setKeywords([
      "Sell Villa in Dubai",
      "Sell Apartment in Dubai",
      "Sell Commercial Space in Dubai",
      "Dubai Property Sales",
      "Real Estate Selling in Dubai",
      "Luxury Villas for Sale Dubai",
      "Apartments for Sale in Dubai",
      "Commercial Real Estate Dubai",
      "Property Valuation Dubai",
      "Sell My Property Dubai",
      "Dubai Real Estate Market",
      "Maximize Property Value Dubai",
      "Dubai Property Listings",
      "Sell Residential Property Dubai",
      "Investment Properties Dubai",
      "Dubai Real Estate Agents",
      "Property Selling Tips Dubai",
      "Quick Property Sales Dubai",
    ]);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Sell a Property profitable in Dubai</title>
        <meta
          name="description"
          content="Unlock Your Property's Full Potential with DNK Real Estate. Whether you’re selling a villa, apartment, or commercial space, our expert team is dedicated to ensuring a seamless and profitable process. Leveraging in-depth market insights, strategic marketing techniques, and a vast network of qualified buyers, we empower you to secure the best possible deal in Dubai’s dynamic real estate market. Trust DNK Real Estate to guide you toward a successful sale and maximize the value of your property."
        />
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="canonical" href="https://dnkre.com/sell-project" />
        <meta
          property="og:title"
          content="Sell a Property profitable in Dubai"
        />
        <meta
          property="og:description"
          content="Unlock Your Property's Full Potential with DNK Real Estate. Whether you’re selling a villa, apartment, or commercial space, our expert team is dedicated to ensuring a seamless and profitable process. Leveraging in-depth market insights, strategic marketing techniques, and a vast network of qualified buyers, we empower you to secure the best possible deal in Dubai’s dynamic real estate market. Trust DNK Real Estate to guide you toward a successful sale and maximize the value of your property."
        />
        <meta property="og:image" content="https://www.dnkre.com/logo.webp" />
        <meta property="og:url" content="https://dnkre.com/sell-project" />

        {/* -- Open Graph Meta Tags for WhatsApp and Social Media Sharing -- */}
        <meta
          property="og:title"
          content="Sell a Property profitable in Dubai"
        />
        <meta
          property="og:description"
          content="Unlock Your Property's Full Potential with DNK Real Estate. Whether you’re selling a villa, apartment, or commercial space, our expert team is dedicated to ensuring a seamless and profitable process. Leveraging in-depth market insights, strategic marketing techniques, and a vast network of qualified buyers, we empower you to secure the best possible deal in Dubai’s dynamic real estate market. Trust DNK Real Estate to guide you toward a successful sale and maximize the value of your property."
        />
        <meta property="og:image" content="https://www.dnkre.com/logo.webp" />
        <meta property="og:url" content="https://dnkre.com/sell-project" />
        <meta property="og:type" content="https://dnkre.com/sell-project" />

        {/* -- Twitter Card for Sharing -- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sell a Property profitable in Dubai"
        />
        <meta
          name="twitter:description"
          content="Unlock Your Property's Full Potential with DNK Real Estate. Whether you’re selling a villa, apartment, or commercial space, our expert team is dedicated to ensuring a seamless and profitable process. Leveraging in-depth market insights, strategic marketing techniques, and a vast network of qualified buyers, we empower you to secure the best possible deal in Dubai’s dynamic real estate market. Trust DNK Real Estate to guide you toward a successful sale and maximize the value of your property."
        />
        <meta name="twitter:image" content="https://www.dnkre.com/logo.webp" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            mainEntity: {
              "@type": "SellPropertyPage",
              name: "Sell a Property profitable in Dubai",
              description:
                "Unlock Your Property's Full Potential with DNK Real Estate. Whether you’re selling a villa, apartment, or commercial space, our expert team is dedicated to ensuring a seamless and profitable process. Leveraging in-depth market insights, strategic marketing techniques, and a vast network of qualified buyers, we empower you to secure the best possible deal in Dubai’s dynamic real estate market. Trust DNK Real Estate to guide you toward a successful sale and maximize the value of your property.",
              keywords: keywords.join(", "),
              image: "https://www.dnkre.com/logo.webp",
            },
          })}
        </script>
      </Helmet>
      <BannerBuy />
      <SellProjectGrid />
      <TalkSection />
    </div>
  );
};

export default SellProject;
