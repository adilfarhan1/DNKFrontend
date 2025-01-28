import React from "react";
import Assist from "../../../../assets/lavioleta/footericon1.webp";
import Consultation from "../../../../assets/lavioleta/footericon2.webp";
import Estimation from "../../../../assets/lavioleta/footericon3.webp";
import Shedule from "../../../../assets/lavioleta/footericon4.webp";
import LModelForm from "./LModelForm";
import LFooterForm from "./LFooterForm";
import LTalkFooterForm from "./LTalkFooterForm";

export const LTalkSection = () => {
  return (
    <div
      id="contact"
      className="w-full bg-[#1E1E1E] flex items-center justify-center"
    >
      <div className="container max-w-[1240px] py-5 px-4 md:py-9 talkSection">
        <h1 className="m-auto w-fit">Let's Talk Together</h1>
        <p className="text-center m-auto w-[100%] md:w-[80%] pb-4 text-[#ffff]">
          Please fill out the form, our experts will get in touch with you
          shortly.
        </p>
        <div className="grid md:grid-cols-2 relative pt-8">
          <div className="grid grid-cols-2">
            <div className="p-2">
              <img
                src={Assist}
                alt="info icon"
                className="pb-4 m-auto md:m-0 w-[48px]"
              />
              <h5 className="text-center md:text-left">
                Call Enquiry Assistance
              </h5>
              <p className="text-center md:text-left text-[#ffff]">
                We are always available on call to assist you with any questions
                you may have.
              </p>
            </div>
            <div className="p-2">
              <img
                src={Consultation}
                alt="info icon"
                className="pb-4 m-auto md:m-0 w-[48px]"
              />
              <h5 className="text-center md:text-left">Project Consultation</h5>
              <p className="text-center md:text-left text-[#ffff]">
                We provide you with all investment consultations for your goal.
              </p>
            </div>
            <div className="p-2">
              <img
                src={Estimation}
                alt="info icon"
                className="pb-4  m-auto md:m-0 w-[48px]"
              />
              <h5 className="text-center md:text-left">Project Estimation</h5>
              <p className="mb-0 text-center md:text-left text-[#ffff]">
                You come to us with your dream, and we do all of the planning
                and costing for you.
              </p>
            </div>
            <div className="p-2">
              <img
                src={Shedule}
                alt="info icon"
                className="pb-4  m-auto md:m-0 w-[48px]"
              />
              <h5 className="text-center md:text-left">
                Scheduling Appointments
              </h5>
              <p className="mb-0 text-center md:text-left text-[#ffff]">
                We assist you in scheduling appointments whenever you wish to
                meet us.
              </p>
            </div>
          </div>

          <LTalkFooterForm />
        </div>
      </div>
    </div>
  );
};

export default LTalkSection;
