import SupportIcon from '@/assets/svgs/SupportIcon';
import React from 'react';
import HeadingXL from '../atoms/HeadingXL';
import Heading6XL from '../atoms/Heading6XL';
import ParagraphText from '../atoms/ParagraphText';
import Button from '../atoms/Button';
import { useTranslation } from 'react-i18next';
import SliderShow from '../molecules/SliderShow';
import SlideCard from '../molecules/SlideCard';

const reviewers = [
  {
    phote: '',
    name: 'kamal',
    designation: 'CEO, Supreme World',
    rating:4,
    review:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam.',
  },
  {
    phote: '',
    name: 'jamal',
    designation: 'ceo',
    rating:5,
    review:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam.',
  },
  {
    phote: '',
    name: 'rubel',
    designation: 'ceo',
    rating:3,
    review:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam.',
  },
];

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className='container mx-auto px-6 sm:px-0 xl:px-10  py-0 lg:py-3 '>
      <div className='grid grid-cols-2'>
        <div>
          <li className='list-none flex items-center gap-6 mb-6'>
            <SupportIcon />
            <HeadingXL>Best Supportive Team Ever</HeadingXL>
          </li>
          <Heading6XL>{t('We Support To Grow Your Business')}</Heading6XL>
          <ParagraphText className='text-slateBlue mt-10'>
            Choose Masarat Digital to get software development, AI & Tech
            Consulting support for your digital products.{' '}
          </ParagraphText>
          <Button
            title='Contact Us'
            className='bg-gradient-lightGreen text-slateBlue mt-8'
          ></Button>

{/* rtl:-scale-x-100 */}
          <div className='mt-8 lg:mt-16 '>
            <SliderShow>
              {reviewers &&
                reviewers.map((review,index) => (
                  <SlideCard
                    key={index}
                    review={review}
                  />
                ))}
            </SliderShow>

            {/* {reviewers &&
                reviewers.map((review,index) => (
                  <SlideCard
                    key={index}
                    review={review}
                  />
                ))} */}
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default HeroSection;
