import React from 'react';

const HeadingXL = ({className='text-timberGreen',children}) => {
  return (
    <h4 className={`text-lg md:text-xl  leading-8 font-medium ${className}`}>{children}</h4>
  );
};

export default HeadingXL;