import Image from 'next/image';
import React from 'react';
import HeadingL from '../atoms/HeadingL';
import Heading5XL from '../atoms/Heading5XL';
import ParagraphText from '../atoms/ParagraphText';
import Heading2XL from '../atoms/Heading2XL';
import Button from '../atoms/Button';
import aboutBanner from '@/assets/images/aboutBanner.png';
import { useTranslation } from 'react-i18next';

const AboutUsSection = ({aboutMasarat={}}) => {
  const {t,i18n}=useTranslation();
  console.log(aboutMasarat)
  return (
    <div className={`${i18n.language==='en' ? 'ltr:container-left ' : 'rtl:container-right'}`}>
      <div className=' grid  lg:grid-cols-2 gap-10 mx-auto ltr:ps-6 ltr:sm:ps-0 ltr:xl:ps-10 rtl:pe-6 rtl:sm:pe-0 rtl:xl:pe-10  py-0 lg:py-3 mb-20 xl:mb-36'>
        <div className='my-auto'>
          <div className='space-y-6 max-w-2xl lg:max-w-4xl'>
            <HeadingL>About Us</HeadingL>

            <Heading5XL>
              {i18n.language==='en' ? aboutMasarat?.title :  aboutMasarat?.title_ar ? aboutMasarat?.title_ar : aboutMasarat?.title }
            </Heading5XL>
            <ParagraphText>
            {i18n.language==='en' ? aboutMasarat?.description :  aboutMasarat?.description_ar ? aboutMasarat?.description_ar : aboutMasarat?.description }
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
        <div className='ltr:ms-auto rtl:me-auto'>
          <Image
            src={aboutMasarat?.coverPhoto}
            alt='about_cover'
            className='rtl:-scale-x-100'
            width={800}
            height={800}
            // className=' ltr:lg:right-0 rtl:lg:left-0 rtl:-scale-x-100  lg:absolute   w-full lg:w-auto h-full '
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
