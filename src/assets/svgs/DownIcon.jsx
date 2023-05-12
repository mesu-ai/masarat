const DownIcon = ({ width = 14, height = 9, className = '' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.8327 1.58215L6.99935 7.41549L1.16602 1.58215'
        stroke='#0F172A'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default DownIcon;
