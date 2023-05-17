import OurPrivacyPolicy from '@/components/organizations/OurPrivacyPolicy';
import { getAllPosts } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';
import React from 'react';

const privacyPolicy = ({socialMediaAccount={},footerInfo={},policy={}}) => {
 
  return (
    
      <OurPrivacyPolicy policy={policy}/>
  );
};

export default privacyPolicy;

export async function getStaticProps() {

  const policyAndConditions = getAllPosts(['masaratPolicyConditions'],'content/policyAndconditions');
  const masaratPrivacyPolicy= policyAndConditions[0]. masaratPolicyConditions.find(item=>item?._template === 'masaratPrivaryPolicy');

  const footerSection=getAllPosts(['masaratFooter'],'content/footerSection');
  const socialMediaAccount=footerSection[0].masaratFooter.find(item=>item?._template === 'socialMedia');
  const footerInfo=footerSection[0].masaratFooter.find(item=>item?._template === 'footerInformation');


    const privacyPolicyInfo= await markdownToHtml(masaratPrivacyPolicy?.privacyPolicy || '');
    const privacyPolicyInfo_ar= await markdownToHtml(masaratPrivacyPolicy?.privacyPolicy_ar || '');
 
  return {
    props: { socialMediaAccount, footerInfo, policy:{privacyPolicyInfo,privacyPolicyInfo_ar}}
  }
}