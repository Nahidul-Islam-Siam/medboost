"use client";
import React, { useState } from 'react';

const Faq = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Frequently Asked Questions</h1>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:mt-12">
          <div>
            <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
              <button className="flex items-center justify-between w-full" onClick={() => setIsOpen1(!isOpen1)}>
                <h1 className="font-semibold text-gray-700 dark:text-white">Why is social media marketing important for businesses?</h1>
                <span className="text-white bg-blue-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen1 ? 'M18 12H6' : 'M12 6v6m0 0v6m0-6h6m-6 0H6'} />
                  </svg>
                </span>
              </button>
              {isOpen1 && (
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
              )}
            </div>

            <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800 mt-4">
              <button className="flex items-center justify-between w-full" onClick={() => setIsOpen2(!isOpen2)}>
                <h1 className="font-semibold text-gray-700 dark:text-white">Can you manage multiple social media platforms for my business?</h1>
                <span className="text-white bg-blue-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen2 ? 'M18 12H6' : 'M12 6v6m0 0v6m0-6h6m-6 0H6'} />
                  </svg>
                </span>
              </button>
              {isOpen2 && (
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                  Yes, we can manage multiple social media platforms such as Facebook, Instagram, Twitter, LinkedIn, and more, depending on your business’s goals and target audience.
                </p>
              )}
            </div>

            <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800 mt-4">
              <button className="flex items-center justify-between w-full" onClick={() => setIsOpen3(!isOpen3)}>
                <h1 className="font-semibold text-gray-700 dark:text-white">How do you create content for social media marketing?</h1>
                <span className="text-white bg-blue-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen3 ? 'M18 12H6' : 'M12 6v6m0 0v6m0-6h6m-6 0H6'} />
                  </svg>
                </span>
              </button>
              {isOpen3 && (
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
              )}
            </div>
          </div>

          <div>
            <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
              <button className="flex items-center justify-between w-full" onClick={() => setIsOpen4(!isOpen4)}>
                <h1 className="font-semibold text-gray-700 dark:text-white">Do you provide social media advertising services?</h1>
                <span className="text-white bg-blue-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen4 ? 'M18 12H6' : 'M12 6v6m0 0v6m0-6h6m-6 0H6'} />
                  </svg>
                </span>
              </button>
              {isOpen4 && (
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
              )}
            </div>

            <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800 mt-4">
              <button className="flex items-center justify-between w-full" onClick={() => setIsOpen5(!isOpen5)}>
                <h1 className="font-semibold text-gray-700 dark:text-white">Can you help with influencer marketing on social media?</h1>
                <span className="text-white bg-blue-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen5 ? 'M18 12H6' : 'M12 6v6m0 0v6m0-6h6m-6 0H6'} />
                  </svg>
                </span>
              </button>
              {isOpen5 && (
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
              )}
            </div>

            <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800 mt-4">
              <button className="flex items-center justify-between w-full" onClick={() => setIsOpen6(!isOpen6)}>
                <h1 className="font-semibold text-gray-700 dark:text-white">How do you measure the success of social media marketing campaigns?</h1>
                <span className="text-white bg-blue-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen6 ? 'M18 12H6' : 'M12 6v6m0 0v6m0-6h6m-6 0H6'} />
                  </svg>
                </span>
              </button>
              {isOpen6 && (
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
              )}
            </div>

            <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800 mt-4">
              <button className="flex items-center justify-between w-full" onClick={() => setIsOpen7(!isOpen7)}>
                <h1 className="font-semibold text-gray-700 dark:text-white">How can I get started with your social media marketing agency?</h1>
                <span className="text-white bg-blue-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen7 ? 'M18 12H6' : 'M12 6v6m0 0v6m0-6h6m-6 0H6'} />
                  </svg>
                </span>
              </button>
              {isOpen7 && (
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
