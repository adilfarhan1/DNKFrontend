import React from "react";
import Lbanner from "./componets/ADbanner";
import LFormBanner from "./componets/ADFormBanner";
import LaboutSection from "./componets/ADaboutSection";
import LimgSlider from "./componets/ADimgSlider";
import LFloorPlanComponent from "./componets/ADFloorPlanComponent";
import LpaymentPlan from "./componets/ADpaymentPlan";
import LAmenitiesImg from "./componets/ADAmenitiesImg";
import LDownloadSection from "./componets/ADDownloadSection";
import LBanner360 from "./componets/ADBanner360";
import LTalkSection from "./componets/ADTalkSection";
import { Helmet } from "react-helmet-async";
import ADMasterPlan from "./componets/ADMasterPlan";

export const HomeSobhaCenter = () => {
  return (
    <>
      <Helmet>
        <title>Sobha Central | Sobha Realty</title>
        <meta
          name="keywords"
          content="apartments at sheikh zayed road, Sobha Central by Sobha Realty, Sobha new projects, sobha dubai projects, luxury apartments in dubai, new apartments, 2 bedroom apartment dubai for sale, 1 bedroom apartment for sale in dubai, new projects in dubai, luxury apartments for sale in dubai"
        />
        <meta
          name="description"
          content="Sobha Central is a brand-new, mixed-use development by Sobha Realty, masterfully conceptualized to redefine modern urban living in Dubai. Located directly on Sheikh Zayed Road, this iconic project features six premium residential towers, including a record-breaking 360-meter tower."
        />
        <link rel="canonical" href="https://dnkre.com/sobha-centeral" />
        <meta name="author" content="DNK Real Estate" />
        <meta name="robots" content="index, follow" />
        <meta
          id="tgMetaURL"
          property="og:url"
          content="https://www.dnkre.com/sobha-centeral"
        />
        <meta
          id="tgMetaTYPE"
          property="og:type"
          content="https://www.dnkre.com/"
        />
        <meta
          id="tgMetaTITLE"
          property="og:title"
          content="Sobha Central | Sobha Realty"
        />
        <meta
          id="tgMetaDESC"
          property="og:description"
          content="Sobha Central is a brand-new, mixed-use development by Sobha Realty, masterfully conceptualized to redefine modern urban living in Dubai. Located directly on Sheikh Zayed Road, this iconic project features six premium residential towers, including a record-breaking 360-meter tower."
        />
        <meta
          property="og:image"
          content="https://dnkre.com/static/media/cover.86efb7b7c489d59a9c20.webp"
        />

        <link
          rel="preload"
          as="image"
          href="https://dnkre.com/static/media/cover.86efb7b7c489d59a9c20.webp"
          type="image/webp"
        ></link>
        <link rel="shortcut icon" href="https://www.dnkre.com/sobha-ic.webp" />
        <link
          rel="apple-touch-icon"
          href="https://www.dnkre.com/sobha-ic.webp"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sobha Central | Sobha Realty" />
        <meta
          name="twitter:description"
          content="Sobha Central is a brand-new, mixed-use development by Sobha Realty, masterfully conceptualized to redefine modern urban living in Dubai. Located directly on Sheikh Zayed Road, this iconic project features six premium residential towers, including a record-breaking 360-meter tower."
        />
        <meta
          name="twitter:image"
          content="https://dnkre.com/static/media/cover.86efb7b7c489d59a9c20.webp"
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
                    "@id": "https://dnkre.com",
                    name: "Home",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@id": `https://dnkre.com/off-plan-project`,
                    name: `Properties`,
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@id": `https://www.dnkre.com/news`,
                    name: `News`,
                  },
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  item: {
                    "@id": `https://dnkre.com/contact`,
                    name: `Contact`,
                  },
                },
              ],
              numberOfItems: 4,
            },

            // ItemPage Schema
            {
              "@context": "http://schema.org",
              "@type": "ItemPage",
              mainEntity: {
                "@type": "WebPage",
                name: "Sobha Central | Sobha Realty",
                description:
                  "Sobha Central is a brand-new, mixed-use development by Sobha Realty, masterfully conceptualized to redefine modern urban living in Dubai. Located directly on Sheikh Zayed Road, this iconic project features six premium residential towers, including a record-breaking 360-meter tower.",
                keywords:
                  "Address Villas the Oasis,  Address Villas by Emaar,  Address Villas the oasis by Emaar, Emaar Properties",
                url: "https://dnkre.com/sobha-centeral",
                image:
                  "https://dnkre.com/static/media/cover.86efb7b7c489d59a9c20.webp",

                offers: [
                  {
                    "@type": "Offer",
                    name: "Sobha Central | Sobha Realty",
                    availability: "https://schema.org/InStock",
                    price: "Call Us",
                    priceCurrency: "AED",
                    itemOffered: {
                      "@type": "House",
                      name: "Sobha Central | Sobha Realty",
                      logo: "https://dnkre.com/static/media/logoBT.a740ed5d37cc44a6159a.webp",
                      url: "https://dnkre.com/sobha-centeral",
                      image:
                        "https://dnkre.com/static/media/cover.86efb7b7c489d59a9c20.webp",
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
                        url: "https://dnkre.com/sobha-centeral",
                        name: "Emaar",
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
          <LimgSlider />
          <LFloorPlanComponent />
          {/* <ADMasterPlan /> */}
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

export default HomeSobhaCenter;
