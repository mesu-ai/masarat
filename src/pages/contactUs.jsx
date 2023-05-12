import ContractForm from '@/components/organizations/ContractForm';
import { getAllPosts } from '@/lib/api';

import React from 'react';

const contactUs = ({contactInfo=[]}) => {
  console.log(contactInfo)
  return (
    <div>
      <ContractForm contactInfo={contactInfo[0]}/>
    </div>
  );
};

export default contactUs;

export async function getStaticProps() {
  const contactInfo = getAllPosts(['contactInformation'],'content/contactInfo')
 
  return {
    props: { contactInfo },
  }
}

