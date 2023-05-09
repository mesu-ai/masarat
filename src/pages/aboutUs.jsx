import AboutUsSection from '@/components/organizations/AboutUsSection';
import ContactUsBanner from '@/components/organizations/ContactUsBanner';
import OurVisions from '@/components/organizations/OurVisions';
import OurWorks from '@/components/organizations/OurWorks';
import ProjectCountsection from '@/components/organizations/ProjectCountsection';
import ProjectManagerInfo from '@/components/organizations/ProjectManagerInfo';
import React from 'react';

const aboutus = () => {
  return (
    <div>
      <AboutUsSection/>
      <ProjectManagerInfo/>
      <ProjectCountsection/>
      <OurVisions/>
      <OurWorks/>
      <ContactUsBanner/>
      
    </div>
  );
};

export default aboutus;