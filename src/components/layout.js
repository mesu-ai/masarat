import Footer from '@/layout/footer/Footer';
import Header from '@/layout/header/Header';
import React from 'react';

const Layout = ({children}) => {
  return (
    <>
      <Header/>
       <main>{children}</main>
      <Footer /> 
    </>
  );
};

export default Layout;