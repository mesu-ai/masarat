import React from 'react';
import HtmlToMarkdown from '../molecules/HtmlToMarkdown';
import { useTranslation } from 'react-i18next';

const OurPrivacyPolicy = ({policy={}}) => {
  const {i18n}=useTranslation();
  return (
    <div className='container mx-auto px-6 sm:px-0 xl:px-10 pt-5 pb-28 '>
      <HtmlToMarkdown
              content={
                i18n.language === 'en'
                  ? policy?.privacyPolicyInfo
                  : policy?.privacyPolicyInfo_ar
                  ? policy?.privacyPolicyInfo_ar
                  : policy?.privacyPolicyInfo
              }
            />
      
    </div>
  );
};

export default OurPrivacyPolicy;