import CloseIcon from '@/assets/svgs/CloseIcon';
import logo from '@/assets/logo.svg';
import MenuIcon from '@/assets/svgs/MenuIcon';
import NavLink from '@/components/atoms/NavLink';
import headerRoutes from '@/routes/headerRoutes';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import bgimage from '@/assets/images/heroBg.png';
import { useTranslation } from 'react-i18next';
import LangChange from '@/components/molecules/LangChange';

const Header = ({ isTransparent = false }) => {
  const [open, setOpen] = useState(false);

  const bgstyle = {
    backgroundImage: `url(${bgimage.src})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
  };

  const handleNavigate = () => {
    setOpen(false);
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.body.lang = i18n.language;

    if (i18n.language === 'en') {
      document.body.dir = 'ltr';
    } else {
      document.body.dir = 'rtl';
    }
  }, [i18n, t]);

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden';
      
    } else {
      document.body.style.overflowY = '';
    }
  }, [open]);

  return (
   
    <nav className='container mx-auto px-6 sm:px-0 xl:px-10  py-0 lg:py-3'>
      <div className='relative'>
        <div className='absolute inset-y-0 right-0 rtl:right-auto rtl:left-0 flex items-center lg:hidden'>
          <button
            type='button'
            onClick={() => setOpen(!open)}
            className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-timberGreen'
          >
            {open ? (
              <CloseIcon
                className='h-6 w-6 text-timberGreen'
                aria-hidden='true'
              />
            ) : (
              <MenuIcon
                className='h-6 w-6 text-timberGreen'
                aria-hidden='true'
              />
            )}
          </button>
        </div>

        <div className='flex justify-between items-center'>
          <div>
            <NavLink path='/'>
              <Image
                src={logo}
                alt='logo'
              />
            </NavLink>
          </div>

          <div className='hidden lg:flex justify-center'>
            <ul className='flex flex-row justify-center items-center space-x-4'>
              {headerRoutes &&
                headerRoutes?.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      path={item?.path}
                      className='text-blackPearl/50 hover:text-blackPearl font-[300] hover:font-medium'
                    >
                      {item?.name}
                    </NavLink>
                  </li>
                ))}
            </ul>
          </div>

          <div className='hidden lg:flex items-center'>

            <LangChange />

            <NavLink path='/contactUs'>
              <Button title='Contact Us' />
            </NavLink>
          </div>
        </div>
      </div>

      {/* style={bgstyle} */}
      {open && (
        <ul
          // style={bgstyle}
          className='block bg-white lg:hidden  absolute pt-4 h-screen w-full right-0  z-50 scroll '
        >
          <div className='px-10 pt-2 pb-3 space-y-3'>
            {headerRoutes &&
              headerRoutes.map((item) => (
                // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                <li
                  key={item.name}
                  onClick={handleNavigate}
                >
                  <NavLink
                    path={item.path}
                    className='block text-start mx-5  text-blackPearl/50 hover:text-blackPearl hover:font-medium'
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
          </div>

          <div className='flex items-center justify-start mt-6 mx-10'>

            <LangChange />

            <NavLink path='/contactUs'>
              <Button title='Contact Us' />
            </NavLink>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Header;
