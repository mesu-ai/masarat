import ContractForm from '@/components/organizations/ContractForm';
import { getAllPosts } from '@/lib/api';

import React from 'react';

const contactUs = ({contactInfo={}}) => {
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
  
 
  return {
    props: { contactInfo },
  }
}

