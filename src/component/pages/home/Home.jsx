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
import BestSaleStn from "../../other/apartments/component/BestSaleStn";
import { Helmet } from "react-helmet-async";
import NewsList from "../news/components/NewsList";

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
          content="New Off-Plan Developments in Dubai, 
              Latest Dubai Real Estate Projects, 
              Upcoming Luxury Villas in Dubai, 
              Buy Off-Plan Apartments in Dubai, 
              Invest in Dubai Properties, 
              Luxury Townhouses for Sale in Dubai, 
              Best Off-Plan Properties in UAE, 
              Affordable Apartments in Dubai, 
              High-End Villas in Downtown Dubai, 
              Premium Real Estate in Dubai, 
              Dubai Marina Apartments for Sale, 
              Dubai Investment Opportunities in Real Estate, 
              Ready-to-Move Properties in Dubai, 
              Modern Office Spaces in Business Bay, 
              Family-Friendly Communities in Dubai, 
              Waterfront Villas for Sale in Dubai, 
              Spacious Townhouses in Dubai for Families, 
              Luxury Real Estate Projects in Dubai, 
              Exclusive Off-Plan Launches in Dubai, 
              Top Dubai Developers and Projects, 
              Dubai's Real Estate Market Insights, 
              Rent Luxury Apartments in Dubai Marina, 
              Dubai Creek Waterfront Properties, 
              Ultra-Modern Apartments in Dubai Hills Estate, 
              New Villas in Arabian Ranches Dubai, 
              Penthouse Apartments for Sale in Dubai, 
              Commercial Spaces in Downtown Dubai, 
              Investment-Friendly Off-Plan Projects, 
              Affordable Housing in Dubai for Expats, 
              Luxury Studio Apartments in Dubai, 
              Best Areas to Buy Property in Dubai, 
              Exclusive Residential Properties in Dubai, 
              Dubai's Most Sought-After Communities, 
              Downtown Dubai Real Estate for Investors, 
              Luxury Rentals in Palm Jumeirah, 
              Golf Course Villas in Dubai, 
              Buy Property Near Burj Khalifa, 
              Off-Plan Townhouses in Dubai South, 
              Beachfront Apartments in Dubai for Sale, 
              High ROI Real Estate Investments in Dubai"
        />
        <meta
          name="description"
          content="Discover your ideal property in Dubai with the help of our seasoned real estate experts. Whether you're looking for a dream home or a profitable investment opportunity, we provide personalized guidance to help you make the right choice."
        />
        <link rel="canonical" href="https://www.dnkre.com" />
        <meta name="author" content="DNK Real Estate" />

        <meta name="robots" content="index, follow" />

        <meta property="og:url" content="https://www.dnkre.com" />
        <meta property="og:type" content="https://www.dnkre.com" />
        <meta
          property="og:title"
          content="Best Offplan Projects - Apartments, Villas, Townhouses, Penthouses"
        />
        <meta
          property="og:description"
          content="Discover your ideal property in Dubai with the help of our seasoned real estate experts. Whether you're looking for a dream home or a profitable investment opportunity, we provide personalized guidance to help you make the right choice."
        />
        <meta property="og:image" content="https://www.dnkre.com/logo.webp" />

        <link rel="shortcut icon" href="https://www.dnkre.com/logo.ico" />

        <link rel="apple-touch-icon" href="https://www.dnkre.com/logo.webp" />

        {/* -- Twitter Card for Sharing -- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DNK Real Estate" />
        <meta
          name="twitter:description"
          content="Discover your ideal property in Dubai with the help of our seasoned real estate experts. Whether you're looking for a dream home or a profitable investment opportunity, we provide personalized guidance to help you make the right choice."
        />
        <meta name="twitter:image" content="https://www.dnkre.com/logo.webp" />
        <meta name="twitter:label1" content="Written by DNK Real Estate" />
        <meta name="twitter:data1" content=""></meta>
        <meta name="twitter:label2" content="Time to read"></meta>
        <meta name="generator" content="DNK Real Estate"></meta>
        <meta
          name="msapplication-TitleImage"
          content="https://www.dnkre.com/logo.webp"
        ></meta>

        {/* Schema Markup for Website */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "#website",
            headline:
              "Best Offplan Projects - Apartments, Villas, Townhouses, Penthouses",
            url: "https://www.dnkre.com",
            name: "DNK Real Estate",
            alternateName: ["DNK Real Estate", "dnkre.com"],
            keywords:
              "New Developments, Off Plan, New Developments in Dubai, Off Plan Projects, Offplan Projects, Off Plan in Dubai, Buy Apartments in Dubai, Buy Villas in Dubai, Buy Townhouses in Dubai, Sale Apartments in Dubai, Sale Villas in Dubai, Sale Townhouses in Dubai, DNK Real Estate, Properties in Dubai, Rent Properties in Dubai, Rent in Dubai, New Off Plan Project, Upcoming Off Plan Properties, New Launch Off-Plan Properties, Dubai Properties Projects, Dubai Real Estate, Real Estate Projects in Dubai, Real Estate Projects in UAE, DNK Real Estate, Real Estate Information, Dubai Developers, Dubai Communities, New Launches, Under Constructions, Ready to Move, Apartment, Villa, Townhouses, Studio, Business Space in Dubai, Office Space in Dubai, Office Space in Business bay Dubai, luxury apartments Dubai, Best Real Estate Company Dubai, Dubai Investment, Dubai Real Estate Market, Downtown Dubai.",
            description:
              "Discover your ideal property in Dubai with the help of our seasoned real estate experts. Whether you're looking for a dream home or a profitable investment opportunity, we provide personalized guidance to help you make the right choice.",
            image: "https://www.dnkre.com/logo.webp",
            inLanguage: {
              "@type": "Language",
              name: ["Arabic", "English", "Hindi"],
            },
            copyrightHolder: {
              "@type": "Organization",
              name: "DNK Real Estate",
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
          <NewsList />
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
