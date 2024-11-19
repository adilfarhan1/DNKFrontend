import React from "react";
import LHeader from "./componets/LHeader";
import LFooter from "./componets/LFooter";
import HomeLavioleta from "./HomeLavioleta";
import { Helmet } from "react-helmet";

export const LavioletaLayout = () => {
  <Helmet>
    <title>
      Lavioleta 2 | Dubai Properties - Apartments, Villas, Townhouses,
      Penthouses
    </title>
    <link rel="icon" href="https://www.dnkre.com/dubaiproperties.webp" />
    <link rel="canonical" href="https://dnkre.com/lavioleta/dubaiproperties" />
    <meta name="author" content="Dubai Properties" />
    <link
      rel="apple-touch-icon"
      href="https://www.dnkre.com/dubaiproperties.webp"
    />
    <meta
      property="og:title"
      content="Lavioleta 2 | Dubai Properties - Apartments, Villas, Townhouses,
      Penthouses"
    />

    <meta
      property="og:image"
      content="https://www.dnkre.com/dubaiproperties.webp"
    />

    <meta name="twitter:card" content="summary_large_image" />
    <meta
      name="twitter:title"
      content="Lavioleta 2 | Dubai Properties - Apartments, Villas, Townhouses,
      Penthouses"
    />

    <meta
      name="twitter:image"
      content="https://www.dnkre.com/dubaiproperties.webp"
    />

    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "#website",
        headline:
          "Lavioleta 2 | Dubai Properties - Apartments, Villas, Townhouses, Penthouses",
        image: "https://www.dnkre.com/dubaiproperties.webp",
        url: "https://dnkre.com/lavioleta/dubaiproperties",
        telephone: "+971 45 546 904",
        inLanguage: {
          "@type": "Language",
          name: ["Arabic", "English", "Hindi"],
        },
        copyrightHolder: {
          "@type": "Organization",
          name: "La Violeta 2",
          logo: "https://www.dnkre.com/dubaiproperties.webp",
          url: "https://dnkre.com/lavioleta/dubaiproperties",
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+971 55 576 9195",
            contactType: "Sales",
            email: "info@dnkre.com",
            areaServed: "United Arab Emirates",
          },
          address: {
            "@type": "PostalAddress",
            addressCountry: "United Arab Emirates",
            streetAddress: "Silver Tower",
            addressLocality: "Merasi Drive, Business Bay, Dubai",
            addressRegion: "Dubai",
            postalCode: "500001",
            streetAddress: "Marasi Dive - Business Bay",
          },
        },
      })}
    </script>
  </Helmet>;
  return (
    <div className="layout-body bg-[#000]">
      <LHeader />
      <HomeLavioleta />
      <LFooter />
    </div>
  );
};

export default LavioletaLayout;
