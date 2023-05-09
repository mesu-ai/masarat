import Image from 'next/image';
import React from 'react';
import HeadingL from '../atoms/HeadingL';
import Heading5XL from '../atoms/Heading5XL';
import ParagraphText from '../atoms/ParagraphText';
import Heading2XL from '../atoms/Heading2XL';
import Button from '../atoms/Button';
import aboutBanner from '@/assets/images/aboutBanner.png';


const AboutUsSection = () => {
  return (
    <div className='container-left grid  lg:grid-cols-2 gap-10 mx-auto ps-6 sm:ps-0 xl:ps-10  py-0 lg:py-3 mb-20 xl:mb-36'>
      <div className='my-auto'>
        <div className='space-y-6'>
          <HeadingL>About Us</HeadingL>

          <Heading5XL>
            We Have 15 Years Of Experience On Business Development area
          </Heading5XL>
          <ParagraphText>
            Masarat Digital is a Technology company that provide software
            development, AI & Tech Consulting. Masarat Digital Company is
            advance technology enabler in various industries/ tracks / paths
            (HR, Healthcare, Supply Chain & Sports). For the consulting area,
            Masarat is focusing on digital strategy, process reengineering,
            digital marketing, digital transformation, digital enablement, and
            advanced analytics.
          </ParagraphText>
        </div>

        <ul className='flex gap-10 mt-8'>
          <li className='space-y-2'>
            <Heading2XL>1432+</Heading2XL>
            <ParagraphText>Happy Clients</ParagraphText>
          </li>
          <li className='space-y-2'>
            <Heading2XL>1432+</Heading2XL>
            <ParagraphText>Project Completed</ParagraphText>
          </li>
        </ul>

        <Button
          title='View Services'
          className='bg-gradient-lightGreen text-slateBlue mt-10'
        ></Button>
      </div>
      <div className='ms-auto'>
        
        <Image src={aboutBanner} alt=""/>
      </div>
    </div>
  );
};

export default AboutUsSection;
