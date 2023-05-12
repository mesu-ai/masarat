import AboutUsSection from '@/components/organizations/AboutUsSection';
import ContactUsBanner from '@/components/organizations/ContactUsBanner';
import OurTeam from '@/components/organizations/OurTeam';
import OurVisions from '@/components/organizations/OurVisions';
import OurWorks from '@/components/organizations/OurWorks';
import ProjectCountsection from '@/components/organizations/ProjectCountsection';
import ProjectManagerInfo from '@/components/organizations/ProjectManagerInfo';
import Testimonial from '@/components/organizations/Testimonial';
import { getAllPosts } from '@/lib/api';
import React from 'react';

const aboutus = ({clientReviews=[]}) => {
  return (
    <div>
      <AboutUsSection/>
      <ProjectManagerInfo/>
      <ProjectCountsection/>
      <OurVisions/>
      <OurTeam/>
      <OurWorks/>
      <Testimonial clientReviews={clientReviews}/>
      <ContactUsBanner/>
      
    </div>
  );
};

export default aboutus;


export async function getStaticProps() {
  const clientReviews = getAllPosts(['name', 'photo', 'designation', 'rating', 'slug', 'opinion'],'content/clientReview')
  // const ourPartners = getAllPosts(['name', 'logo'],'content/partners')
  // console.log({clientReviews})
  return {
    props: {clientReviews},
  }
}