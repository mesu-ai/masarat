const TelegramIcon = ({ width = 18, height = 15, className = '' }) => {
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
        d='M17.3329 0.552015C17.3191 0.488279 17.2885 0.429369 17.2444 0.381296C17.2003 0.333224 17.1443 0.297712 17.082 0.278386C16.8552 0.233661 16.6206 0.250432 16.4025 0.326959C16.4025 0.326959 1.27089 5.76553 0.406832 6.36783C0.220095 6.49736 0.158029 6.57238 0.127266 6.66143C-0.0222308 7.08995 0.442991 7.27885 0.442991 7.27885L4.34287 8.54984C4.40875 8.56123 4.47637 8.55717 4.5404 8.53797C5.42767 7.97776 13.4665 2.90133 13.9312 2.73079C14.0041 2.70866 14.058 2.73079 14.0462 2.78476C13.8562 3.43564 6.91401 9.60496 6.87569 9.64274C6.85706 9.65802 6.84242 9.67759 6.83302 9.69978C6.82362 9.72196 6.81974 9.7461 6.82172 9.77011L6.45904 13.5755C6.45904 13.5755 6.30684 14.7629 7.49203 13.5755C8.33234 12.7341 9.13866 12.0379 9.54289 11.6995C10.884 12.6251 12.3272 13.6489 12.9495 14.1822C13.0539 14.2836 13.1777 14.3629 13.3134 14.4154C13.4492 14.4679 13.5941 14.4924 13.7396 14.4876C14.3333 14.465 14.4952 13.8157 14.4952 13.8157C14.4952 13.8157 17.252 2.72215 17.3448 1.23528C17.3534 1.08956 17.3659 0.996189 17.3669 0.896344C17.3719 0.78054 17.3604 0.664621 17.3329 0.552015Z'
        fill='#657791'
      />
    </svg>
  );
};

export default TelegramIcon;
