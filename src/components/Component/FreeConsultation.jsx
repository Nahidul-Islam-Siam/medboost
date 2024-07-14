import Image from 'next/image';
import React from 'react';

export default function FreeConsultation() {
  return (
    <section>
	<div className="dark:bg-violet-600 bg-[#252327]">
		<div className="container flex flex-col items-center px-10 py-16 pb-24 mx-auto text-center lg:pb-16 md:py-10 md:pt-20 md:pb-20 lg:px-20 dark:text-gray-50">
        <h1 className="text-sm md:text-xl font-bold leading-none sm:mx-3 sm:text-xl xl:max-w-3xl text-base-300 dark:text-gray-50"><span className='text-red-600'>| </span>Let&#39;s get started</h1>
			<h1 className="text-4xl md:text-7xl font-bold leading-none sm:mx-3 sm:text-4xl xl:max-w-3xl text-white dark:text-gray-50">Don&lsquo;t get left behind</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50 text-white">When the industry changes, you should too. Adjust with the changing industry landscape.</p>
            <button className='btn'>Free Consultation</button>
			
		</div>
	</div>
	
</section>
  );
}
