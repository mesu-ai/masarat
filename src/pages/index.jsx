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
import OurTeam from '@/components/organizations/OurTeam';
import { getAllPosts } from '@/lib/api';
// import { getAllData } from '@/lib/customApi';

const inter = Inter({ subsets: ['latin'] });

const bgstyle = {
  backgroundImage: `url(${bgimage.src})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  // transform: 'rotate(5.2deg) scale(1.2)',
};

const Home = ({clientReviews=[]}) => {

  // console.log({allPosts})
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
  const clientReviews = getAllPosts(['name', 'photo', 'designation', 'rating', 'slug', 'opinion'])
  // console.log({clientReviews})
  return {
    props: { clientReviews },
  }
}


// export async function getStaticProps() {
//   const clientReviews = getAllData(
//     ['name', 'photo', 'designation', 'rating', 'slug', 'opinion'],
//     'content/clientReview'
//   );

//   return {
//     props: { clientReviews },
//   };
// }