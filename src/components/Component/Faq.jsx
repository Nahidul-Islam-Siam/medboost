"use client";
import React, { useState } from 'react';
import { RiArrowDropUpFill, RiArrowDropRightFill } from "react-icons/ri";

const Faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);

  return (
    <section className="bg-white mx-5 mt-10 mb-10 dark:bg-gray-900">
      <div className="mx-auto">
        <div className="mt-6 md:flex md:items-center md:justify-between">
          <div className="flex justify-between w-full">
            <div>
              <p className="text-[#A7A6A9] mb-2"><span className="text-[#BD4BB9]">| </span>FAQ</p>
              <h1 className="font-bold grow text-3xl md:text-2xl text-[#37353B] lg:text-5xl">
                Find answers to commonly <br /> asked questions
              </h1>
            </div>
            <div className="hidden lg:block">
              <button className="btn mt-20">All Questions</button>
            </div>
          </div>
        </div>
        
        <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:mt-12 text-sm">
          <div>
            <div className="mt-4">
              <button className="flex items-center justify-between w-full bg-[#E7E6E8] p-4" onClick={() => setIsOpen1(!isOpen1)}>
                <h1 className="font-bold text-[#252327] dark:text-white">Why is social media marketing important for businesses?</h1>
                <span className="text-black rounded-full">
                  {isOpen1 ? <RiArrowDropUpFill size={28} /> : <RiArrowDropRightFill size={28} />}
                </span>
              </button>
              {isOpen1 && (
                <p className="mt-6 text-sm transition-shadow text-[#55525A] dark:text-gray-300">
                  Social media marketing is crucial for businesses as it allows them to connect with their target audience, build brand loyalty, drive website traffic, generate leads, and increase sales. It’s a powerful tool for online visibility.
                </p>
              )}
            </div>

            <div className="mt-4">
              <button className="flex items-center justify-between w-full bg-[#E7E6E8] p-4" onClick={() => setIsOpen2(!isOpen2)}>
                <h1 className="font-bold text-[#252327] dark:text-white">Can you manage multiple social media platforms for my business?</h1>
                <span className="text-black rounded-full">
                  {isOpen2 ? <RiArrowDropUpFill size={28} /> : <RiArrowDropRightFill size={28} />}
                </span>
              </button>
              {isOpen2 && (
                <p className="mt-6 text-sm transition-shadow text-[#55525A] dark:text-gray-300">
                  Yes, we can manage multiple social media platforms such as Facebook, Instagram, Twitter, LinkedIn, and more, depending on your business’s goals and target audience.
                </p>
              )}
            </div>

            <div className="mt-4">
              <button className="flex items-center justify-between w-full bg-[#E7E6E8] p-4" onClick={() => setIsOpen3(!isOpen3)}>
                <h1 className="font-bold text-[#252327] dark:text-white">How do you create content for social media marketing?</h1>
                <span className="text-black rounded-full">
                  {isOpen3 ? <RiArrowDropUpFill size={28} /> : <RiArrowDropRightFill size={28} />}
                </span>
              </button>
              {isOpen3 && (
                <p className="mt-6 text-sm transition-shadow text-[#55525A] dark:text-gray-300">
                  Our content creation process involves researching your industry, identifying trends, and creating engaging and relevant content such as posts, images, videos, and infographics tailored to your brand and audience.
                </p>
              )}
            </div>

            <div className="mt-4">
              <button className="flex items-center justify-between w-full bg-[#E7E6E8] p-4" onClick={() => setIsOpen4(!isOpen4)}>
                <h1 className="font-bold text-[#252327] dark:text-white">Do you offer customized social media strategies for each client?</h1>
                <span className="text-black rounded-full">
                  {isOpen4 ? <RiArrowDropUpFill size={28} /> : <RiArrowDropRightFill size={28} />}
                </span>
              </button>
              {isOpen4 && (
                <p className="mt-6 text-sm transition-shadow text-[#55525A] dark:text-gray-300">
                  Yes, we tailor our social media strategies to meet the unique needs and objectives of each client. We conduct thorough research to create strategies that align with your business goals.
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="mt-4">
              <button className="flex items-center justify-between w-full bg-[#E7E6E8] p-4" onClick={() => setIsOpen5(!isOpen5)}>
                <h1 className="font-bold text-[#252327] dark:text-white">Do you provide social media advertising services?</h1>
                <span className="text-black rounded-full">
                  {isOpen5 ? <RiArrowDropUpFill size={28} /> : <RiArrowDropRightFill size={28} />}
                </span>
              </button>
              {isOpen5 && (
                <p className="mt-6 text-sm transition-shadow text-[#55525A] dark:text-gray-300">
                  Yes, we offer social media advertising services that include creating and managing ad campaigns on platforms like Facebook Ads, Instagram Ads, and others to reach a wider audience and drive conversions.
                </p>
              )}
            </div>

            <div className="mt-4">
              <button className="flex items-center justify-between w-full bg-[#E7E6E8] p-4" onClick={() => setIsOpen6(!isOpen6)}>
                <h1 className="font-bold text-[#252327] dark:text-white">Can you help with influencer marketing on social media?</h1>
                <span className="text-black rounded-full">
                  {isOpen6 ? <RiArrowDropUpFill size={28} /> : <RiArrowDropRightFill size={28} />}
                </span>
              </button>
              {isOpen6 && (
                <p className="mt-6 text-sm transition-shadow text-[#55525A] dark:text-gray-300">
                  Absolutely! We can identify suitable influencers in your niche, establish partnerships, and create influencer marketing campaigns to promote your products or services effectively.
                </p>
              )}
            </div>

            <div className="mt-4">
              <button className="flex items-center justify-between w-full bg-[#E7E6E8] p-4" onClick={() => setIsOpen7(!isOpen7)}>
                <h1 className="font-bold text-[#252327] dark:text-white">How do you measure the success of social media marketing campaigns?</h1>
                <span className="text-black rounded-full">
                  {isOpen7 ? <RiArrowDropUpFill size={28} /> : <RiArrowDropRightFill size={28} />}
                </span>
              </button>
              {isOpen7 && (
                <p className="mt-6 text-sm transition-shadow text-[#55525A] dark:text-gray-300">
                  We use key performance indicators (KPIs) such as engagement metrics, website traffic, conversion rates, and ROI (Return on Investment) to measure the success of social media marketing campaigns. We provide regular reports to track progress.
                </p>
              )}
            </div>

            <div className="mt-4">
              <button className="flex items-center justify-between w-full bg-[#E7E6E8] p-4" onClick={() => setIsOpen8(!isOpen8)}>
                <h1 className="font-bold text-[#252327] dark:text-white">How can I get started with your social media marketing agency?</h1>
                <span className="text-black rounded-full">
                  {isOpen8 ? <RiArrowDropUpFill size={28} /> : <RiArrowDropRightFill size={28} />}
                </span>
              </button>
              {isOpen8 && (
                <p className="mt-6 text-sm transition-shadow text-[#55525A] dark:text-gray-300">
                  To get started, simply reach out to us through our website or contact us by phone or email. We’ll schedule a consultation to discuss your goals and create a customized social media marketing plan for your business.
                </p>
              )}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Faq;
