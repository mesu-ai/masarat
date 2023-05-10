/* eslint-disable react/jsx-props-no-spreading */
import NextArrowRoundIcon from '@/assets/svgs/NextArrowRoundIcon';
import PreviousArrowRoundIcon from '@/assets/svgs/PreviousArrowRoundIcon';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

// import NextIcon from '../../assets/svgs/NextIcon';
// import PrevIcon from '../../assets/svgs/PrevIcon';

const NextButton = (props) => {
  const { onClick } = props;

  return (
    <button
      onClick={onClick}
      type='button'
      style={{ boxShadow: '0px 15px 30px rgba(159, 168, 174, 0.2)' }}
      // className="flex justify-center items-center px-5 py-5  bg-white absolute  md:top-1/2   md:-translate-y-1/2 right-10 md:-right-20 -bottom-16 md:bottom-auto rounded"
      className='flex justify-center items-center bg-white absolute rounded-full bottom-10 md:bottom-5 translate-y-1/2 left-20  rtl:left-auto rtl:right-0 z-50'
    >
      <NextArrowRoundIcon />
    </button>
  );
};

const PrevButton = (props) => {
  const { onClick } = props;

  return (
    <button
      onClick={onClick}
      type='button'
      style={{ boxShadow: '0px 15px 30px rgba(159, 168, 174, 0.2)' }}
      // className="flex justify-center items-center px-5 py-5  bg-white absolute -bottom-16 md:bottom-auto md:top-1/2  md:-translate-y-1/2 left-10  md:-left-20 rounded"
      className='flex justify-center items-center bg-white absolute rounded-full bottom-10 md:bottom-5 translate-y-1/2 left-0 rtl:left-auto rtl:right-20 z-50'
    >
      <PreviousArrowRoundIcon />
    </button>
  );
};

// const res = [
//   {
//     breakpoint: 1297,
//     settings: {
//       slidesToShow: 5,
//       slidesToScroll: 1,
//     },
//   },
//   {
//     breakpoint: 1024,
//     settings: {
//       slidesToShow: 4,
//       slidesToScroll: 1,
//     },
//   },
//   {
//     breakpoint: 768,
//     settings: {
//       slidesToShow: 3,
//       slidesToScroll: 1,
//     },
//   },
//   {
//     breakpoint: 460,
//     settings: {
//       slidesToShow: 1,
//       slidesToScroll: 1,
//     },
//   },
// ];

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  rtl: true,
  nextArrow: <NextButton />,
  prevArrow: <PrevButton />,
  appendDots: (dots) => <ul>{dots}</ul>,
  customPaging: (i) => (
    <div className='ft-slick__dots--custom'>
      <div className='loading' />
    </div>
  ),
};

const SliderShow = ({
  children,
  slidePerPage = 1,
  showDot = true,
  showArrow = false,
  responsiveSlide = [],
}) => {
  const { i18n } = useTranslation();
  settings.rtl = i18n.language !== 'en';
  settings.slidesToShow = slidePerPage;
  settings.dots = showDot;
  settings.arrows = showArrow;
  settings.responsive = responsiveSlide;

  return (
    <Slider
      {...settings}
      style={{}}
    >
      {children || <div />}
    </Slider>
  );
};

export default SliderShow;
