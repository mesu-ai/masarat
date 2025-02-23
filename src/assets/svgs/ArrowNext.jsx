
const ArrowNext = ({ width = 32, height = 16, className = '', color="#1A3D37" }) => {
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
        d='M31.6334 7.11518L31.6322 7.114L25.1007 0.613996C24.6114 0.127058 23.82 0.128871 23.3329 0.618246C22.8459 1.10756 22.8478 1.899 23.3371 2.386L27.7224 6.75H1.25C0.559625 6.75 0 7.30962 0 8C0 8.69037 0.559625 9.25 1.25 9.25H27.7223L23.3372 13.614C22.8479 14.101 22.846 14.8924 23.333 15.3817C23.8201 15.8712 24.6116 15.8729 25.1008 15.386L31.6323 8.88599L31.6334 8.88481C32.123 8.39618 32.1214 7.60218 31.6334 7.11518Z'
        fill='#1A3D37'
      />
    </svg>
  );
};

export default ArrowNext;
