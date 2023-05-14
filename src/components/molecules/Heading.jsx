import React from 'react';
import HeadingL from '../atoms/HeadingL';
import Heading5XL from '../atoms/Heading5XL';

const Heading = ({ className='', keyword = '', title = '' }) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <HeadingL>{keyword}</HeadingL>
      <Heading5XL>{title}</Heading5XL>
    </div>
  );
};

export default Heading;
