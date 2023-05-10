import StarIcon from '@/assets/svgs/StarIcon';
import React from 'react';

const Rating = ({stars=0}) => {
  return (
    <div className='flex gap-1'>
      {[...new Array(5)].map((_, index) => {
						index += 1;
						return <StarIcon key={index} color={`${index <= Math.ceil(stars) ? '#F2B556' : '#E6E8EC'}`} />;
				})}
      
    </div>
  );
};

export default Rating;