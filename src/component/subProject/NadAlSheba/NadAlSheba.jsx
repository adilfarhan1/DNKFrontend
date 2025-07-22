import React from "react";
import HeaderApt from "./component/NadHeader";
import { Helmet } from "react-helmet";
import BannerNad from "./component/BannerNad";
import FormNad from "./component/FormNad";
import { TypesNad } from "./component/TypesNad";
import KeyNad from "./component/KeyNad";
import MasterPlanNad from "./component/MasterPlanNad";
import PaymentPlanNad from "./component/PaymentPlanNad";
import DownloadNad from "./component/DownloadNad";
import TalkFooterNad from "./component/TalkFooterNad";
import FooterNad from "./component/FooterNad";

export const NadAlSheba = () => {
  return (
    <>
      <Helmet>
        <title>Nad Al Sheba Gardens</title>
        <meta
          name="description"
          content="Discover luxurious apartments in Dubai with stunning views, world-class amenities, and prime locations. Explore premium properties for sale and rent, tailored to your lifestyle in the heart of Dubai."
        />
        <meta
          name="keywords"
          content="nad al sheba villas dubai, nad al sheba gardens by meraas, luxury villas for sale in dubai, Luxury Dubai villas, Dubai property investment, nad al sheba villas, nad al sheba gardens villas for sale"
        />
        <link rel="canonical" href="https://www.dnkre.com/nad-al-sheba-gardens" />
        
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "website",
          "name": "Nad Al Sheba Gardens",
          "description": "Discover luxurious apartments in Dubai with stunning views, world-class amenities, and prime locations. Explore premium properties for sale and rent, tailored to your lifestyle in the heart of Dubai.",
          "keywords": "nad al sheba villas dubai, nad al sheba gardens by meraas, luxury villas for sale in dubai, Luxury Dubai villas, Dubai property investment, nad al sheba villas, nad al sheba gardens villas for sale",
          "url": "https://dnkre.com/static/media/meraas-logo.f197c8902e7921c7161e.webp",
          "logo": "https://dnkre.com/static/media/meraas-logo.f197c8902e7921c7161e.webp",
          "image": "https://dnkre.com/static/media/nad-popup.9e14f9a84bf7e3a55f41.webp",
          "telephone": "+971555769195"
        }
    `}
        </script>
      </Helmet>
      ;
      <HeaderApt />
      <BannerNad />
      <FormNad />
      <TypesNad />
      <KeyNad />
      <MasterPlanNad />
      <PaymentPlanNad />
      <DownloadNad />
      <FooterNad />
      <TalkFooterNad />
    </>
  );
};

export default NadAlSheba;
