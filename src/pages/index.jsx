import Image from 'next/image';
import { Inter } from 'next/font/google';
import HeroSection from '@/components/organizations/HeroSection';
import Header from '@/layout/header/Header';
import Footer from '@/layout/footer/Footer';
import bgimage from '@/assets/images/heroBg.svg';

const inter = Inter({ subsets: ['latin'] });


const bgstyle = {
  backgroundImage: `url(${bgimage.src})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  // transform: 'rotate(5.2deg)',
  
};

const Home = () => {

  return (
   
    <>
      <p>Test other sectin</p>
    </>

  );
};

// style={bgstyle}
// style={{transform:'rotate(-5deg)'}}
Home.getLayout = (page) => (
  <>
    <div style={bgstyle} >
      <div >
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
