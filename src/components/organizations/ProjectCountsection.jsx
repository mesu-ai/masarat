import React from 'react';
import Card from '../atoms/Card';
import Heading5XL from '../atoms/Heading5XL';
import ParagraphText from '../atoms/ParagraphText';

const countData = [
  { name: 'Complete Projects', count: '1600+' },
  { name: 'Cooperation company', count: '1600+' },
  { name: 'Happy Clients', count: '1600+' },
];

const ProjectCountsection = () => {
  return (
    <div className=' container mx-auto px-6 sm:px-0 xl:px-10  mb-20 xl:mb-36 '>
      <div className='bg-thinGreen grid sm:grid-cols-3 gap-7 text-center rounded-[36px] py-[45px] md:py-[70px]'>
        {countData.map((item,index) => (
          <div key={index} className='sm:space-y-4'>
            <Heading5XL>{item?.count}</Heading5XL>
            <ParagraphText>{item?.name}</ParagraphText>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default ProjectCountsection;
