import ContactUsBanner from '@/components/organizations/ContactUsBanner';
import FAQSection from '@/components/organizations/FAQSection';
import OurTeamDo from '@/components/organizations/OurTeamDo';
import React from 'react';
import { useTranslation } from 'react-i18next';

const productAndService = () => {
  return (
    <div>
      <OurTeamDo/>
      <FAQSection/>
      <ContactUsBanner />
    </div>
  );
};

export default productAndService;
