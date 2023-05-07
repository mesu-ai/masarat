import React from 'react';

const ParagraphText = ({className='text-slateBlue',children}) => {
  return (
    <h3 className={`text-base md:text-lg font-normal ${className}`}>{children}</h3>
  );
};

export default ParagraphText;