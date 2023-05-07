import React from 'react';

const Heading5XL = ({className='text-blackPearl',children}) => {
  return (
    <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  leading-9 font-medium ${className}`}>{children}</h2>
  );
};

export default Heading5XL;