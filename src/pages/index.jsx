import Image from 'next/image';
import { Inter } from 'next/font/google';
import HeroSection from '@/components/organizations/HeroSection';
import Header from '@/layout/header/Header';
import Footer from '@/layout/footer/Footer';
import bgimage from '@/assets/images/heroBg.png';
import bgimageAr from '@/assets/images/heroBgAr.png';
import ContactUsBanner from '@/components/organizations/ContactUsBanner';
import OurServices from '@/components/organizations/OurServices';
import OurProjects from '@/components/organizations/OurProjects';
import OurSolution from '@/components/organizations/OurSolution';
import OurPartner from '@/components/organizations/OurPartner';
import { getAllPosts } from '@/lib/api';
import OurTeamMember from '@/components/organizations/OurTeamMember';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n/config';
// import { getAllData } from '@/lib/customApi';

const inter = Inter({ subsets: ['latin'] });

const bgstyle = {
  backgroundImage: `url(${bgimage.src})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

const bgstyleAr = {
  backgroundImage: `url(${bgimageAr.src})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};

const Home = ({clientReviews=[] , ourPartners=[],ourMembers=[],ourProjects=[],ourServices=[],contactBanner={},heroSection={}}) => {

 const {i18n}=useTranslation();

  return (
    <>
      <OurPartner ourPartners={ourPartners}/>
      <OurServices services={ourServices}/>
      <OurSolution />
      <OurProjects projects={ourProjects}/>
      <OurTeamMember teamMeambers={ourMembers}/>
      <ContactUsBanner contactBanner={contactBanner}/>
    </>
  );
};


Home.getLayout = (page) => {
 
  const {clientReviews,heroSection,socialMediaAccount,footerInfo}=page?.props?.children?.props;
  return(<>
    <div style={i18n.language=== 'en' ? bgstyle : bgstyleAr}>
      <div>
        <Header />
        <HeroSection clientReviews={clientReviews} heroSection={heroSection}/>
      </div>
    </div>

    <div>
      <main>{page}</main>
      <Footer footerInfo={footerInfo} socialMediaAccount={socialMediaAccount}/>
    </div>
  </>)
};

export default Home;


export async function getStaticProps() {
  const clientReviews = getAllPosts(['name', 'photo', 'designation', 'rating', 'slug', 'opinion'],'content/clientReview');
  const ourPartners = getAllPosts(['name', 'logo'],'content/partners');
  const ourMembers=getAllPosts(['name','designation','photo'],'content/teamMembers');
  const ourProjects=getAllPosts(['name','type','coverPhoto'],'content/projects');
  const ourServices=getAllPosts(['name','name_ar','icon','shortDescription','shortDescription_ar','slug','description'],'content/services');

  const masaratContactInfo = getAllPosts(['masaratcontactInfo'],'content/contactUs');
  const masaratHeroSection = getAllPosts(['homeheroSection'],'content/heroSection');

  
  const footerSection=getAllPosts(['masaratFooter'],'content/footerSection');


  const contactBanner= masaratContactInfo[0].masaratcontactInfo.find(item=>item?._template === 'contactBanner');
  const heroSection=masaratHeroSection[0].homeheroSection[0];
  // const footer=footerSection[0].masaratFooter;
  const socialMediaAccount=footerSection[0].masaratFooter.find(item=>item?._template === 'socialMedia')
  const footerInfo=footerSection[0].masaratFooter.find(item=>item?._template === 'footerInformation')

 
  
  return {
    props: { clientReviews, ourPartners,ourMembers,ourProjects,ourServices,contactBanner,heroSection,socialMediaAccount,footerInfo },
  }
}
