import React from 'react';
import HeadingL from '../atoms/HeadingL';
import Heading5XL from '../atoms/Heading5XL';
import Image from 'next/image';
import project1 from '@/assets/images/project1.png';
import project2 from '@/assets/images/project2.png';
import project3 from '@/assets/images/project3.png';
import Card from '../atoms/Card';
import Heading from '../molecules/Heading';

const projectsdatas = [
  {
    icon: project1,
    title: 'Digital Strategy',
    shortDecption: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: project2,
    title: 'Digital Strategy',
    shortDecption: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: project3,
    title: 'Digital Strategy',
    shortDecption: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: project1,
    title: 'Digital Strategy',
    shortDecption: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: project2,
    title: 'Digital Strategy',
    shortDecption: 'Lorem ipsum dolor sit amet',
  },
  {
    icon: project3,
    title: 'Digital Strategy',
    shortDecption: 'Lorem ipsum dolor sit amet',
  },
];

const OurProjects = () => {
  return (
    <div className='container mx-auto px-6 sm:px-0 xl:px-10  py-0 lg:py-3'>
      <Heading className='text-center' keyword='Our Projects' title='Latest Project We Have Delivered'/>
      <div className='mt-4 grid grid-cols-3 gap-8 lg:gap-14  py-12 '>
        {projectsdatas.map((item, index) => (
          <Card
            key={index}
            className='group relative rounded-2xl  bg-white/10  hover:bg-white  shadow-lightShadow hover:shadow-hoverShadow hover:border-4 border-lightBlue'
          >
            <Image
              className=' '
              src={item?.icon}
              alt='icon'
              // width={20}
              // height={20}
            />

            <div className='hidden group-hover:block absolute -bottom-10 right-10 bg-white rounded-lg py-3.5 px-5'>
              <HeadingL className='text-blackPearl'>{item?.title}</HeadingL>
              <HeadingL className='text-slateBlue'>
                {item?.shortDecption}
              </HeadingL>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
