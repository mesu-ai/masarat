import React from 'react';
import Heading from '../molecules/Heading';
import Accrodion from '../molecules/Accrodian';
import leftImage from '@/assets/images/left.png'
import middleImage from '@/assets/images/middle.png'
import rightImage from '@/assets/images/right.png'
import Image from 'next/image';

const faqDatas = [
  {
    title: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit ',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque purus diam, elementum sed lectus eu, sollicitrutrum odio. Vivamus finibus scelerisque massa, necefficitur lacus bibendum a.',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit ',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque purus diam, elementum sed lectus eu, sollicitrutrum odio. Vivamus finibus scelerisque massa, necefficitur lacus bibendum a.',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consect etur adipiscing elit ',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque purus diam, elementum sed lectus eu, sollicitrutrum odio. Vivamus finibus scelerisque massa, necefficitur lacus bibendum a.',
  },
];

const FAQSection = () => {
  return (
    <div className='container mx-auto px-6 sm:px-0 xl:px-10  mb-20 xl:mb-36 2xl:pt-20'>
      <div className='grid md:grid-cols-2  gap-10 lg:gap-14 '>
        <div className=''>
          <Heading
            className='mb-10'
            keyword='Common Questions'
            title='Frequently Asked Questions'
          />
          {faqDatas.map((item, index) => (
            <div key={index}>
              <Accrodion
              key={index}
              className='mb-4'
              title={item?.title}
              titleStyle='text-danger uppercase'
              isOpen={faqDatas.length === index  || index===0}
            >
              {item?.text}
             
            </Accrodion>
            <hr />
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center sm:justify-between gap-2 sm:gap-6'>
          <Image
            className=' rounded-lg w-auto sm:w-56'
            src={leftImage}
            alt=''
          />
         <Image
            className='md:-mt-20 rounded-lg w-auto sm:w-56'
            src={middleImage}
            alt=''
          />
         <Image
            className='rounded-lg w-auto sm:w-56'
            src={rightImage}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
