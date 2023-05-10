const PreviousArrowRoundIcon = ({
  width = 48,
  height = 48,
  className = '',
}) => {
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
        stroke-width='2'
      />
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M27.7071 17.2929C28.0976 17.6834 28.0976 18.3166 27.7071 18.7071L22.4142 24L27.7071 29.2929C28.0976 29.6834 28.0976 30.3166 27.7071 30.7071C27.3166 31.0976 26.6834 31.0976 26.2929 30.7071L20.2929 24.7071C19.9024 24.3166 19.9024 23.6834 20.2929 23.2929L26.2929 17.2929C26.6834 16.9024 27.3166 16.9024 27.7071 17.2929Z'
        fill='#0F172A'
      />
    </svg>
  );
};

export default PreviousArrowRoundIcon;
