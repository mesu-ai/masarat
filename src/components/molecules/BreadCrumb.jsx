import React from 'react';
import Heading6XL from '../atoms/Heading6XL';
import ParagraphText from '../atoms/ParagraphText';
import { useRouter } from 'next/router';

const BreadCrumb = () => {
  const route = useRouter();
  // console.log({ route });
  return (
    <div className='text-center space-y-6 pt-5 pb-5'>
      <Heading6XL>
        {route.pathname.includes('productAndService')
          ? 'Detail Service'
          : route.pathname.includes('aboutUs')
          ? 'About us'
          : 'Contact us'}
      </Heading6XL>
    
      <h3 className='text-base md:text-lg font-normal text-slateBlue'>
        Home /{' '}
        {route.pathname.includes('productAndService')
          ? 'Detail Service'
          : route.pathname.includes('aboutUs')
          ? 'About us'
          : 'Contact us'}
      </h3>
    </div>
  );
};

export default BreadCrumb;
