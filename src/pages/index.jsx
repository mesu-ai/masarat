import Image from 'next/image';
import { Inter } from 'next/font/google';
import HeroSection from '@/components/organizations/HeroSection';
import Header from '@/layout/header/Header';
import Footer from '@/layout/footer/Footer';
import bgimage from '@/assets/images/beroBg.png';
import ContactUsBanner from '@/components/organizations/ContactUsBanner';
import OurServices from '@/components/organizations/OurServices';
import OurProjects from '@/components/organizations/OurProjects';
import OurSolution from '@/components/organizations/OurSolution';
import OurPartner from '@/components/organizations/OurPartner';
import { getAllPosts } from '@/lib/api';
import OurTeamMember from '@/components/organizations/OurTeamMember';
// import { getAllData } from '@/lib/customApi';

const inter = Inter({ subsets: ['latin'] });

const bgstyle = {
  backgroundImage: `url(${bgimage.src})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  // transform: 'rotate(5.2deg) scale(1.2)',
};

const Home = ({clientReviews=[] , ourPartners=[],ourMembers=[],ourProjects=[]}) => {

  return (
    <>
      <OurPartner ourPartners={ourPartners}/>
      <OurServices />
      <OurSolution />
      <OurProjects projects={ourProjects}/>
      <OurTeamMember teamMeambers={ourMembers}/>
      <ContactUsBanner />
    </>
  );
};

// style={bgstyle}
// style={{transform:'rotate(-5deg)'}}
Home.getLayout = (page) => {
  // console.log(page?.props?.children?.props)
  return(<>
    <div style={bgstyle}>
      <div>
        <Header />
        <HeroSection clientReviews={page?.props?.children?.props?.clientReviews}/>
      </div>
    </div>

    <div>
      <main>{page}</main>
      <Footer />
    </div>
  </>)
};

export default Home;


export async function getStaticProps() {
  const clientReviews = getAllPosts(['name', 'photo', 'designation', 'rating', 'slug', 'opinion'],'content/clientReview');
  const ourPartners = getAllPosts(['name', 'logo'],'content/partners');
  const ourMembers=getAllPosts(['name','designation','photo'],'content/teamMembers');
  const ourProjects=getAllPosts(['name','type','coverPhoto'],'content/projects')
  
  return {
    props: { clientReviews, ourPartners,ourMembers,ourProjects },
  }
}
