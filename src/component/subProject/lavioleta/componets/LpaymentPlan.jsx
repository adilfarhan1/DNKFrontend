import React, { useState } from "react";
import PopupModel from "../componets/Lmodel";

export const LpaymentPlan = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const handleViewPlanClick = () => {
    setShowPopup(true);
  };

  const handleFormSubmit = () => {
    setIsOverlayVisible(false);
    setShowPopup(false); // Optionally close the popup after submission
  };

  return (
    <div
      id="paymentPlan"
      className="container max-w-[1240px] py-6  px-4 m-auto"
    >
      <h2 className="text-[#fff] m-auto w-fit mb-4 mt-3">
        Flexible Payment Plan
      </h2>
      <p className="text-center">
        Bahria Town Dubai, developed by <strong>BT Properties</strong>, offers a
        <strong>buyer friendly payment plan</strong> that makes owning a
        property easier than ever. With a <strong>low booking amount</strong>{" "}
        and <strong>easy installment options</strong> spread across the
        construction period, this plan is designed to suit different budgets and
        investment needs. This{" "}
        <strong>affordable and flexible payment structure</strong> ensures that
        both <strong>homebuyers and investors</strong> can secure a property in
        one of Dubai’s most promising communities without financial strain.
      </p>
      <div className="relative overflow-hidden">
        {isOverlayVisible && (
          <div
            onClick={handleViewPlanClick}
            className="w-full h-[100%] absolute backdrop-blur-sm cursor-pointer flex items-center justify-center"
          >
            <div className="relative">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <button className="px-9 py-2 bg-sky-400 rounded-full  m-auto text-[#000] text-[0.8rem] md:text-[1rem]">
                View Payment Plan
              </button>
            </div>
          </div>
        )}
        <table className="w-full border-2 overflow-auto border-[#000] bg-[#fff] ">
          <thead>
            <tr className="bg-[#CFA028] text-[#fff]">
              <th>Description</th>
              <th>Milestone Event</th>
              <th>(%) Value</th>
            </tr>
          </thead>
          <tbody className="text-[#000] capitalize">
            <tr>
              <td>Deposit</td>
              <td>On Booking</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>1st installment</td>
              <td>February 2025</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>2nd installment</td>
              <td>August 2025</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>3rd installment</td>
              <td>January 2026</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>4th installment</td>
              <td>June 2026</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>5th installment</td>
              <td>November 2026</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>6th installment</td>
              <td>April 2027</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>7th installment</td>
              <td>August 2027</td>
              <td>5%</td>
            </tr>
            <tr>
              <td>8th installment (ON HANDOVER)</td>
              <td>February 2028</td>
              <td>35%</td>
            </tr>
          </tbody>
        </table>
        <p className="text-center mt-3 mb-8">
          Estimated construction completion: February 2028
        </p>
        <div>
          {showPopup && (
            <PopupModel
              onClose={() => setShowPopup(false)}
              onFormSubmit={handleFormSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LpaymentPlan;
