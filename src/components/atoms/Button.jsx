import React from 'react';

const Button = ({title='Click', className='bg-gradient-greentimber', }) => {
  return (
      <button type="button" className={`text-sm font-normal rounded-md py-4 px-7 tracking-tight ${className}`} >{title}</button>
  );
};

export default Button;