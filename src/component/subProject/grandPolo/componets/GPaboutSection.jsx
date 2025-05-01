import React, { useState } from "react";
import aboutImg from "../../../../assets/pojects/grandPolo/gallary01.webp";
import aboutImg2 from "../../../../assets/pojects/grandPolo/gallary02.webp";
import PopupModel from "./GPmodel";

export const ADaboutSection = () => {
  const [ShowPopup, setShowPopup] = useState(false);

  return (
    <div id="about" className="about-section w-full bg-[#000] ">
      <div className="container max-w-[1240px] py-6  px-4 m-auto">
        <h1 className="text-[#fff] m-auto w-fit mb-4 mt-3 text-center">
          A Vision for the Future
        </h1>
        <p className="text-center w-[100%] md:w-[90%] m-auto">
          Designed to set a new standard for high-end living, the{" "}
          <strong>Grand Polo Club & Resort</strong> will offer residents an
          exclusive community with world class amenities. The development is
          built with a focus on sustainability, meaning it will not only provide
          a luxurious living experience but will also take steps to protect the
          environment.
        </p>

        <div className="flex items-center justify-center">
          <div className="">
            <div className="  md:py-9 grid  md:grid-cols-2 relative">
              <img
                src={aboutImg}
                alt="about image"
                className="w-[80%] md:order-first md:w-[80%] m-auto py-3 md:py-0"
                loading="lazy"
              />
              <div>
                <h2 className="text-[#fff] w-fit mb-1 mt-3 text-left">
                  Sustainable and Eco Friendly Design
                </h2>

                <p>
                  One of the key features of the Grand Polo Club & Resort is its
                  commitment to sustainability. Every part of the project is
                  planned with the environment in mind. From eco-friendly
                  construction techniques to energy efficient designs and the
                  use of sustainable materials, the resort will be a model of
                  green living. This means that residents will enjoy all the
                  benefits of modern luxury without harming the planet.
                </p>
                <h2 className="text-left text-[1.4rem]">
                  Luxury Living with a Focus on Comfort and Style
                </h2>
                <p>
                  The Grand Polo Club & Resort will offer a variety of luxury
                  homes and facilities, designed to provide the most comfort and
                  convenience. Whether you're looking for a spacious villa or a
                  stylish apartment, every home will be built with the highest
                  quality materials and attention to detail.
                </p>
                <p>
                  The resort will feature a range of amenities to cater to every
                  need, including a golf course, health and wellness centers,
                  fine dining, and more. It will also offer large open spaces,
                  beautiful gardens, and stunning views, making it the perfect
                  place to relax and enjoy life.
                </p>

                <button
                  onClick={() => setShowPopup(true)}
                  className="site-btn !text-[#fff] hover:!text-[#000] !border-[#fff] hover:!bg-[#fff]"
                >
                  Request callback
                </button>
              </div>
            </div>

            <div className="  md:py-9 grid  md:grid-cols-2 relative">
              <img
                src={aboutImg2}
                alt="about image"
                className="w-[80%] md:order-last order-first md:w-[80%] m-auto pt-3 md:pt-0 py-3 md:py-0"
                loading="lazy"
              />
              <div>
                <ul className="list-disc list-outside pl-4 text-[#979797] ">
                  <li>
                    <p className="text-left m-0">
                      <strong className="text-[#fff]">Golf Course:</strong> A
                      beautifully designed golf course for residents to enjoy a
                      relaxing game of golf surrounded by scenic views.
                    </p>
                  </li>
                  <li>
                    <p className="text-left m-0">
                      <strong className="text-[#fff]">
                        Health & Wellness Centers:
                      </strong>{" "}
                      State-of-the-art fitness centers, yoga studios, and spa
                      facilities for complete well-being and relaxation.
                    </p>
                  </li>
                  <li>
                    <p className="m-0">
                      <strong className="text-[#fff]">Swimming Pools:</strong>{" "}
                      Multiple outdoor and indoor swimming pools to relax and
                      unwind environment.
                    </p>
                  </li>
                  <li>
                    <p className="m-0">
                      <strong className="text-[#fff]">Clubhouse:</strong> A
                      luxurious clubhouse offering recreational spaces for
                      residents to socialize and relax with family and friends.
                    </p>
                  </li>
                  <li>
                    <p className="m-0">
                      <strong className="text-[#fff]">
                        Sports Facilities:
                      </strong>{" "}
                      Tennis courts, basketball courts, and other sports
                      facilities to stay active and enjoy a healthy lifestyle.
                    </p>
                  </li>
                  <li>
                    <p className="m-0">
                      <strong className="text-[#fff]">
                        Parks and Green Spaces
                      </strong>{" "}
                      Expansive green parks, walking trails, and beautifully
                      landscaped gardens to connect with nature and enjoy
                      outdoor activities. 9.Children’s Play Areas: Safe,
                      fun-filled areas for children to play and make new friends
                      in a secure environment.
                    </p>
                  </li>
                  <li>
                    <p className="">
                      <strong className="text-[#fff]">
                        24/7 Security and Concierge Services:
                      </strong>{" "}
                      Round-the clock security and dedicated staff to cater to
                      your every need, ensuring safety and convenience.
                    </p>
                  </li>
                </ul>
                <div className="flex items-center justify-start">
                  <button
                    onClick={() => setShowPopup(true)}
                    className="site-btn !text-[#fff] hover:!text-[#000] !border-[#fff] hover:!bg-[#fff]"
                  >
                    Request callback
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-[#fff] m-auto w-fit mb-4 mt-3 text-center">
          A Community like No Other
        </h1>
        <p className="text-center w-[100%] md:w-[90%] m-auto">
          This development is not just about living in a beautiful home it's
          about creating a community.{" "}
          <strong>The Grand Polo Club & Resort</strong> is designed to bring
          people together, offering residents a place to socialize, relax, and
          enjoy an exceptional lifestyle. Whether you're spending time at the
          clubhouse, enjoying a day on the golf course, or taking a stroll
          through the landscaped gardens, you'll feel part of an exclusive
          community that values luxury, comfort, and sustainability.
        </p>
      </div>

      <div>
        {ShowPopup && <PopupModel onClose={() => setShowPopup(false)} />}
      </div>
    </div>
  );
};

export default ADaboutSection;
