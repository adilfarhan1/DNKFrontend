import React from "react";
import Lbanner from "./componets/GPbanner";
import LFormBanner from "./componets/GPFormBanner";
import LaboutSection from "./componets/GPaboutSection";
import LimgSlider from "./componets/GPimgSlider";
import LFloorPlanComponent from "./componets/GPFloorPlanComponent";
import LpaymentPlan from "./componets/GPpaymentPlan";
import LAmenitiesImg from "./componets/GPAmenitiesImg";
import LDownloadSection from "./componets/GPDownloadSection";
import LBanner360 from "./componets/GPBanner360";
import LTalkSection from "./componets/GPTalkSection";
import { Helmet } from "react-helmet-async";
import ADMasterPlan from "./componets/GPMasterPlan";

export const HomeGrandPolo = () => {
  return (
    <>
      <Helmet>
        <title>Grand Polo Club & Resort by Emaar in Dubai</title>
        <meta
          name="keywords"
          content="Grand polo club & Resort, Grand polo club & resort in dubai, Gand polo club by Emaar, Emaar Properties"
        />
        <meta
          name="description"
          content="Grand Polo Club &amp; Resort is a visionary 60 million square feet forthcoming project by renowned Emaar Properties offering expansive resort-style experience in Dubai."
        />
        <link
          rel="canonical"
          href="https://dnkre.com/address-villas-the-oasis"
        />
        <meta name="author" content="DNK Real Estate" />
        <meta name="robots" content="index, follow" />
        <meta
          id="tgMetaURL"
          property="og:url"
          content="https://www.dnkre.com/address-villas-the-oasis"
        />
        <meta
          id="tgMetaTYPE"
          property="og:type"
          content="https://www.dnkre.com/"
        />
        <meta
          id="tgMetaTITLE"
          property="og:title"
          content="Grand Polo Club & Resort by Emaar in Dubai"
        />
        <meta
          id="tgMetaDESC"
          property="og:description"
          content="Grand Polo Club &amp; Resort is a visionary 60 million square feet forthcoming project by renowned Emaar Properties offering expansive resort-style experience in Dubai."
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
        <link rel="shortcut icon" href="https://www.dnkre.com/emaar.webp" />
        <link rel="apple-touch-icon" href="https://www.dnkre.com/emaar.webp" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Grand Polo Club & Resort by Emaar in Dubai"
        />
        <meta
          name="twitter:description"
          content="Grand Polo Club &amp; Resort is a visionary 60 million square feet forthcoming project by renowned Emaar Properties offering expansive resort-style experience in Dubai."
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
                name: "Grand Polo Club & Resort by Emaar in Dubai",
                description:
                  "Grand Polo Club &amp; Resort is a visionary 60 million square feet forthcoming project by renowned Emaar Properties offering expansive resort-style experience in Dubai.",
                keywords:
                  "Grand polo club & Resort,  Grand polo club & resort in dubai, Gand polo club by Emaar, Emaar Properties",
                url: "https://dnkre.com/address-villas-the-oasis",
                image:
                  "https://dnkre.com/static/media/cover.86efb7b7c489d59a9c20.webp",

                offers: [
                  {
                    "@type": "Offer",
                    name: "Grand Polo Club & Resort by Emaar in Dubai",
                    availability: "https://schema.org/InStock",
                    price: "Call Us",
                    priceCurrency: "AED",
                    itemOffered: {
                      "@type": "House",
                      name: "Grand Polo Club & Resort by Emaar in Dubai",
                      logo: "https://dnkre.com/static/media/logoBT.a740ed5d37cc44a6159a.webp",
                      url: "https://dnkre.com/address-villas-the-oasis",
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
                        url: "https://dnkre.com/address-villas-the-oasis",
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

export default HomeGrandPolo;
