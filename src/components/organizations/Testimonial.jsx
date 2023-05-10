import React from 'react';
import Card from '../atoms/Card';
import Heading from '../molecules/Heading';
import SlideCard from '../molecules/SlideCard';
import SliderShow from '../molecules/SliderShow';
import HeadingL from '../atoms/HeadingL';
import Heading5XL from '../atoms/Heading5XL';

const reviewers = [
  {
    phote: '',
    name: 'kamal',
    designation: 'CEO, Supreme World',
    rating: 4,
    review:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam.',
  },
  {
    phote: '',
    name: 'jamal',
    designation: 'ceo',
    rating: 5,
    review:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam.',
  },
  {
    phote: '',
    name: 'rubel',
    designation: 'ceo',
    rating: 3,
    review:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam.',
  },
];

const Testimonial = () => {
  return (
    <div>
      <div className='container  mx-auto px-6 sm:px-0 xl:px-10  mb-20 xl:mb-36  mt-36'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 bg-offWhite p-5 rounded-3xl lg:rounded-[64px] lg:p-20 2xl:p-24'>
          <div className='space-y-2'>
            <HeadingL>Testimonial</HeadingL>
            <Heading5XL>Latest Project We Have Delivered</Heading5XL>
            {/* <Heading className='' keyword='Testimonial' title='Latest Project We Have Delivered'/> */}
          </div>
          <div className=''>
            <SliderShow showDot={false} showArrow={true} >
              {reviewers &&
                reviewers.map((review, index) => (
                  <SlideCard
                    key={index}
                    review={review}
                    className='pb-20'
                  />
                ))}
            </SliderShow>
          </div>
        </div>
        {/* <SliderShow showDot={false}>
              {reviewers &&
                reviewers.map((review, index) => (
                  <SlideCard
                    key={index}
                    review={review}
                  />
                ))}
          </SliderShow> */}
      </div>
    </div>
  );
};

export default Testimonial;
