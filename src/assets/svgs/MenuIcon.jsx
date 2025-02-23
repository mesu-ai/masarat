const MenuIcon = ({ height = 24, width = 24, className = '' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M4 6h16M4 12h16M4 18h16'
      />
    </svg>
  );
};

export default MenuIcon;
