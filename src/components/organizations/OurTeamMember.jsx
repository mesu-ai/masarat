import React from 'react';
import SliderShow from '../molecules/SliderShow';
import Image from 'next/image';
import Card from '../atoms/Card';
import Heading from '../molecules/Heading';


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
    <div className='container mx-auto px-6 sm:px-0 xl:px-10  mb-20 xl:mb-36'>
      
      <Heading keyword='Meet the team' title='Profession Expert team'/>
      <div className=' mx-auto mt-12'>
        <SliderShow
          slidePerPage={7}
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

                  <div className='z-40 hidden group-hover:block absolute bottom-0 right-5 bg-white rounded-lg px-2 py-2 xl:py-3.5 xl:px-5'>
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
