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
import BestSaleStn from "../../other/apartments/component/BestSaleStn";

export const Home = () => {
  // Scroll to the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  return (
    <>
      <Helmet>
        <title>
          Best Offplan Projects - Apartments, Villas, Townhouses, Penthouses
        </title>
        <meta
          name="keywords"
          content="New Developments, Off Plan, New Developments in Dubai, Off Plan Projects, Offplan Projects, Off Plan in Dubai, Buy Apartments in Dubai, Buy Villas in Dubai, Buy Townhouses in Dubai, Sale Apartments in Dubai, Sale Villas in Dubai, Sale Townhouses in Dubai, DNK Real Estate, Properties in Dubai, Rent Properties in Dubai, Rent in Dubai, New Off Plan Project, Upcoming Off Plan Properties, New Launch Off-Plan Properties, Dubai Properties Projects, Dubai Real Estate, Real Estate Projects in Dubai, Real Estate Projects in UAE, DNK Real Estate, Real Estate Information, Dubai Developers, Dubai Communities, New Launches, Under Constructions, Ready to Move, Apartment, Villa, Townhouses, Studio, Business Space in Dubai, Office Space in Dubai, Office Space in Business bay Dubai, luxury apartments Dubai, Best Real Estate Company Dubai, Dubai Investment, Dubai Real Estate Market, Downtown Dubai."
        />
        <meta
          name="description"
          content="Looking to buy, sell luxury real estate in Dubai? Explore the best properties, apartments, and villas with DNK Real Estate – your trusted real estate partner. We are here to serve your concerns and with us, you don't have to look anywhere else."
        />
        <link rel="icon" href="https://www.dnkre.com/logo.webp" />
        <link rel="canonical" href="https://www.dnkre.com" />
        <meta name="author" content="DNK Real Estate" />

        <link rel="apple-touch-icon" href="https://www.dnkre.com/logo.webp" />

        {/* -- Open Graph Meta Tags for WhatsApp and Social Media Sharing -- */}
        <meta
          property="og:title"
          content="Best Offplan Projects - Apartments, Villas, Townhouses, Penthouses"
        />
        <meta
          property="og:description"
          content="Looking to buy, sell luxury real estate in Dubai? Explore the best properties, apartments, and villas with DNK Real Estate – your trusted real estate partner. We are here to serve your concerns and with us, you don't have to look anywhere else."
        />
        <meta property="og:image" content="https://www.dnkre.com/logo.webp" />
        <meta property="og:url" content="https://www.dnkre.com" />
        <meta property="og:type" content="https://www.dnkre.com" />

        {/* -- Twitter Card for Sharing -- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Offplan Projects - Apartments, Villas, Townhouses, Penthouses"
        />
        <meta
          name="twitter:description"
          content="Looking to buy, sell luxury real estate in Dubai? Explore the best properties, apartments, and villas with DNK Real Estate – your trusted real estate partner. We are here to serve your concerns and with us, you don't have to look anywhere else."
        />
        <meta name="twitter:image" content="https://www.dnkre.com/logo.webp" />

        {/* Schema Markup for Website */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "#website",
            headline:
              "Best Offplan Projects - Apartments, Villas, Townhouses, Penthouses",
            name: "DNK Real Estate",
            alternateName: ["DNK Real Estate", "dnkre.com"],
            keywords:
              "New Developments, Off Plan, New Developments in Dubai, Off Plan Projects, Offplan Projects, Off Plan in Dubai, Buy Apartments in Dubai, Buy Villas in Dubai, Buy Townhouses in Dubai, Sale Apartments in Dubai, Sale Villas in Dubai, Sale Townhouses in Dubai, DNK Real Estate, Properties in Dubai, Rent Properties in Dubai, Rent in Dubai, New Off Plan Project, Upcoming Off Plan Properties, New Launch Off-Plan Properties, Dubai Properties Projects, Dubai Real Estate, Real Estate Projects in Dubai, Real Estate Projects in UAE, DNK Real Estate, Real Estate Information, Dubai Developers, Dubai Communities, New Launches, Under Constructions, Ready to Move, Apartment, Villa, Townhouses, Studio, Business Space in Dubai, Office Space in Dubai, Office Space in Business bay Dubai, luxury apartments Dubai, Best Real Estate Company Dubai, Dubai Investment, Dubai Real Estate Market, Downtown Dubai.",
            image: "https://www.dnkre.com/logo.webp",
            description:
              "Looking to buy, sell luxury real estate in Dubai? Explore the best properties, apartments, and villas with DNK Real Estate – your trusted real estate partner. We are here to serve your concerns and with us, you don't have to look anywhere else.",
            url: "https://www.dnkre.com",
            telephone: "+971555769195",
            inLanguage: {
              "@type": "Language",
              name: ["Arabic", "English", "Hindi"],
            },
            copyrightHolder: {
              "@type": "Organization",
              name: "DNK Real Estate",
              alternateName: ["DNK Real Estate", "dnkre.com"],
              logo: "https://www.dnkre.com/logo.webp",
              url: "https://www.dnkre.com/",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+971555769195",
                contactType: "Sales",
                email: "info@dnkre.com",
                areaServed: "United Arab Emirates",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "AE",
                streetAddress: "Suite No. 2602, Silver Tower, Marasi Drive",
                addressLocality: "Business Bay",
                addressRegion: "Dubai",
                postalCode: "26048",
              },
            },
          })}
        </script>

        {/* Schema Markup for Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            name: "dnkre.com",
            alternateName: ["DR", "D-R", "DNK Real Estate", "dnkre.com"],
            logo: "https://www.dnkre.com/logo.webp",
            url: "https://www.dnkre.com/",
            sameAs: [
              "https://www.instagram.com/dnk_re/",
              "https://www.facebook.com/dnkrealestate1/",
              "https://www.linkedin.com/company/dnkrealestate/",
              "https://www.youtube.com/channel/UCKH7d3Sx2dkfb4pEXXaMpFA",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+971555769195",
              contactType: "Sales",
              email: "info@dnkre.com",
              areaServed: "United Arab Emirates",
            },
            address: {
              "@type": "PostalAddress",
              addressCountry: "AE",
              streetAddress: "Suite No. 2602, Silver Tower, Marasi Drive",
              addressLocality: "Business Bay",
              addressRegion: "Dubai",
              postalCode: "26048",
            },
          })}
        </script>
      </Helmet>

      <div>
        <BannerHome />
        <div>
          <FeatureProject />
          <AboutSection />
          <ServiceSection />
          <TeamSection />
          <OurProcess />
          <ReviewSection />
          <PartnerSection />
          <BestSaleStn />
          <TalkSection />
        </div>
      </div>
    </>
  );
};

export default Home;
