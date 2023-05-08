import React from 'react';
import { useTranslation } from 'react-i18next';

const ParagraphText = ({className='text-slateBlue',children}) => {
  const { t } = useTranslation();
  return (
    <h3 className={`text-base md:text-lg font-normal ${className}`}>{t(`${children}`)}</h3>
  );
};

export default ParagraphText;