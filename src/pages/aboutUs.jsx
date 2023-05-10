import AboutUsSection from '@/components/organizations/AboutUsSection';
import ContactUsBanner from '@/components/organizations/ContactUsBanner';
import OurTeam from '@/components/organizations/OurTeam';
import OurVisions from '@/components/organizations/OurVisions';
import OurWorks from '@/components/organizations/OurWorks';
import ProjectCountsection from '@/components/organizations/ProjectCountsection';
import ProjectManagerInfo from '@/components/organizations/ProjectManagerInfo';
import Testimonial from '@/components/organizations/Testimonial';
import React from 'react';

const aboutus = () => {
  return (
    <div>
      <AboutUsSection/>
      <ProjectManagerInfo/>
      <ProjectCountsection/>
      <OurVisions/>
      <OurTeam/>
      <OurWorks/>
      <Testimonial/>
      <ContactUsBanner/>
      
    </div>
  );
};

export default aboutus;