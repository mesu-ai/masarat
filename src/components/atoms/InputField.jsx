import React from 'react';
import { useTranslation } from 'react-i18next';

const InputField = ({
  name = '',
  placeholder = '',
  type = 'text',
  className = '',
  required=true,
  handleBlur,

}) => {

  const { t } = useTranslation();

  return (
    <input
      className={`w-full text-sm text-slateBlue p-3 placeholder:text-slateBlue outline-0 border border-lightwhite ${className}`}
      type={type}
      name={name}
      id={name}
      onBlur={handleBlur}
      placeholder={t(`${placeholder}`)}
      required={required}
    />
  );
};

export default InputField;
