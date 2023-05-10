const PhoneIcon = ({ width = 36, height = 36, className = '' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect
        width='36'
        height='36'
        rx='18'
        fill='#1A3D37'
        fillOpacity='0.1'
      />
      <g clipPath='url(#clip0_140_953)'>
        <path
          d='M24.7162 20.5022C23.7366 20.5022 22.7747 20.349 21.8633 20.0478C21.4167 19.8954 20.8676 20.0352 20.595 20.3151L18.796 21.6732C16.7096 20.5595 15.4245 19.2748 14.326 17.204L15.6441 15.4519C15.9865 15.1099 16.1094 14.6103 15.9622 14.1415C15.6597 13.2253 15.506 12.2639 15.506 11.2839C15.5061 10.576 14.9301 10 14.2222 10H11.2839C10.576 10 10 10.576 10 11.2839C10 19.3985 16.6016 26 24.7162 26C25.4241 26 26 25.424 26 24.7161V21.786C26 21.0781 25.424 20.5022 24.7162 20.5022Z'
          fill='#1A3D37'
        />
      </g>
      <defs>
        <clipPath id='clip0_140_953'>
          <rect
            width='16'
            height='16'
            fill='white'
            transform='translate(10 10)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PhoneIcon;
