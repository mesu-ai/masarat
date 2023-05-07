import React from 'react';

const Heading2XL = ({className='text-blackPearl',children}) => {
  return (
    <h3 className={`text-lg sm:text-xl xl:text-2xl  leading-8 font-bold ${className}`}>{children}</h3>
  );
};

export default Heading2XL;