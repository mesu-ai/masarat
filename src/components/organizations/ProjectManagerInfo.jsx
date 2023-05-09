/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import Heading5XL from '../atoms/Heading5XL';
import ParagraphText from '../atoms/ParagraphText';
import Heading2XL from '../atoms/Heading2XL';
import projectManager from '@/assets/images/projectManager.png';


const ProjectManagerInfo = () => {
  return (
    <div className='container mx-auto grid sm:grid-cols-3 gap-10 xl:gap-20 px-6 sm:px-0 xl:px-10  py-0 lg:py-3 mb-20 xl:mb-36'>
      <div className='text-center'>
        <Image
          className='rounded-3'
          src={projectManager}
          alt='pm_photo'
          height={328}
          width={468}
        />
      </div>
      <div className='col-span-2  my-auto'>
        <div className='space-y-6'>
          <Heading5XL>
            “Maximize Your Reach with Marketing - Unlock Your Business's Growth
            Potential!"
          </Heading5XL>

          <ParagraphText>
            At our agency, we believe that digital marketing is more than just a
            set of tools and tactics - it's about understanding our audience and
            delivering personalised experiences that connect with them on a
            deeper level.{' '}
          </ParagraphText>
        </div>
        <ul className='mt-10 flex gap-10'>
          <li className=''>
            <Heading2XL>1432+</Heading2XL>
            <ParagraphText>Project Completed</ParagraphText>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectManagerInfo;
