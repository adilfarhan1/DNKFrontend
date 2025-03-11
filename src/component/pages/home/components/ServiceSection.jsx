import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import propertyManagement from "../../../../assets/icons/propertymanagement.webp";
import loadingRound from "../../../../assets/icons/loadinground.webp";
import capitalImprovements from "../../../../assets/icons/capitalimprovement.webp";
import financeRealEstate from "../../../../assets/icons/financerealestate.webp";
import financialReporting from "../../../../assets/icons/financialreporting.webp";
import recoverAssetValue from "../../../../assets/icons/recoverassetvalue.webp";
import { Link } from "react-router-dom";

export const ServiceSection = () => {
  return (
    <div className="w-full bg-[#121218] flex items-center justify-center">
      <div className="serviceSection container max-w-[1240px] py-5  px-4  md:py-9">
        <h2 className="m-auto w-fit">Our Service</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 pt-[3rem] ">
          {/* property Management-card */}
          <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] group m-4 mt-14">
            <div class="relative">
              <div className="absolute -translate-y-11 w-[100%]">
                <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                  <div className="relative p-4 ">
                    <img
                      src={loadingRound}
                      alt="Apartments for sale in dubai marina, Apartment, Villa"
                      className="absolute left-0 top-0 hidden group-hover:block animate-spin w-full"
                      loading="lazy"
                    />
                    <img
                      src={propertyManagement}
                      alt="Apartments for sale in downtown dubai, Dubai Marina"
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
                  <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0 "></span>
                  <p class="m-0 font-normal  text-gray-400 text-justify line-clamp-3">
                    Our property management concept is built on integrity,
                    accountability, and honest service that promises maximum
                    ROI. By connecting the right people for our
                  </p>
                </div>

                <Link
                  to="/services"
                  className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] md:text-[1rem] m-auto p-3 w-fit"
                >
                  View More
                  <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
                </Link>
              </div>
            </div>
          </div>
          {/* Capital Improvements-card */}
          <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] group m-4 mt-14">
            <div class="relative">
              <div className="absolute -translate-y-11 w-[100%]">
                <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                  <div className="relative p-4 ">
                    <img
                      src={loadingRound}
                      alt="Vida residence downtown emaar, Emaar, Burj Khalifa"
                      className="absolute left-0 top-0 hidden group-hover:block animate-spin w-full"
                      loading="lazy"
                    />
                    <img
                      src={capitalImprovements}
                      alt="Real estate management dubai, How to Buy Dubai Villa?"
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
                  <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0"></span>
                  <p class="m-0 font-normal text-gray-400 text-justify line-clamp-3">
                    Our capital improvement strategists use a time-honoured
                    approach to help clients realize the maximum potential of
                    their capital investments regardless of the size
                  </p>
                </div>

                <Link
                  to="/services"
                  className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] p-3 md:text-[1rem] m-auto w-fit"
                >
                  View More
                  <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
                </Link>
              </div>
            </div>
          </div>
          {/* Finance Real Estate-card */}
          <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] m-4 group mt-14">
            <div class="relative">
              <div className="absolute -translate-y-11 w-[100%]">
                <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                  <div className="relative p-4 ">
                    <img
                      src={loadingRound}
                      alt="Real estate management dubai, High ROI Properties"
                      className="absolute left-0 top-0 hidden group-hover:block animate-spin w-full"
                      loading="lazy"
                    />
                    <img
                      src={financeRealEstate}
                      alt="Top real estate companies in dubai, High Quality Properties"
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
                  <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0"></span>
                  <p class="m-0 font-normal text-gray-400 text-justify line-clamp-3">
                    We are capable of funding across the capital stack right
                    from early stage equity to late-stage debt, construction
                    finance, lease rental discounting, loan against property as
                    well as bulk buying properties
                  </p>
                </div>

                <Link
                  to="/services"
                  className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] p-3 w-fit md:text-[1rem] m-auto"
                >
                  View More
                  <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
                </Link>
              </div>
            </div>
          </div>
          {/* Financial Reporting-card */}
          <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] m-4 group mt-14">
            <div class="relative">
              <div className="absolute -translate-y-11 w-[100%]">
                <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                  <div className="relative p-4 ">
                    <img
                      src={loadingRound}
                      alt="Dubai hills for sale, Dubai South"
                      className="absolute left-0 top-0 hidden group-hover:block animate-spin w-full"
                      loading="lazy"
                    />
                    <img
                      src={financialReporting}
                      alt="3 bedroom villa for sale in dubai, al maktoum airport"
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
                  <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0"></span>
                  <p class="m-0 font-normal text-gray-400 text-justify line-clamp-3">
                    Our financial reporting system is designed by specialists
                    who are highly proficient in using various financial
                    solutions. Our reporting system helps you visualize your
                  </p>
                </div>

                <Link
                  to="/services"
                  className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] p-3 w-fit md:text-[1rem] m-auto"
                >
                  View More
                  <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
                </Link>
              </div>
            </div>
          </div>
          {/* Recover Asset Value-card */}
          <div class="max-w-max   border border-[#ffff] rounded-[10px] shadow bg-[#121218] m-4 group mt-14">
            <div class="relative">
              <div className="absolute -translate-y-11 w-[100%]">
                <div className="w-fit m-auto border border-[#ffff] rounded-[50px] p-[5px] bg-[#121218]">
                  <div className="relative p-4 ">
                    <img
                      src={loadingRound}
                      alt="Apartments for sale in dubai marina, Return of investment"
                      className="absolute left-0 top-0 hidden group-hover:block animate-spin w-full"
                      loading="lazy"
                    />
                    <img
                      src={recoverAssetValue}
                      alt="Apartments for sale in downtown dubai, Emaar, Damac, sobha"
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
                  <span className="w-full h-14 bg-gradient-to-t from-[#121218] to-transparent absolute left-0 bottom-0"></span>
                  <p class="m-0 font-normal text-gray-400 text-justify line-clamp-3">
                    We help recover the value of the underperforming assets or
                    portfolios. Whether the resolution involves a sale or
                    workout of a loan, valuation, sale of a
                  </p>
                </div>

                <Link
                  to="/services"
                  className="flex items-center gap-4 text-[#ffff] font-normal text-[0.9rem] p-3 w-fit md:text-[1rem] m-auto"
                >
                  View More
                  <MdOutlineKeyboardDoubleArrowRight className="arrow-r-bounce text-[0.9rem] md:text-[1.3rem]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
