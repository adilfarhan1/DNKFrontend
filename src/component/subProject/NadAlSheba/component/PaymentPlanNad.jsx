import React, { useState } from 'react'
import PopupNad from './PopupNad';

export const PaymentPlanNad = () => {
  const [ShowPopup, setShowPopup] = useState(false);

  return (
    <div
      className="w-full bg-[#040406] flex items-center justify-center px-4 xl:px-0"
      id="paymentPlan"
    >
      <div className="container max-w-[1240px] py-5 !pt-0 px-4  md:py-9">
        <div className="mb-4 w-full">
          <h2 className="m-0 text-center">Payment Plan</h2>
          <h3 className="m-0 text-[#258493] text-center">
            Easy 60/40 Payment Plan
          </h3>
        </div>
        <div className="grid grid-cols-2  md:grid-cols-3 gap-2">
          <div className="site-btn1 !p-1.5 md:!p-2 items-center justify-c">
            <h2 className="text-center mb-0">20%</h2>
            <p className="text-[#fff] text-[0.9rem] line-clamp-1 w-fit m-auto my-0 mb-0 font-semibold">
              DOWN PAYMENT
            </p>
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              ON BOOKING
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 items-center justify-c">
            <h2 className="text-center mb-0">10%</h2>
            <p className="text-[#fff] text-[0.9rem] line-clamp-1 w-fit m-auto my-0 mb-0 font-semibold">
              1ST INSTALMENT
            </p>
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              DECEMBER 2025
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 items-center justify-c">
            <h2 className="text-center mb-0">5%</h2>
            <p className="text-[#fff] text-[0.9rem] line-clamp-1 w-fit m-auto my-0 mb-0 font-semibold">
              2ND INSTALMENT
            </p>
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              JUNE 2026
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 items-center justify-c">
            <h2 className="text-center mb-0">10%</h2>
            <p className="text-[#fff] text-[0.9rem] line-clamp-1 w-fit m-auto my-0 mb-0 font-semibold">
              3RD INSTALMENT
            </p>
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              NOVEMBER 2026
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 items-center justify-c">
            <h2 className="text-center mb-0">10%</h2>
            <p className="text-[#fff] text-[0.9rem] line-clamp-1 w-fit m-auto my-0 mb-0 font-semibold">
              4TH INSTALMENT
            </p>
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              APRIL 2027
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 items-center justify-c">
            <h2 className="text-center mb-0">10%</h2>
            <p className="text-[#fff] text-[0.9rem] line-clamp-1 w-fit m-auto my-0 mb-0 font-semibold">
              5TH INSTALMENT
            </p>
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              SEPTEMBER 2027
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 items-center justify-c">
            <h2 className="text-center mb-0">10%</h2>
            <p className="text-[#fff] text-[0.9rem] line-clamp-1 w-fit m-auto my-0 mb-0 font-semibold">
              6TH INSTALMENT
            </p>
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              FEBRUARY 2028
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 items-center justify-c">
            <h2 className="text-center mb-0">5%</h2>
            <p className="text-[#fff] text-[0.9rem] line-clamp-1 w-fit m-auto my-0 mb-0 font-semibold">
              7TH INSTALMENT
            </p>
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              JUNE 2028
            </p>
          </div>
          <div className="site-btn1 !p-1.5 md:!p-2 items-center justify-c">
            <h2 className="text-center mb-0">20%</h2>
            <p className="text-[#fff] text-[0.9rem] line-clamp-1 w-fit m-auto my-0 mb-0 font-semibold">
              8TH INSTALMENT
            </p>
            <p className="text-[#fff] text-[0.9rem] font-light line-clamp-1 w-fit m-auto my-0">
              FEBRUARY 2029 (HANDOVER)
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => setShowPopup(true)}
            className="bg-[#258493] hover:bg-[#fff] hover:text-[#258493] text-[#fff] w-fit px-[1.5rem] py-[10px] mt-[25px] rounded duration-100 flex justify-center mb-3 capitalize"
          >
            Inquire more about
          </button>
        </div>
        <div>
          {ShowPopup && <PopupNad onClose={() => setShowPopup(false)} />}
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanNad;