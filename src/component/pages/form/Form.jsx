import React from "react";
import projectImage from "../../../assets/mail-form/lavioleta.webp";
import MailForm from "./MailForm";

export const Form = () => {
  return (
    <div
      className="w-full bg-[#040406] flex items-center justify-center h-full"
      style={{ height: "100vh" }}
    >
      <div className="container max-w-[1240px] p-4 pb-10 bg-white h-full">
        <div
          className="w-full h-[200px] banner"
          style={{ backgroundImage: `url(${projectImage})` }}
        ></div>
        <div className="py-7">
          <MailForm />
        </div>
      </div>
    </div>
  );
};

export default Form;
