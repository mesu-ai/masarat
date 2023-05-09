import AboutUsSection from '@/components/organizations/AboutUsSection';
import ContactUsBanner from '@/components/organizations/ContactUsBanner';
import OurVision from '@/components/organizations/OurVision';
import ProjectCountsection from '@/components/organizations/ProjectCountsection';
import ProjectManagerInfo from '@/components/organizations/ProjectManagerInfo';
import React from 'react';

const aboutus = () => {
  return (
    <div>
      <AboutUsSection/>
      <ProjectManagerInfo/>
      <ProjectCountsection/>
      <OurVision/>
      <ContactUsBanner/>
      
    </div>
  );
};

export default aboutus;