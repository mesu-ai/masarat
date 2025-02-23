import React from 'react';
import Card from '../atoms/Card';
import Heading5XL from '../atoms/Heading5XL';
import ParagraphText from '../atoms/ParagraphText';



const ProjectSummery = ({aboutSummery={}}) => {
  
  return (
    <div className=' container mx-auto px-6 sm:px-0 xl:px-10  '>
      <div className='bg-thinGreen grid sm:grid-cols-3 gap-7 text-center rounded-[36px] py-[45px] md:py-[70px]'>
        
          <div  className='sm:space-y-4'>
            <Heading5XL>{aboutSummery?.projectCompleted}</Heading5XL>
            <ParagraphText>Complete Projects</ParagraphText>
          </div>
          <div  className='sm:space-y-4'>
            <Heading5XL>{aboutSummery?.cooperationCompany}</Heading5XL>
            <ParagraphText>Cooperation company</ParagraphText>
          </div>
          <div className='sm:space-y-4'>
            <Heading5XL>{aboutSummery?.happyClients}</Heading5XL>
            <ParagraphText>Happy Clients</ParagraphText>
          </div>
        
      </div>
    </div>
  );
};

export default ProjectSummery;
