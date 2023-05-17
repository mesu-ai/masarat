import React from 'react';
import HeadingL from '../atoms/HeadingL';
import Image from 'next/image';
import project1 from '@/assets/images/project1.png';
import project2 from '@/assets/images/project2.png';
import project3 from '@/assets/images/project3.png';
import Card from '../atoms/Card';
import Heading from '../molecules/Heading';
import Notation from '../atoms/Notation';

const projectsdatas = [
  {
    coverPhoto: project1,
    title: 'Digital Strategy',
    shortDecption: 'Lorem ipsum dolor sit amet',
  },
  {
    coverPhoto: project2,
    title: 'Digital Strategy',
    shortDecption: 'Lorem ipsum dolor sit amet',
  },
  {
    coverPhoto: project3,
    title: 'Digital Strategy',
    shortDecption: 'Lorem ipsum dolor sit amet',
  },
  {
    coverPhoto: project1,
    title: 'Digital Strategy',
    shortDecption: 'Lorem ipsum dolor sit amet',
  },
  {
    coverPhoto: project2,
    title: 'Digital Strategy',
    shortDecption: 'Lorem ipsum dolor sit amet',
  },
  {
    coverPhoto: project3,
    title: 'Digital Strategy',
    shortDecption: 'Lorem ipsum dolor sit amet',
  },
];

const OurProjects = ({projects=[]}) => {
  return (
    <div className='container mx-auto px-6 sm:px-0 xl:px-10 '>
      <Heading className='text-center' keyword='Our Projects' title='Latest Project We Have Delivered'/>
      <div className='mt-4 grid  sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-14  py-12 '>
        {projects && projects.map((item, index) => (
          <Card
            key={index}
            className='group relative rounded-2xl  bg-white/10  hover:bg-white  shadow-deepShadow hover:shadow-lightShadow hover:border-4 border-lightBlue'
          >
            <Image
              className='w-full'
              src={item?.coverPhoto}
              alt='project'
              width={381}
              height={277}
            />

            <div className='text-center z-40 shadow-lg hidden group-hover:block absolute -bottom-10 right-10 bg-white rounded-lg p-5 sm:p-3 xl:p-4 min-w-[150px]  lg:min-w-[222px] '>
              <Notation/>
              <HeadingL className='text-blackPearl'>{item?.name}</HeadingL>
              <HeadingL className='text-slateBlue '>
                {item?.type}
              </HeadingL>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
