import OurTermsAndCondition from '@/components/organizations/OurTermsAndCondition';
import { getAllPosts } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import React from 'react';

const termsAndConditions = ({socialMediaAccount={}, footerInfo={}, terms={}}) => {
  return (
    
      <OurTermsAndCondition terms={terms}/>
  );
};

export default termsAndConditions;


export async function getStaticProps() {

  const policyAndConditions = getAllPosts(['masaratPolicyConditions'],'content/policyAndconditions');
  const masaratTermsConditions= policyAndConditions[0]. masaratPolicyConditions.find(item=>item?._template === 'masaratTermsConditions');

  const footerSection=getAllPosts(['masaratFooter'],'content/footerSection');
  const socialMediaAccount=footerSection[0].masaratFooter.find(item=>item?._template === 'socialMedia');
  const footerInfo=footerSection[0].masaratFooter.find(item=>item?._template === 'footerInformation');


    const termsAndConditions= await markdownToHtml(masaratTermsConditions?.termsConditions || '');
    const termsAndConditions_ar= await markdownToHtml(masaratTermsConditions?.termsConditions_ar || '');
 
  return {
    props: { socialMediaAccount, footerInfo, terms:{termsAndConditions,termsAndConditions_ar}}
  }
}