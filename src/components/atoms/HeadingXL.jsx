import React from 'react';
import { useTranslation } from 'react-i18next';

const HeadingXL = ({ className = 'text-timberGreen', children }) => {
  const { t } = useTranslation();
  return (
    <h4 className={`text-lg md:text-xl  leading-8 font-medium ${className}`}>
      {t(`${children}`)}
    </h4>
  );
};

export default HeadingXL;
