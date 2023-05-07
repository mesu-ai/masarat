import React from 'react';

const HeadingL = ({className='text-timberGreen',children}) => {
  return (
    <h6 className={`text-lg  leading-8 font-medium ${className}`}>{children}</h6>
  );
};

export default HeadingL;