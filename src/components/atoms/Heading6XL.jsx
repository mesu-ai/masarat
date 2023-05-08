import React from 'react';
import { useTranslation } from 'react-i18next';

const Heading6XL = ({className='text-timberGreen',children}) => {
  const { t } = useTranslation();
  return (
    <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-10 font-bold ${className}`}>{t(`${children}`)}</h1>
  );
};

export default Heading6XL;