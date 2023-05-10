import React from 'react';
import HeadingL from '../atoms/HeadingL';
import ParagraphText from '../atoms/ParagraphText';
import FastIcon from '@/assets/svgs/FastIcon';
import ProtectionIcon from '@/assets/svgs/ProtectionIcon';
import solutionCover from '@/assets/images/solutionCover.png';
import TeamIcon from '@/assets/svgs/TeamIcon';
import CallIcon from '@/assets/svgs/CallIcon';
import HeadingXL from '../atoms/HeadingXL';
import Image from 'next/image';

const solutionsData = [
  { icon: <FastIcon />, title: 'Fast Working Process' },
  { icon: <ProtectionIcon />, title: 'Excellent Protections' },
  { icon: <TeamIcon />, title: 'Dedicated Team' },
  { icon: <CallIcon />, title: '24/7 Technical Support' },
];

const OurSolution = () => {
  return (
    
    <div className='bg-gradient-thinLightGreen container mx-auto px-6 sm:px-0 xl:px-10   mb-20 xl:mb-36'>
      <div className='grid sm:grid-cols-2 content-center pt-5'>
        <div className=''>
          <HeadingL className='mb-4 text-timberGreen'>Our Solutions</HeadingL>
          <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  leading-9 font-medium text-blackPearl'>What Makes <span className='text-timberGreen'>Musarat</span>  Different</h2>
          <ParagraphText className='text-slateBlue my-14'>
            Reach the right decisions by accessing your stats at a glance.
            Analyze your performance and gain flexibility with our intuitive
            dashboard to achieve
          </ParagraphText>
          <ul className='space-y-6'>
            {solutionsData.map((item,index) => (
              <li
                key={index}
                className='flex items-center gap-6'
              >
                {item?.icon} <HeadingXL >{item?.title}</HeadingXL> 
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden sm:flex justify-center items-center'>
          <Image className='max-w-md max-h-[438]'  src={solutionCover} alt='solution_cover'/>
        </div>
      </div>
    </div>
  );
};

export default OurSolution;
