import React from 'react';
import { useTranslation } from 'react-i18next';

const Heading5XL = ({className='text-blackPearl',children}) => {
  const { t } = useTranslation();
  return (
    <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  leading-9 font-medium ${className}`}>{t(`${children}`)}</h2>
  );
};

export default Heading5XL;