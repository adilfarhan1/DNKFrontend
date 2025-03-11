import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import propertyManagement from "../../../assets/icons/propertymanagement.webp";
import loadingRound from "../../../assets/icons/loadinground.webp";
import capitalImprovements from "../../../assets/icons/capitalimprovement.webp";
import financeRealEstate from "../../../assets/icons/financerealestate.webp";
import financialReporting from "../../../assets/icons/financialreporting.webp";
import recoverAssetValue from "../../../assets/icons/recoverassetvalue.webp";
import TalkSection from "../home/components/TalkSection";
import PartnerSection from "../home/components/PartnerSection";
import ReviewSection from "../home/components/ReviewSection";
import OurProcess from "../home/components/OurProcess";
import BannerService from "./component/BannerService";
import { Helmet } from "react-helmet-async";

export const OurServices = () => {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setKeywords([
      "Real Estate Services Dubai",
      "Property Valuation Dubai",
      "Real Estate Marketing Dubai",
      "Buy and Sell Properties Dubai",
      "Residential and Commercial Real Estate Dubai",
      "Expert Real Estate Agents Dubai",
      "Property Management Dubai",
      "Dubai Real Estate Consultation",
      "Seamless Property Transactions Dubai",
      "Investment Opportunities Dubai",
      "Luxury Property Services Dubai",
      "Renting in Dubai",
      "Real Estate Market Analysis Dubai",
      "Professional Property Listings Dubai",
      "Real Estate Solutions Dubai",
      "Customized Property Services Dubai",
    ]);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Real Estate Services in Dubai</title>
        <meta
          name="description"
          content="At DNK Real Estate, we offer comprehensive real estate services tailored to meet your needs in Dubai. From expert property valuations to effective marketing strategies, our dedicated team ensures a seamless experience whether you are buying and selling. Trust us to navigate the dynamic Dubai market and achieve your real estate goals."
        />
        <meta name="keywords" content={keywords.join(", ")} />
        <link rel="canonical" href="https://www.dnkre.com/services" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Real Estate Services in Dubai" />
        <meta
          property="og:description"
          content="At DNK Real Estate, we offer comprehensive real estate services tailored to meet your needs in Dubai. From expert property valuations to effective marketing strategies, our dedicated team ensures a seamless experience whether you are buying and selling. Trust us to navigate the dynamic Dubai market and achieve your real estate goals."
        />
        <meta property="og:image" content="https://www.dnkre.com/logo.webp" />
        <meta property="og:url" content="https://www.dnkre.com/services" />

        {/* -- Open Graph Meta Tags for WhatsApp and Social Media Sharing -- */}
        <meta property="og:title" content="Real Estate Services in Dubai" />
        <meta
          property="og:description"
          content="At DNK Real Estate, we offer comprehensive real estate services tailored to meet your needs in Dubai. From expert property valuations to effective marketing strategies, our dedicated team ensures a seamless experience whether you are buying and selling. Trust us to navigate the dynamic Dubai market and achieve your real estate goals."
        />
        <meta property="og:image" content="https://www.dnkre.com/logo.webp" />
        <meta property="og:url" content="https://www.dnkre.com/services" />
        <meta property="og:type" content="website" />

        {/* -- Twitter Card for Sharing -- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Real Estate Services in Dubai" />
        <meta
          name="twitter:description"
          content="At DNK Real Estate, we offer comprehensive real estate services tailored to meet your needs in Dubai. From expert property valuations to effective marketing strategies, our dedicated team ensures a seamless experience whether you are buying and selling. Trust us to navigate the dynamic Dubai market and achieve your real estate goals."
        />
        <meta name="twitter:image" content="https://www.dnkre.com/logo.webp" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "website",
            mainEntity: {
              "@type": "website",
              name: "Real Estate Services in Dubai",
              description:
                "At DNK Real Estate, we offer comprehensive real estate services tailored to meet your needs in Dubai. From expert property valuations to effective marketing strategies, our dedicated team ensures a seamless experience whether you are buying and selling. Trust us to navigate the dynamic Dubai market and achieve your real estate goals.",
              keywords: keywords.join(", "),
              image: "https://www.dnkre.com/logo.webp",
            },
          })}
        </script>
      </Helmet>
      <BannerService />
      <div className="about-section w-full bg-[#040406] flex items-center justify-center">
        <div className="container max-w-[1240px] py-5  px-4  md:py-9 grid md:grid-cols-2 relative">
          {/* property Management-card */}
          <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] group m-4 mt-14">
            <div class="relative">
              <div className="absolute -translate-y-14 w-[100%]">
                <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                  <div className="relative p-4 ">
                    <img
                      src={loadingRound}
                      alt="loading loop"
                      className="absolute left-0 top-0 hidden group-hover:block animate-spin"
                      loading="lazy"
                    />
                    <img
                      src={propertyManagement}
                      alt="service icon m-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 pt-[2.7rem]">
                <h3 class="mb-2 tracking-tight text-white m-auto w-fit">
                  Property Management
                </h3>
                <div className="relative">
                  {/* <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0 "></span> */}
                  <p class="m-0 font-normal text-gray-400 text-justify">
                    Our property management concept is built on integrity,
                    accountability, and honest service that promises maximum
                    ROI. By connecting the right people for our client's
                    property and managing them throughout the stay, their
                    investment will be protected and maintained with us. With
                    our experienced and conscientious team, our clients can rest
                    easy and live their life to the fullest without the hassle
                    that comes with managing the property.
                  </p>
                </div>

                {/* <button className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem] m-auto">
                View More
                <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
              </button> */}
              </div>
            </div>
          </div>
          {/* Capital Improvements-card */}
          <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] group m-4 mt-14">
            <div class="relative">
              <div className="absolute -translate-y-14 w-[100%]">
                <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                  <div className="relative p-4 ">
                    <img
                      src={loadingRound}
                      alt="loading loop"
                      className="absolute left-0 top-0 hidden group-hover:block animate-spin"
                      loading="lazy"
                    />
                    <img
                      src={capitalImprovements}
                      alt="service icon m-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 pt-[2.7rem]">
                <h3 class="mb-2 tracking-tight text-white m-auto w-fit">
                  Capital Improvements
                </h3>
                <div className="relative">
                  {/* <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0"></span> */}
                  <p class="m-0 font-normal text-gray-400 text-justify ">
                    Our capital improvement strategists use a time-honoured
                    approach to help clients realize the maximum potential of
                    their capital investments regardless of the size. Our
                    dynamic team is uniquely equipped to provide the skill set
                    necessary for each property investment and tailor strategic
                    engagements to meet a specific need by developing a specific
                    approach and tool to help manage and control investments in
                    a way that minimizes risks, maximizes performance, and
                    ensures success.
                  </p>
                </div>

                {/* <button className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem] m-auto">
                View More
                <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
              </button> */}
              </div>
            </div>
          </div>
          {/* Finance Real Estate-card */}
          <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] m-4 group mt-14">
            <div class="relative">
              <div className="absolute -translate-y-14 w-[100%]">
                <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                  <div className="relative p-4 ">
                    <img
                      src={loadingRound}
                      alt="loading loop"
                      className="absolute left-0 top-0 hidden group-hover:block animate-spin"
                      loading="lazy"
                    />
                    <img
                      src={financeRealEstate}
                      alt="service icon m-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 pt-[2.7rem]">
                <h3 class="mb-2 tracking-tight text-white m-auto w-fit">
                  Finance Real Estate
                </h3>
                <div className="relative">
                  {/* <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0"></span> */}
                  <p class="m-0 font-normal text-gray-400 text-justify ">
                    We are capable of funding across the capital stack right
                    from early stage equity to late-stage debt, construction
                    finance, lease rental discounting, loan against property as
                    well as bulk buying properties. We also provide holistic
                    financing solutions to clients looking for housing
                    opportunities.
                  </p>
                </div>

                {/* <button className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem] m-auto">
                View More
                <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
              </button> */}
              </div>
            </div>
          </div>
          {/* Financial Reporting-card */}
          <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] m-4 group mt-14">
            <div class="relative">
              <div className="absolute -translate-y-14 w-[100%]">
                <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                  <div className="relative p-4 ">
                    <img
                      src={loadingRound}
                      alt="loading loop"
                      className="absolute left-0 top-0 hidden group-hover:block animate-spin"
                      loading="lazy"
                    />
                    <img
                      src={financialReporting}
                      alt="service icon m-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 pt-[2.7rem]">
                <h3 class="mb-2 tracking-tight text-white m-auto w-fit">
                  Financial Reporting
                </h3>
                <div className="relative">
                  {/* <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0"></span> */}
                  <p class="m-0 font-normal text-gray-400 text-justify ">
                    Our financial reporting system is designed by specialists
                    who are highly proficient in using various financial
                    solutions. Our reporting system helps you visualize your
                    entire property investment portfolio in a consolidated
                    fashion and provides intelligence and data to help you make
                    better-informed decisions. Our comprehensive financial
                    statement reporting also provides you with an
                    easy-to-understand overview of all your real estate
                    activities.
                  </p>
                </div>

                {/* <button className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] mt-4 md:text-[1rem] m-auto">
                View More
                <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
              </button> */}
              </div>
            </div>
          </div>
          {/* Recover Asset Value-card */}
          <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] m-4 group mt-14">
            <div class="relative">
              <div className="absolute -translate-y-14 w-[100%]">
                <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                  <div className="relative p-4 ">
                    <img
                      src={loadingRound}
                      alt="loading loop"
                      className="absolute left-0 top-0 hidden group-hover:block animate-spin"
                      loading="lazy"
                    />
                    <img
                      src={recoverAssetValue}
                      alt="service icon m-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 pt-[2.7rem]">
                <h3 class="mb-2 tracking-tight text-white m-auto w-fit">
                  Recover Asset Value
                </h3>
                <div className="relative">
                  {/* <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0"></span> */}
                  <p class="m-0 font-normal text-gray-400 text-justify">
                    We help recover the value of the underperforming assets or
                    portfolios. Whether the resolution involves a sale or
                    workout of a loan, valuation, sale of a property, or
                    recapitalization, we seamlessly realign the asset strategy
                    to the original investment goals of the client and deliver
                    the expected and honest service through trust and
                    accountability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OurProcess />
      <ReviewSection />
      <PartnerSection />
      <TalkSection />
    </div>
  );
};

export default OurServices;
