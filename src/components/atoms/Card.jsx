import React from 'react';

const Card = ({ children, className = '' }) => {
  return <div className={`rounded-xl ${className}`}>{children}</div>;
};

export default Card;
