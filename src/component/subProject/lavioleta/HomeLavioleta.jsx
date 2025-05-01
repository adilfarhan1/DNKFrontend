import React from "react";
import Lbanner from "./componets/Lbanner";
import LFormBanner from "./componets/LFormBanner";
import LaboutSection from "./componets/LaboutSection";
import LimgSlider from "./componets/LimgSlider";
import LFloorPlanComponent from "./componets/LFloorPlanComponent";
import LpaymentPlan from "./componets/LpaymentPlan";
import LAmenitiesImg from "./componets/LAmenitiesImg";
import LDownloadSection from "./componets/LDownloadSection";
import LBanner360 from "./componets/LBanner360";
import LTalkSection from "./componets/LTalkSection";
import { Helmet } from "react-helmet-async";
import LPriceSection from "./componets/LPriceSection";

export const DamacIsland = () => {
  return (
    <>
      <Helmet>
        <title>Bahria Town at Dubai South by BT properties</title>
        <meta
          name="keywords"
          content="Bahria Town office Dubai,Bahria Town at Dubai South floor plan brochure, BT Holding, Bahria Town at Dubai South floor plan pdf, Bahria Town at Dubai South by BT Holding floor plan pdf, Bahria Town at Dubai South download pdf, Bahria Town at Dubai South by BT Holdingfloor plan brochure, BT Holding Bahria Town at Dubai South floor plan brochure"
        />
        <meta
          name="description"
          content="Download Floor Plan Brochure - Bahria Town at Dubai South | BT Holding | Dubai South | Will Be Updated Soon Apartment | Starting Price - Call Us | Payment Plan - Easy Payment Plan | short-term and long-term investments"
        />
        <link rel="canonical" href="https://dnkre.com/bahriatown-dubai" />
        <meta name="author" content="DNK Real Estate" />
        <meta name="robots" content="index, follow" />
        <meta
          id="tgMetaURL"
          property="og:url"
          content="https://www.dnkre.com/bahriatown-dubai"
        />
        <meta
          id="tgMetaTYPE"
          property="og:type"
          content="https://www.dnkre.com/"
        />
        <meta
          id="tgMetaTITLE"
          property="og:title"
          content="Bahria Town at Dubai South - Floor Plan | Download PDF"
        />
        <meta
          id="tgMetaDESC"
          property="og:description"
          content="Download Floor Plan Brochure - Bahria Town at Dubai South | BT Holding | Dubai South | Will Be Updated Soon Apartment | Starting Price - Call Us | Payment Plan - Easy Payment Plan | short-term and long-term investments"
        />
        <meta
          property="og:image"
          content="https://www.dnkre.com/bahriatown.webp"
        />

        <link
          rel="preload"
          as="image"
          href="https://dnkre.com/static/media/sectionImg1.e2b97faaf6e6c9e4fccd.webp"
          type="image/webp"
        ></link>
        <link rel="shortcut icon" href="https://www.dnkre.com/bahria.webp" />
        <link rel="apple-touch-icon" href="https://www.dnkre.com/bahria.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Bahria Town at Dubai South by BT properties"
        />
        <meta
          name="twitter:description"
          content="Download Floor Plan Brochure - Bahria Town at Dubai South | BT Holding | Dubai South | Will Be Updated Soon Apartment | Starting Price - Call Us | Payment Plan - Easy Payment Plan | short-term and long-term investments"
        />
        <meta
          name="twitter:image"
          content="https://www.dnkre.com/bahriatown.webp"
        />

        <script type="application/ld+json">
          {JSON.stringify([
            // Organization Schema
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              name: "DNK Real Estate",
              logo: "https://www.dnkre.com/logo.webp",
              url: "https://dnkre.com",
              sameAs: [
                "https://www.instagram.com/dnk_re/",
                "https://www.facebook.com/dnkrealestate1/",
                "https://www.linkedin.com/company/dnkrealestate/",
                "https://www.youtube.com/channel/UCKH7d3Sx2dkfb4pEXXaMpFA",
              ],
              telephone: "+971555769195",
              email: "info@dnkre.com",
              address:
                "Suite No: 603, Sama Building, Al Barsha 1 - Al Barsha, Dubai, United Arab Emirates",
            },

            // BreadcrumbList Schema
            {
              "@context": "http://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@id": "https://dnkre.com/bahriatown-dubai",
                    name: "Home",
                  },
                },
              ],
              numberOfItems: 1,
            },

            // ItemPage Schema
            {
              "@context": "http://schema.org",
              "@type": "ItemPage",
              mainEntity: {
                "@type": "WebPage",
                name: "Bahria Town at Dubai South by BT properties",
                description:
                  "Download Floor Plan Brochure - Bahria Town at Dubai South | BT Holding | Dubai South | Will Be Updated Soon Apartment | Starting Price - Call Us | Payment Plan - Easy Payment Plan | short-term and long-term investments",
                keywords:
                  "Bahria Town office Dubai,Bahria Town at Dubai South floor plan brochure, BT Holding, Bahria Town at Dubai South floor plan pdf, Bahria Town at Dubai South by BT Holding floor plan pdf, Bahria Town at Dubai South download pdf, Bahria Town at Dubai South by BT Holdingfloor plan brochure, BT Holding Bahria Town at Dubai South floor plan brochure",
                url: "https://dnkre.com/bahriatown-dubai",
                image: "https://www.dnkre.com/bahriatown.webp",

                offers: [
                  {
                    "@type": "Offer",
                    name: "Bahria Town at Dubai South by BT properties",
                    availability: "https://schema.org/InStock",
                    price: "Call Us",
                    priceCurrency: "AED",
                    itemOffered: {
                      "@type": "House",
                      name: "Bahria Town at Dubai South by BT properties",
                      logo: "https://dnkre.com/static/media/logoBT.a740ed5d37cc44a6159a.webp",
                      url: "https://dnkre.com/bahriatown-dubai",
                      image: "https://www.dnkre.com/bahriatown.webp",
                    },
                    offeredBy: {
                      "@type": "Organization",
                      name: "DNK Real Estate",
                      address:
                        "Suite No: 603, Sama Building, Al Barsha 1 - Al Barsha, Dubai, United Arab Emirates",
                      telephone: "+971555769195",
                      email: "info@dnkre.com",
                      image: "https://www.dnkre.com/logo.webp",
                      sponsor: {
                        "@type": "Organization",
                        url: "https://dnkre.com/bahriatown-dubai",
                        name: "BT Holding",
                      },
                    },
                  },
                ],
              },
            },
          ])}
        </script>
      </Helmet>
      <div className="bg-[#000]">
        <div className="overflow-hidden">
          <Lbanner />
          <LFormBanner />
          <LaboutSection />
          <LPriceSection />
          <LimgSlider />
          <LFloorPlanComponent />
          <LpaymentPlan />
          <LAmenitiesImg />
          <LDownloadSection />
          <LBanner360 />
          <LTalkSection />
        </div>
      </div>
    </>
  );
};

export default DamacIsland;
