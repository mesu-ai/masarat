/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// import NextIcon from '../../assets/svgs/NextIcon';
// import PrevIcon from '../../assets/svgs/PrevIcon';

// const NextButton = (props) => {
//   const { onClick } = props;

//   return (
//     <button
//       onClick={onClick}
//       type="button"
//       style={{ boxShadow: '0px 15px 30px rgba(159, 168, 174, 0.2)' }}
//       className="flex justify-center items-center px-5 py-5  bg-white absolute  md:top-1/2   md:-translate-y-1/2 right-10 md:-right-20 -bottom-16 md:bottom-auto rounded"
//     >
//       <NextIcon className="h-7 w-5" />
//     </button>
//   );
// };

// const PrevButton = (props) => {
//   const { onClick } = props;

//   return (
//     <button
//       onClick={onClick}
//       type="button"
//       style={{ boxShadow: '0px 15px 30px rgba(159, 168, 174, 0.2)' }}
//       className="flex justify-center items-center px-5 py-5  bg-white absolute -bottom-16 md:bottom-auto md:top-1/2  md:-translate-y-1/2 left-10  md:-left-20 rounded"
//     >
//       <PrevIcon className="h-7 w-5" />
//     </button>
//   );
// };

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  // nextArrow: <NextButton />,
  // prevArrow: <PrevButton />,
  appendDots: dots => <ul>{dots}</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    )
};

const SliderShow = ({ children }) => {
  return (
    <Slider {...settings} style={{}}>
      {children || <div />}
    </Slider>
  );
};

export default SliderShow;