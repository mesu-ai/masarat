import React from 'react';
import SliderShow from '../molecules/SliderShow';
import Image from 'next/image';
import Card from '../atoms/Card';
import Heading from '../molecules/Heading';
import Notation from '../atoms/Notation';


const responsive = [
 
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
    },
  },
 
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
    },
  },
];

const OurTeamMember = ({teamMeambers=[]}) => {
  return (
    <div id='team' className='container mx-auto px-6 sm:px-0 xl:px-10  pt-20 xl:pt-36'>
      
      <Heading keyword='Meet the team' title='Profession Expert team'/>
      <div className=' mx-auto mt-12'>
        <SliderShow
          slidePerPage={6}
          showDot={false}
          responsiveSlide= {responsive}
          // showArrow={true}
        >
          {teamMeambers &&
            teamMeambers.map((item, index) => (
              <div key={index} className='p-5'>
                <Card
                  key={index}
                  className='group relative rounded-2xl'
                >
                  <Image
                    className=' scale-100 group-hover:scale-125'
                    src={item?.photo}
                    alt='icon'
                    width={170}
                    height={227}
                  />

                  <div className='text-center z-40 hidden group-hover:block absolute bottom-0 lg:-bottom-5 right-5 bg-white rounded-lg px-2 py-2 xl:py-3.5 xl:px-5'>
                    <Notation/>
                    <p className='text-sm font-bold text-blackPearl'>
                      {item?.name}
                    </p>
                    <p className='text-sm font-medium text-slateBlue'>
                      {item?.designation}
                    </p>
                  </div>
                </Card>
              </div>

            
            ))}
        </SliderShow>
      </div>
    </div>
  );
};

export default OurTeamMember;
