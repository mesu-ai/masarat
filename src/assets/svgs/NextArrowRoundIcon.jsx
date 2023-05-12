const NextArrowRoundIcon = ({ width = 48, height = 48, className = '' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='24'
        cy='24'
        r='23'
        stroke='#0F172A'
        strokeWidth='2'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M20.2929 17.2929C19.9024 17.6834 19.9024 18.3166 20.2929 18.7071L25.5858 24L20.2929 29.2929C19.9024 29.6834 19.9024 30.3166 20.2929 30.7071C20.6834 31.0976 21.3166 31.0976 21.7071 30.7071L27.7071 24.7071C28.0976 24.3166 28.0976 23.6834 27.7071 23.2929L21.7071 17.2929C21.3166 16.9024 20.6834 16.9024 20.2929 17.2929Z'
        fill='#0F172A'
      />
    </svg>
  );
};

export default NextArrowRoundIcon;
