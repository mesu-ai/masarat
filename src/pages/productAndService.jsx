import ContactUsBanner from '@/components/organizations/ContactUsBanner';
import FAQSection from '@/components/organizations/FAQSection';
import OurTeamDo from '@/components/organizations/OurTeamDo';
import ServiceDetails from '@/components/organizations/ServiceDetails';
import { getAllPosts } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import React from 'react';
import { useTranslation } from 'react-i18next';

const productAndService = ({faqDatas=[], allServices=[],teamWorkingProcess=[]}) => {

  return (
    <div>
      <ServiceDetails services={allServices}/>
      <OurTeamDo workingProcess={teamWorkingProcess}/>
      <FAQSection faqDatas={faqDatas}/>
      <ContactUsBanner />
    </div>
  );
};

export default productAndService;

export async function getStaticProps() {
  const faqDatas = getAllPosts(['question','question_ar','answer','answer_ar'],'content/faq');
  const teamWorkingProcess = getAllPosts(['photo','title','title_ar','shortDescription','shortDescription_ar'],'content/workingProcess');

  const services = getAllPosts(
    [
      'name',
      'name_ar',
      'icon',
      'shortDescription',
      'shortDescription_ar',
      'slug',
      'serviceDetails',
      'serviceDetails_ar',
    ],
    'content/services'
  );

  const allServices = await Promise.all(services.map(async (item) => {
    return {
      ...item,
      serviceDetails: await markdownToHtml(item?.serviceDetails || ''),
      serviceDetails_ar: await markdownToHtml(item?.serviceDetails_ar || ''),
    };
  }));
 
  return {
    props: { faqDatas,  allServices, teamWorkingProcess}
  }
}

