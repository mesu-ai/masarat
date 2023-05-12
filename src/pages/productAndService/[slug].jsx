import ContactUsBanner from '@/components/organizations/ContactUsBanner';
import FAQSection from '@/components/organizations/FAQSection';
import OurTeamDo from '@/components/organizations/OurTeamDo';
import ServiceDetails from '@/components/organizations/ServiceDetails';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import React from 'react';
import { useTranslation } from 'react-i18next';

const serviceDetailsPage = ({faqDatas=[],data}) => {
  console.log({data})
  return (
    <div>
      <ServiceDetails/>
      <OurTeamDo/>
      {/* <FAQSection faqDatas={faqDatas}/> */}
      <ContactUsBanner />
    </div>
  );
};

export default serviceDetailsPage;


export async function getStaticProps({ params }) {
  const data = getPostBySlug(
    params.slug,
    (['name','name_ar','icon','shortDescription','shortDescription_ar','slug','description']),'content/services'
  );

  // const allData = getAllData(
  //   ['projectName', 'title', 'thumbnailImage', 'coverImage', 'slug', 'summary', 'description'],
  //   'content/caseStudy'
  // );

  // const similarBlogs = allBlogs.filter((item) => item.tag === data?.tag);

  const description = await markdownToHtml(data?.description || '');

  console.log(data)

  return {
    props: {
      data: {
        ...data,
        description,
      },
      // datas: allData,
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