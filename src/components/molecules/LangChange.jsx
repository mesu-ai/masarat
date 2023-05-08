import enFlag from '@/assets/images/enFlag.png';
import saFlag from '@/assets/images/saFlag.png';
import { useTranslation } from 'react-i18next';
import Button from '../atoms/Button';
import Image from 'next/image';
import SupportIcon from '@/assets/svgs/SupportIcon';

const LangChange = () => {
  const { i18n } = useTranslation();

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
      <select
        id='country'
        name='country'
        value={i18n?.language}
        className='max-h-14 py-3 px-7 text-slateBlue  block border border-slateBlue bg-transparent rounded-md focus:outline-none  sm:text-base'
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
    
  );
};
export default LangChange;
