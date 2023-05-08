import React from 'react';
import { useTranslation } from 'react-i18next';

const HeadingL = ({className='text-timberGreen',children}) => {
  const { t } = useTranslation();
  return (
    <h6 className={`text-lg  leading-8 font-medium ${className}`}>{t(`${children}`)}</h6>
  );
};

export default HeadingL;