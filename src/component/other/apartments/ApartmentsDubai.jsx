import React from 'react'
import HeaderApt from './component/HeaderApt'
import BannerApt from './component/BannerApt'
import FormApt from './component/FormApt'
import ListApartment from './component/ListApartment'
import WhyChoose from './component/WhyChoose'
import DeveloperStn from './component/DeveloperStn'
import CommunitieStn from './component/CommunitieStn'
import BestSaleStn from './component/BestSaleStn'
import TalkStn from './component/TalkStn'
import { Helmet } from 'react-helmet'

export const ApartmentsDubai = () => {
  return (
    <>
      <Helmet>
        <title>Best Apartments - Dubai</title>
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
      <BannerApt />
      <FormApt />
      <ListApartment />
      <WhyChoose />
      <DeveloperStn />
      <CommunitieStn />
      <BestSaleStn />
      <TalkStn />
    </>
  );
}

export default ApartmentsDubai