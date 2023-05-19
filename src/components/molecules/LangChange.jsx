import enFlag from '@/assets/images/enFlag.png';
import saFlag from '@/assets/images/saFlag.png';
import { useTranslation } from 'react-i18next';
import Button from '../atoms/Button';
import Image from 'next/image';
import SupportIcon from '@/assets/svgs/SupportIcon';

const LangChange = () => {
  const { i18n } = useTranslation();

  const bgstyle = {
    backgroundImage: `url(${i18n.language==='en' ? enFlag.src : saFlag.src})`,
    backgroundSize: '30px 30px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: `${i18n.language==='en' ? 'center left 5px' : 'center right 5px'}`,
  };

  const languages = [
    {
      code: 'en',
      name: 'English',
      title: 'Eng (UK)',
      dir: 'ltr',
      country_code: 'gb',
      flag: enFlag,
    },
    {
      code: 'ar',
      name: 'العربية',
      title: 'Ar (SAU)',
      dir: 'rtl',
      country_code: 'sa',
      flag: saFlag,
    },
  ];

  const changeLanguageOnSelect = (lang) => {
    localStorage.setItem('language', lang);
    i18n.changeLanguage(lang);
  };

  return (
    <form>
      <select
        style={bgstyle}
        id='country'
        name='country'
        value={i18n?.language}
        className='ltr:ps-10 ltr:pe-3 rtl:pe-10 rtl:ps-3 min-h-[3.1rem] text-slateBlue  block border-[1.2px] border-slateBlue bg-transparent rounded-md focus:outline-none text-base'
        onChange={(e) => changeLanguageOnSelect(e.target.value)}
      >
        {languages.map((language) => (
          <option
            disabled={i18n?.language === language.code}
            key={language.code}
            value={language.code}
            
          >
            
           {language?.title}
          </option>
        ))}

      </select>

    </form>
      
    
  );
};
export default LangChange;
