import Layout from '@/components/layout'
import i18n from '@/i18n/config'
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


import '@/styles/globals.css'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function App({ Component, pageProps }) {

  const { i18n } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage(localStorage.getItem('language'));
	}, [i18n]);

  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <Component {...pageProps} />
      </>
    )
  }


  return <Layout><Component {...pageProps} /></Layout>
}
