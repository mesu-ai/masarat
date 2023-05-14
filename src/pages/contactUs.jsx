import ContractForm from '@/components/organizations/ContractForm';
import { getAllPosts } from '@/lib/api';

import React from 'react';

const contactUs = ({contactInfo={},socialMediaAccount={}, footerInfo={}}) => {
  // const con_info= contactInfo[0].masaratcontactInfo.filter(item=>item?._template === 'contactInfo');

  return (
    <div>
      <ContractForm contactInfo={contactInfo}/>
    </div>
  );
};

export default contactUs;

export async function getStaticProps() {
  const masaratContactInfo = getAllPosts(['masaratcontactInfo'],'content/contactUs');

  const contactInfo= masaratContactInfo[0].masaratcontactInfo.find(item=>item?._template === 'contactInfo');

  const footerSection=getAllPosts(['masaratFooter'],'content/footerSection');
  const socialMediaAccount=footerSection[0].masaratFooter.find(item=>item?._template === 'socialMedia')
  const footerInfo=footerSection[0].masaratFooter.find(item=>item?._template === 'footerInformation')
  
 
  return {
    props: { contactInfo , socialMediaAccount, footerInfo},
  }
}

