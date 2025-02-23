import AboutUsSection from '@/components/organizations/AboutUsSection';
import ContactUsBanner from '@/components/organizations/ContactUsBanner';
import OurTeamMember from '@/components/organizations/OurTeamMember';
import OurVisions from '@/components/organizations/OurVisions';
import OurWorks from '@/components/organizations/OurWorks';
import ProjectManagerInfo from '@/components/organizations/ProjectManagerInfo';
import ProjectSummery from '@/components/organizations/ProjectSummery';
import Testimonial from '@/components/organizations/Testimonial';
import Footer from '@/layout/footer/Footer';
import { getAllPosts } from '@/lib/api';
import React from 'react';

const aboutUs = ({clientReviews=[],ourMembers=[],ourvideo,aboutMasarat={},aboutManagement={},aboutSummery={},contactBanner={}, socialMediaAccount={},footerInfo={}}) => {


  return (
    <div>
      <AboutUsSection aboutMasarat={aboutMasarat} aboutSummery={aboutSummery}/>
      <ProjectManagerInfo aboutManagement={aboutManagement}/>
      <ProjectSummery aboutSummery={aboutSummery}/>
      <OurVisions/>
      <OurTeamMember teamMeambers={ourMembers}/>
      <OurWorks ourvideo={ourvideo}/>
      <Testimonial clientReviews={clientReviews}/>
      <ContactUsBanner contactBanner={contactBanner}/>
      
      
    </div>
  );
};

export default aboutUs;


export async function getStaticProps() {
  const clientReviews = getAllPosts(['name', 'photo', 'designation', 'rating', 'slug', 'opinion'],'content/clientReview');
  const ourMembers=getAllPosts(['name','designation','photo'],'content/teamMembers');
  const ourvideo=getAllPosts(['workingVideoLink'],'content/videos');
  const aboutMasaratInfo=getAllPosts(['aboutMasarat'],'content/aboutUs');
  const masaratContactInfo = getAllPosts(['masaratcontactInfo'],'content/contactUs');

  const aboutMasarat=aboutMasaratInfo[aboutMasaratInfo.length - 1]?.aboutMasarat
  .find(item=>item?._template==='aboutMasarat');
  const aboutManagement=aboutMasaratInfo[aboutMasaratInfo.length - 1]?.aboutMasarat
  .find(item=>item?._template==='managementInfo');
  const aboutSummery=aboutMasaratInfo[aboutMasaratInfo.length - 1]?.aboutMasarat
  .find(item=>item?._template==='projectSummery');


 

  const contactBanner= masaratContactInfo[0].masaratcontactInfo.find(item=>item?._template === 'contactBanner');


  const footerSection=getAllPosts(['masaratFooter'],'content/footerSection');
  const socialMediaAccount=footerSection[0].masaratFooter.find(item=>item?._template === 'socialMedia')
  const footerInfo=footerSection[0].masaratFooter.find(item=>item?._template === 'footerInformation')

 
  return {
    props: {clientReviews,ourMembers,ourvideo, aboutMasarat,aboutManagement,aboutSummery,contactBanner,socialMediaAccount,footerInfo},
  }
}



