import React from 'react';
import Heading from '../molecules/Heading';
import ParagraphText from '../atoms/ParagraphText';

const OurVisions = () => {
  return (
    <div id='vision' className='container mx-auto px-6 sm:px-0 xl:px-10  pt-20 xl:pt-36 text-center'>
      <Heading
        className='mb-6 sm:mb-10 lg:mb-16'
        keyword='Our Visions'
        title='Provide The Creative Solutions'
      />
      <div className='max-w-[900px] mx-auto'>
        <ParagraphText>
          Our vision as a digital agency is to empower businesses and
          individuals to connect and communicate effectively in the digital
          landscape that inspires trust, delivers exceptional value, and exceeds
          expectations.
        </ParagraphText>
      </div>
    </div>
  );
};

export default OurVisions;
