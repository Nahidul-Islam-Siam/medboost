"use client";
import React, { useState } from 'react';

const Faq = () => {
  const [isOpen, setIsOpen] = useState(Array(7).fill(false));

  const toggle = (index) => {
    setIsOpen(isOpen.map((val, i) => (i === index ? !val : val)));
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Frequently Asked Questions</h1>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:mt-12">
          {[
            "Why is social media marketing important for businesses?",
            "Do you provide social media advertising services?",
            "Can you manage multiple social media platforms for my business?",
            "Can you help with influencer marketing on social media?",
            "How do you create content for social media marketing?",
            "How do you measure the success of social media marketing campaigns?",
            "How can I get started with your social media marketing agency?"
          ].map((question, index) => (
            <div key={index} className="flex flex-col p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
              <button className="flex items-center justify-between w-full" onClick={() => toggle(index)}>
                <h1 className="font-semibold text-gray-700 dark:text-white">{question}</h1>
                <span className="text-white bg-blue-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen[index] ? 'M18 12H6' : 'M12 6v6m0 0v6m0-6h6m-6 0H6'} />
                  </svg>
                </span>
              </button>
              {isOpen[index] && (
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                  {index % 2 === 0
                    ? "Yes, we can manage multiple social media platforms such as Facebook, Instagram, Twitter, LinkedIn, and more, depending on your business’s goals and target audience."
                    : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?"}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
