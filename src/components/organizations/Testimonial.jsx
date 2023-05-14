import React from 'react';
import Card from '../atoms/Card';
import Heading from '../molecules/Heading';
import SlideCard from '../molecules/SlideCard';
import SliderShow from '../molecules/SliderShow';
import HeadingL from '../atoms/HeadingL';
import Heading5XL from '../atoms/Heading5XL';



const Testimonial = ({clientReviews=[]}) => {
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
              {clientReviews &&
                clientReviews.map((review, index) => (
                  <SlideCard
                    key={index}
                    review={review}
                    className='pb-20'
                  />
                ))}
            </SliderShow>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonial;
