import Image from "next/image";
import a1 from "../../../public/A1.jpg";
import a2 from "../../../public/A2.jpg";
import a3 from "../../../public/A3.jpg";
import a4 from "../../../public/A4.jpg";

const testimonialsData = [
  {
    text: "“Medboost is more than an agency; they are an extension of our team. Their dedication to understanding our brand and industry sets them apart. The results have exceeded our expectations.”",
    imgSrc: a1,
    title: "CEO of InnovateTech",
    bgColor: "bg-[#37353B]",
  },
  {
    text: "“Medboost transformed our online presence. Their social media strategies and content creation are top-notch. We’ve seen a significant increase in engagement and sales since partnering with them.”",
    imgSrc: a2,
    name: "Emily Turner",
    title: "Marketing Director",
    bgColor: "bg-[#37353B]",
  },
  {
    text: "“As a small business owner, I needed help navigating the social media landscape. Medboost’s personalized approach and results-driven strategies have been a game-changer for my brand’s visibility and growth.”",
    imgSrc: a3,
    name: "Jason Adams",
    title: "Small Business Owner",
    bgColor: "bg-[#37353B]",
  },
  {
    text: "“I’ve worked with several social media agencies, but Medboost stands out. Their creative content and consistent growth strategies have significantly increased our reach and engagement.”",
    imgSrc: a4,
    name: "Sarah Walker",
    title: "Marketing Manager",
    bgColor: "bg-[#37353B]",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#252327] dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="mt-6 md:flex md:items-center md:justify-between">
          <div className="flex justify-between w-full">
            <div>
              <p className="text-gray-300"><span className="text-[#BD4BB9]">| </span>Testimonials</p>
              <h1 className="font-bold grow text-2xl md:text-2xl text-white lg:text-5xl">
                Your partner in the digital realm, <br /> specializing in social media marketing
              </h1>
            </div>
            <div className="hidden lg:block">
              <button className="btn mt-20">All Testimonials</button>
            </div>
          </div>
        </div>

        <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-2">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className={`p-8 ${testimonial.bgColor} rounded-lg`}>
              <p className={`leading-loose ${testimonial.bgColor.includes('bg-') ? 'text-white text-lg' : 'text-gray-500 font-bold dark:text-gray-400'}`}>
                {testimonial.text}
              </p>
              <div className="flex items-center mt-8 -mx-2">
                <Image
                  className={`object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ${testimonial.bgColor.includes('bg-') ? 'ring-blue-200' : 'ring-gray-300 dark:ring-gray-700'}`}
                  src={testimonial.imgSrc}
                  alt={testimonial.name}
                  height={100}
                  width={100}
                />
                <div className="mx-2">
                  <h1 className={`font-semibold ${testimonial.bgColor.includes('bg-') ? 'text-white' : 'text-gray-800 dark:text-white'}`}>
                    {testimonial.name}
                  </h1>
                  <span className={`text-sm ${testimonial.bgColor.includes('bg-') ? 'text-blue-200' : 'text-gray-500 dark:text-gray-400'}`}>
                    {testimonial.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
};

export default Testimonials;
