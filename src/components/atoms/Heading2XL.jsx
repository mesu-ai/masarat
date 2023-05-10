import React from 'react';
import { useTranslation } from 'react-i18next';

const Heading2XL = ({className='text-blackPearl font-bold',children}) => {
  const {t}=useTranslation();
  return (
    <h3 className={`text-lg sm:text-xl xl:text-2xl  leading-8 font-bold ${className}`}>{t(`${children}`)}</h3>
  );
};

export default Heading2XL;