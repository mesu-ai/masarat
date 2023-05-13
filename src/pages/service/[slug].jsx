import ContactUsBanner from '@/components/organizations/ContactUsBanner';
import FAQSection from '@/components/organizations/FAQSection';
import OurTeamDo from '@/components/organizations/OurTeamDo';
import ServiceDetails from '@/components/organizations/ServiceDetails';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import React from 'react';
import { useTranslation } from 'react-i18next';

const serviceDetailsPage = ({ serivce = {}, allServices = [] }) => {
  

  return (
    <div>
      <ServiceDetails
        services={allServices?.allServices}
        service={serivce}
      />
    </div>
  );
};

export default serviceDetailsPage;

export async function getStaticProps({ params }) {
  const data = getPostBySlug(
    params.slug,
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

  const serviceDetails = await markdownToHtml(data?.serviceDetails || '');
  const serviceDetails_ar = await markdownToHtml(data?.serviceDetails_ar || '');

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

  // const allServices = services.map((item) => {
  //   return {
  //     ...item,
  //     serviceDetails: markdownToHtml(item?.serviceDetails || ''),
  //     serviceDetails_ar: markdownToHtml(item?.serviceDetails_ar || ''),
  //   };
  // });

  // const allServices =services && services.map(async (item) => {
  //   return {
  //     serviceDetails: await markdownToHtml(item?.serviceDetails || ''),
  //     serviceDetails_ar: await markdownToHtml(item?.serviceDetails_ar || ''),
  //   };
  // });

  const allServices = await Promise.all(services.map(async (item) => {
    return {
      ...item,
      serviceDetails: await markdownToHtml(item?.serviceDetails || ''),
      serviceDetails_ar: await markdownToHtml(item?.serviceDetails_ar || ''),
    };
  }));

  
 

  // console.log(allServices);

  return {
    props: {
      serivce: {
        ...data,
        serviceDetails,
        serviceDetails_ar,
      },
      allServices: { allServices },
    },
  };
}

export async function getStaticPaths() {
  const datas = getAllPosts(['slug'], 'content/services');

  return {
    paths: datas.map((data) => {
      return {
        params: {
          slug: data.slug,
        },
      };
    }),
    fallback: false,
  };
}

// export async function getStaticProps() {
//   const faqDatas = getAllPosts(['question','question_ar','answer','answer_ar'],'content/faq')

//   return {
//     props: { faqDatas },
//   }
// }
