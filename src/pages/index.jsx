import Image from 'next/image';
import { Inter } from 'next/font/google';
import HeroSection from '@/components/organizations/HeroSection';
import Header from '@/layout/header/Header';
import Footer from '@/layout/footer/Footer';
import bgimage from '@/assets/images/heroBg.svg';
import ContactUsBanner from '@/components/organizations/ContactUsBanner';
import OurServices from '@/components/organizations/OurServices';
import OurProjects from '@/components/organizations/OurProjects';
import OurSolution from '@/components/organizations/OurSolution';
import OurPartner from '@/components/organizations/OurPartner';
import OurTeam from '@/components/organizations/OurTeam';

const inter = Inter({ subsets: ['latin'] });

const bgstyle = {
  backgroundImage: `url(${bgimage.src})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  // transform: 'rotate(5.2deg) scale(1.2)',
};

const Home = () => {
  return (
    <>
      <OurPartner />
      <OurServices />
      <OurSolution />
      <OurProjects />
      <OurTeam/>
      <ContactUsBanner />
    </>
  );
};

// style={bgstyle}
// style={{transform:'rotate(-5deg)'}}
Home.getLayout = (page) => (
  <>
    <div style={bgstyle}>
      <div>
        <Header />
        <HeroSection />
      </div>
    </div>

    <div>
      <main>{page}</main>
      <Footer />
    </div>
  </>
);

export default Home;
