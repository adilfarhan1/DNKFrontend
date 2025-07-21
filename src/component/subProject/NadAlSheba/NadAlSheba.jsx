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
          content="Dubai apartments for sale, Apartments in Dubai, Luxury apartments Dubai, Dubai apartment rentals, Affordable apartments in Dubai, Buy apartment in Dubai, Dubai property investment, Waterfront apartments Dubai, High-rise apartments in Dubai, Dubai apartments with sea view, Downtown Dubai apartments, Apartments near Dubai Marina, Studio apartments in Dubai, Family apartments in Dubai"
        />
        <script type="application/ld+json">
          {`
        {
          "@context": "https://schema.org",
          "@type": "website",
          "name": "Best Apartments - Dubai",
          "description": "Discover luxurious apartments in Dubai with stunning views, world-class amenities, and prime locations. Explore premium properties for sale and rent, tailored to your lifestyle in the heart of Dubai.",
          "keywords": "Dubai apartments for sale, Apartments in Dubai, Luxury apartments Dubai, Dubai apartment rentals, Affordable apartments in Dubai, Buy apartment in Dubai, Dubai property investment, Waterfront apartments Dubai, High-rise apartments in Dubai, Dubai apartments with sea view, Downtown Dubai apartments, Apartments near Dubai Marina, Studio apartments in Dubai, Family apartments in Dubai",
          "url": "https://www.dnkre.com",
          "logo": "https://www.dnkre.com/logo192.png",
          "image": "https://www.dnkre.com/logo192.png",
          "sameAs": [
            "https://www.facebook.com/dnkrealestate1/",
            "https://www.instagram.com/dnk_re/",
            "https://www.linkedin.com/company/dnkrealestate/mycompany/"
          ],
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
      <FooterNad  />
      <TalkFooterNad />
    </>
  );
};

export default NadAlSheba;
