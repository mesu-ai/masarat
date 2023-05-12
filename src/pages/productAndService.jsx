import ContactUsBanner from '@/components/organizations/ContactUsBanner';
import FAQSection from '@/components/organizations/FAQSection';
import OurTeamDo from '@/components/organizations/OurTeamDo';
import ServiceDetails from '@/components/organizations/ServiceDetails';
import { getAllPosts } from '@/lib/api';
import React from 'react';
import { useTranslation } from 'react-i18next';

const productAndService = ({faqDatas=[]}) => {
  return (
    <div>
      <ServiceDetails/>
      <OurTeamDo/>
      <FAQSection faqDatas={faqDatas}/>
      <ContactUsBanner />
    </div>
  );
};

export default productAndService;

export async function getStaticProps() {
  const faqDatas = getAllPosts(['question','question_ar','answer','answer_ar'],'content/faq')
 
  return {
    props: { faqDatas },
  }
}