import Image from 'next/image'
import React from 'react'
import logo from '../../../public/logo2.png'
import {Input} from "../TailWindMaterial/Material"

export default function EmailSend() {
  return (
    <section>
	<div className="bg-violet-300 mt-16">
		<div className="container flex flex-col pt-10 md:pt-32 lg:pt-36 items-center   text-center lg:pb-10 md:py-32 md:px-10 lg:px-32  dark:text-gray-50">
			<Image  src={logo} className='h-16 w-72' alt='' height={100} width={100}/>
			<p className="mt-6 mb-8 text-2xl lg:text-4xl sm:mb-12 xl:max-w-3xl text-[#55525A] font-medium">Empower brands to harness the full <br />potential of social media marketing</p>
			<div className=" justify-center">
			<div className="flex w-96 md:w-[3rem] lg:w-[32rem] flex-col gap-6">
            <Input label="Input With Icon" icon={<i className="ema" />} />
      <button className='btn text-xl bg-[#252327] text-white '>Subscribe</button>
      
    
    </div>

			</div>
		</div>
	</div>
	
</section>
  )
}
