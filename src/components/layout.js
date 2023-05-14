import Footer from '@/layout/footer/Footer';
import Header from '@/layout/header/Header';
import React from 'react';
import BreadCrumb from './molecules/BreadCrumb';

const Layout = ({ children }) => {

  return (
    <>
      <div className='bg-whiteGreen mb-20'>
        <Header />
        <BreadCrumb/>
      </div>

      <main>{children}</main>
      <Footer socialMediaAccount={children?.props?.socialMediaAccount} footerInfo={children?.props?.footerInfo}/>
    </>
  );
};

export default Layout;