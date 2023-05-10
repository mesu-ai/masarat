import React, { useState } from 'react';
import HeadingL from '../atoms/HeadingL';
import Heading5XL from '../atoms/Heading5XL';
import Heading2XL from '../atoms/Heading2XL';
import NextIcon from '@/assets/svgs/NextIcon';
import ParagraphText from '../atoms/ParagraphText';

const services = [
  {
    // icon: statagyIcon,
    title: 'Digital Strategy',
    shortDecption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
    description:
      'Our Digital Strategy service is designed to help businesses develop a cohesive and effective plan for their online presence. We start by understanding your business goals and objectives, and then we analyse your digital footprint to identify areas for improvement. Our team of experts will work with you to create a customised strategy that includes search engine optimisation, social media marketing, content marketing and online advertising',
  },
  {
    // icon: statagyIcon,
    title: 'process Re-Engineering',
    shortDecption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
  },
  {
    // icon: statagyIcon,
    title: 'Digital Marketing',
    shortDecption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
  },
  {
    // icon: statagyIcon,
    title: 'Digital Transformation',
    shortDecption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
  },
  {
    // icon: statagyIcon,
    title: 'Digital Enablement',
    shortDecption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
  },
  {
    // icon: statagyIcon,
    title: 'Advanced Analytics',
    shortDecption:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ',
  },
];

const ServiceDetails = () => {
  const [selectService, setSelectService] = useState(services[0]);

  return (
    <div className='container mx-auto px-6 sm:px-0 xl:px-10  mb-20 xl:mb-36 2xl:pt-20'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3  gap-10 lg:gap-14 xl:gap-20  '>
        <div className=''>
          <Heading2XL className='text-blackPearl font-medium'>
            Service
          </Heading2XL>
          <ul className='mt-6 space-y-6'>
            {services &&
              services.map((service, index) => (
                <button
                  key={index}
                  type='button'
                  onClick={() => setSelectService(service)}
                  className={`w-full group rounded-lg shadow-lightShadow hover:bg-timberGreen  flex items-center justify-between py-3 px-5 ${
                    service.title === selectService.title
                      ? 'bg-timberGreen'
                      : ''
                  }`}
                >
                  <p
                    className={`font-medium text-blackPearl group-hover:text-white ${
                      service.title === selectService.title ? 'text-white' : ''
                    }`}
                  >
                    {service?.title}
                  </p>
                  <NextIcon
                    className={`group-hover:hidden ${
                      service.title === selectService.title ? 'hidden' : ''
                    }`}
                    color='#657791 '
                  />
                  <NextIcon
                    className={`group-hover:block ${
                      service.title === selectService.title ? 'block' : 'hidden'
                    }`}
                  />
                </button>
              ))}
          </ul>
        </div>
        <div className='md:col-span-2'>
          <div className='space-y-3 mb-10'>
            <HeadingL>Detail Service</HeadingL>
            <Heading5XL className='text-blackPearl font-bold'>
              {selectService?.title}
            </Heading5XL>
          </div>
          <div className='mt-14'>
            <ParagraphText>
              Our Digital Strategy service is designed to help businesses
              develop a cohesive and effective plan for their online presence.
              We start by understanding your business goals and objectives, and
              then we analyse your digital footprint to identify areas for
              improvement. Our team of experts will work with you to create a
              customised strategy that includes search engine optimisation,
              social media marketing, content marketing and online advertising
            </ParagraphText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
