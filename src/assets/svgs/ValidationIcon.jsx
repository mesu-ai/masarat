const ValidationIcon = ({ width = 64, height = 64, className = '' }) => {
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
        opacity='0.1'
        cx='32'
        cy='32.1263'
        r='32'
        fill='#1A3D37'
      />
      <g clipPath='url(#clip0_140_669)'>
        <path
          d='M30.3232 50.1263C21.2257 50.1263 13.8232 42.7238 13.8232 33.6263C13.8232 24.5288 21.2257 17.1263 30.3232 17.1263C33.4867 17.1263 36.5647 18.0278 39.2242 19.7348C39.5722 19.9583 39.6742 20.4218 39.4507 20.7713C39.2257 21.1193 38.7622 21.2213 38.4142 20.9978C35.9962 19.4453 33.1987 18.6263 30.3232 18.6263C22.0522 18.6263 15.3232 25.3553 15.3232 33.6263C15.3232 41.8973 22.0522 48.6263 30.3232 48.6263C38.5942 48.6263 45.3232 41.8973 45.3232 33.6263C45.3232 33.1313 45.2992 32.6438 45.2527 32.1623C45.2122 31.7498 45.5137 31.3823 45.9262 31.3433C46.3462 31.3088 46.7062 31.6043 46.7452 32.0168C46.7962 32.5463 46.8232 33.0833 46.8232 33.6263C46.8232 42.7238 39.4207 50.1263 30.3232 50.1263Z'
          fill='#1A3D37'
        />
        <path
          d='M32.5736 37.0016C32.3816 37.0016 32.1896 36.9281 32.0426 36.7826L25.2926 30.0326C25.0001 29.7401 25.0001 29.2646 25.2926 28.9721C25.5851 28.6796 26.0606 28.6796 26.3531 28.9721L32.5721 35.1911L48.5426 19.2206C48.8351 18.9281 49.3106 18.9281 49.6031 19.2206C49.8956 19.5131 49.8956 19.9886 49.6031 20.2811L33.1031 36.7811C32.9576 36.9281 32.7656 37.0016 32.5736 37.0016Z'
          fill='#1A3D37'
        />
      </g>
      <defs>
        <clipPath id='clip0_140_669'>
          <rect
            width='36'
            height='36'
            fill='white'
            transform='translate(14.4639 13.6809)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ValidationIcon;
