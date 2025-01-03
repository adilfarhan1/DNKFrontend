import React from "react";
import Assist from "../../../../assets/icons/assist.webp";
import Consultation from "../../../../assets/icons/consultation.webp";
import Estimation from "../../../../assets/icons/estimation.webp";
import Shedule from "../../../../assets/icons/shedule.webp";
import ContactForm from "../../contact/component/ContactForm";

export const TalkSection = () => {
  return (
    <div className="w-full bg-[#040406] flex items-center justify-center">
      <div className="container max-w-[1240px] py-5 px-4 md:py-9 talkSection">
        <h2 className="m-auto w-fit">Let's Talk Together</h2>
        <p className="text-center m-auto w-[100%] md:w-[80%] pb-4">
          We love talk with new people. Please take a moment to tell us about
          your Dream. Your messages will be responded to within ONE BUSINESS
          DAY.
        </p>
        <div className="grid md:grid-cols-2 relative pt-8">
          <div className="grid grid-cols-2">
            <div className="p-2">
              <img
                src={Assist}
                alt="info icon"
                className="pb-4 m-auto md:m-0 w-[48px]"
              />
              <h3 className="text-center md:text-left">
                Call Enquiry Assistance
              </h3>
              <p className="text-center md:text-left">
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
              <h3 className="text-center md:text-left">Project Consultation</h3>
              <p className="text-center md:text-left">
                We provide you with all investment consultations for your goal.
              </p>
            </div>
            <div className="p-2">
              <img
                src={Estimation}
                alt="info icon"
                className="pb-4  m-auto md:m-0 w-[48px]"
              />
              <h3 className="text-center md:text-left">Project Estimation</h3>
              <p className="mb-0 text-center md:text-left">
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
              <h3 className="text-center md:text-left">
                Scheduling Appointments
              </h3>
              <p className="mb-0 text-center md:text-left">
                We assist you in scheduling appointments whenever you wish to
                meet us.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default TalkSection;
