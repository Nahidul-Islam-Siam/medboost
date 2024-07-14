import React from 'react';

const Pricing = () => {
  const services = [
    {
      title: 'Content creation',
      description: 'Captivating visuals and compelling copy to keep your audience hooked.',
      price: '$299 /month',
    },
    {
      title: 'Community management',
      description: 'Building meaningful connections with your online community.',
      price: '$499 /month',
    },
    {
      title: 'Social strategy',
      description: 'Data-driven strategies to boost your brand’s reach and impact.',
      price: '$199 /month',
    },
    {
        title: 'Content creation',
        description: 'Captivating visuals and compelling copy to keep your audience hooked.',
        price: '$299 /month',
      },
      {
        title: 'Community management',
        description: 'Building meaningful connections with your online community.',
        price: '$499 /month',
      },
      {
        title: 'Social strategy',
        description: 'Data-driven strategies to boost your brand’s reach and impact.',
        price: '$199 /month',
      }
  ];

  return (
    <section className='bg-white md:mb-4'>
      <div className='container mx-auto '>
      <div className='mx-6'>
<div className='text-center items-center'>
<p><span className='text-[#BD4BB9]'>| </span>Our services</p>
<h1 className='text-4xl text-[#37353B]'>Propelling your brand to new heights in the digital realm</h1>
</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-6 mt-8 justify-items-center">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-100 p-10 md:p-12 lg:p-14 rounded-lg shadow-md max-w-screen-lg">
              <h2 className="text-xl font-bold mb-2">{index + 1}/ {service.title}</h2>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <p className="text-2xl font-semibold mb-4">{service.price}</p>
              <button className="bg-black text-white px-4 py-2 rounded">Get Started</button>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Pricing;
