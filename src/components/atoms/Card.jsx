import React from 'react';

const Card = ({ children, className = '', borderRadius='rounded-xl' }) => {
  return <div className={`${borderRadius} ${className}`}>{children}</div>;
};

export default Card;
