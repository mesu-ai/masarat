import React from 'react';

const Heading6XL = ({className='text-timberGreen',children}) => {
  return (
    <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-10 font-bold ${className}`}>{children}</h1>
  );
};

export default Heading6XL;