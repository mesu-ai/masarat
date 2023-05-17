import React from 'react';
import HtmlToMarkdown from '../molecules/HtmlToMarkdown';
import { useTranslation } from 'react-i18next';

const OurTermsAndCondition = ({terms={}}) => {
  const {i18n}=useTranslation();
  return (
    <div className='container mx-auto px-6 sm:px-0 xl:px-10 pt-5 pb-28 '>
      <HtmlToMarkdown
              content={
                i18n.language === 'en'
                  ? terms?.termsAndConditions
                  : terms?.termsAndConditions_ar
                  ? terms?.termsAndConditions_ar
                  : terms?.termsAndConditions
              }
            />
      
    </div>
  );
};

export default OurTermsAndCondition;