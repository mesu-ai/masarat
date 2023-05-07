import CloseIcon from '@/assets/svgs/CloseIcon';
import logo from '@/assets/logo.svg';
import MenuIcon from '@/assets/svgs/MenuIcon';
import NavLink from '@/components/atoms/NavLink';
import headerRoutes from '@/routes/headerRoutes';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import bgimage from '@/assets/images/heroBg.svg';
// import CloseIcon from '../../assets/svgs/CloseIcon';
// import Logo from '../../assets/svgs/Logo';
// import LogoWhite from '../../assets/svgs/LogoWhite';
// import MenuIcon from '../../assets/svgs/MenuIcon';
// import NavLink from '../../components/atoms/NavLink';
// import headerRoutes from '../../routes/headerRoutes';

// const Header = ({ isTransparent }) => {
const Header = ({ isTransparent=false }) => {
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
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
  }, [open]);

  return (
    // <nav className={`container mx-auto px-6 xl:px-10 sm:px-0 py-6 ${isTransparent ? 'bg-transparent' : 'bg-white'}`}></nav>
    // <div className={`${isTransparent ? 'bg-transparent' : 'bg-info md:bg-white'}`}>
      <nav style={bgstyle} className="container mx-auto px-6 sm:px-0 xl:px-10  py-0 lg:py-3">
        <div className="relative">
          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-timberGreen"
            >
              {open ? (
                <CloseIcon className="h-6 w-6 text-timberGreen" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6 text-timberGreen" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <NavLink path="/">
              <Image src={logo} alt=''/>
              </NavLink>
            </div>

            <div className="hidden lg:flex justify-center">
              <ul className="flex flex-row justify-center items-center space-x-4">
                
                {headerRoutes &&
                  headerRoutes?.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        path={item?.path}
                        className='text-blackPearl/50 hover:text-blackPearl hover:font-medium'
                      >
                        {item?.name}
                      </NavLink>
                    </li>
                  ))}
              </ul>
            </div>


            <div className="hidden lg:block ">

            <NavLink path="/#contact">
                 <Button title='Eng (UK)' className='border border-slateBlue'/>
              </NavLink  >
              
              <NavLink path="/#contact">
                 <Button title='Contact Us'/>
              </NavLink  >
              
            </div>
          </div>
        </div>

        {/* style={bgstyle} */}
        {open && (
          <ul style={bgstyle}  className="block lg:hidden  absolute pt-4 h-screen w-full right-0  z-50 scroll ">
            <div className="px-10 pt-2 pb-3 space-y-3">
              {headerRoutes &&
                headerRoutes.map((item) => (
                  // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                  <li key={item.name} onClick={handleNavigate}>
                    <NavLink path={item.path} className="block text-start mx-5  text-blackPearl/50 hover:text-blackPearl hover:font-medium">
                      {item.name}
                    </NavLink>
                  </li>
                ))}
            </div>

            <div className="flex justify-start mt-6 mx-10">
                <NavLink path="/#contact">
                  <Button title='Eng (UK)' className='border border-slateBlue'/>
                </NavLink  >
                
                <NavLink path="/#contact">
                  <Button title='Contact Us'/>
                </NavLink  >
            </div>
          </ul>
        )}
      </nav>
    // </div>
  );
};

export default Header;