import React from 'react';
import { useTranslation } from 'react-i18next';

const Button = ({title='Click',type='button', className='bg-gradient-greentimber',handleClick }) => {
  const {t}=useTranslation();

  return (
      <button onClick={handleClick} type={type} className={`text-sm font-normal rounded-md py-4 px-7 tracking-tight ${className}`} >{t(`${title}`)}</button>
  );
};

export default Button;