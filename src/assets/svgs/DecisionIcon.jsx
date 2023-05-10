const DecisionIcon = ({ width = 64, height = 65, className = '' }) => {
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
        cy='32.4036'
        r='32'
        fill='#1A3D37'
      />
      <g clip-path='url(#clip0_140_683)'>
        <path
          d='M48.7834 29.5797C48.1942 29.0665 47.3039 29.0648 46.7127 29.5756L41.6548 33.9458C41.5743 33.8073 41.4756 33.6781 41.3593 33.5618C40.677 32.8795 39.6006 32.8275 38.8558 33.441L34.4762 37.0476C33.4003 37.9337 32.7833 39.2413 32.7833 40.635V43.7537C32.5009 43.999 32.3213 44.3597 32.3213 44.7623V49.8763C32.3213 50.1672 32.5571 50.4029 32.8479 50.4029C33.1388 50.4029 33.3746 50.1672 33.3746 49.8763V44.7623C33.3746 44.6058 33.5019 44.4784 33.6585 44.4784H40.0894C40.246 44.4784 40.3733 44.6058 40.3733 44.7623V49.8763C40.3733 50.1672 40.6091 50.4029 40.9 50.4029C41.1908 50.4029 41.4266 50.1672 41.4266 49.8763V44.7623C41.4266 44.2511 41.138 43.8064 40.7154 43.5815V41.2268L41.9156 40.78C42.9257 40.4039 43.7716 39.7284 44.3619 38.8265L49.0677 31.6365C49.4978 30.9795 49.3754 30.0954 48.7834 29.5797ZM48.1865 31.0597L43.4807 38.2496C43.0144 38.9621 42.3462 39.4957 41.5482 39.7928L39.4542 40.5725C39.1817 40.674 39.043 40.9773 39.1444 41.2499C39.2234 41.4619 39.4244 41.5929 39.6381 41.5929C39.6462 41.5929 39.6542 41.5922 39.6624 41.5918V43.4251H33.8366V40.6351C33.8366 39.5572 34.3138 38.546 35.1459 37.8608L39.5254 34.2541C39.8494 33.9873 40.3178 34.0098 40.6146 34.3067C40.9309 34.623 40.9309 35.1376 40.6146 35.4539L38.8868 37.1817C38.6811 37.3874 38.6811 37.7208 38.8868 37.9264C39.0925 38.1321 39.4259 38.1321 39.6315 37.9264L41.3593 36.1986C41.6503 35.9076 41.8329 35.5374 41.8877 35.1366L47.4013 30.3726C47.5985 30.2024 47.8952 30.2029 48.0917 30.374C48.2891 30.5459 48.3298 30.8407 48.1865 31.0597Z'
          fill='#1A3D37'
        />
        <path
          d='M30.8619 43.7537V40.6351C30.8619 39.2599 30.2576 37.9633 29.2037 37.0778C28.981 36.8906 28.6488 36.9195 28.4617 37.1422C28.2745 37.3648 28.3034 37.697 28.526 37.8842C29.3411 38.569 29.8086 39.5717 29.8086 40.6351V43.4251H23.9829V41.5918C23.991 41.5921 23.9991 41.5928 24.0072 41.5928C24.2209 41.5928 24.4218 41.4618 24.5008 41.2498C24.6023 40.9772 24.4636 40.674 24.191 40.5725L22.097 39.7928C21.2991 39.4957 20.6308 38.962 20.1645 38.2496L15.4588 31.0598C15.3154 30.8408 15.3562 30.546 15.5536 30.3741C15.75 30.2029 16.0468 30.2023 16.244 30.3727L21.7586 35.1374C21.8122 35.5259 21.9878 35.9006 22.2859 36.1986L24.0137 37.9264C24.1165 38.0292 24.2513 38.0806 24.3861 38.0806C24.5208 38.0806 24.6557 38.0292 24.7585 37.9264C24.9641 37.7207 24.9641 37.3872 24.7585 37.1816L23.0307 35.4538C22.7144 35.1376 22.7144 34.6229 23.0307 34.3067C23.3276 34.0098 23.7958 33.9872 24.1199 34.2541L26.76 36.4283C26.9845 36.6132 27.3165 36.581 27.5013 36.3565C27.6862 36.132 27.6541 35.8001 27.4296 35.6152L24.7894 33.441C24.0444 32.8275 22.9681 32.8795 22.2858 33.5619C22.1684 33.6793 22.0703 33.8087 21.9908 33.9461L16.9325 29.5757C16.3412 29.0647 15.4509 29.0665 14.8618 29.5798C14.2698 30.0954 14.1475 30.9796 14.5775 31.6366L19.2832 38.8265C19.8735 39.7284 20.7194 40.4039 21.7295 40.78L22.9297 41.2269V43.5815C22.5071 43.8065 22.2185 44.2511 22.2185 44.7623V49.8763C22.2185 50.1672 22.4543 50.403 22.7451 50.403C23.036 50.403 23.2718 50.1672 23.2718 49.8763V44.7623C23.2718 44.6058 23.3991 44.4784 23.5557 44.4784H29.9867C30.1432 44.4784 30.2706 44.6058 30.2706 44.7623V49.8763C30.2706 50.1672 30.5064 50.403 30.7972 50.403C31.088 50.403 31.3238 50.1672 31.3238 49.8763V44.7623C31.3238 44.3598 31.1443 43.9992 30.8619 43.7537Z'
          fill='#1A3D37'
        />
        <path
          d='M22.9445 31.0864C27.5442 31.0864 31.2864 27.3443 31.2864 22.7445C31.2864 18.1448 27.5441 14.4026 22.9445 14.4026C18.3448 14.4026 14.6025 18.1448 14.6025 22.7445C14.6025 27.3443 18.3447 31.0864 22.9445 31.0864ZM22.9445 15.4559C26.9634 15.4559 30.2331 18.7256 30.2331 22.7445C30.2331 26.7635 26.9634 30.0332 22.9445 30.0332C18.9255 30.0332 15.6558 26.7635 15.6558 22.7445C15.6558 18.7256 18.9255 15.4559 22.9445 15.4559Z'
          fill='#1A3D37'
        />
        <path
          d='M21.0833 26.0527C21.3781 26.332 21.7639 26.4858 22.1699 26.4858C22.5986 26.4858 22.9998 26.317 23.2997 26.0105L24.4182 24.8666C24.6216 24.6587 24.6179 24.3253 24.4099 24.1219C24.202 23.9185 23.8686 23.9222 23.6652 24.1302L22.5466 25.274C22.4466 25.3763 22.3128 25.4325 22.1699 25.4325C22.0347 25.4325 21.906 25.3812 21.8078 25.2881L20.2279 23.7909L20.9525 23.0264L21.5658 23.6077C21.8913 23.9161 22.411 23.9062 22.7245 23.5858L25.8023 20.4387L26.5554 21.1751L25.2345 22.5257C25.0312 22.7336 25.0349 23.067 25.2429 23.2704C25.4508 23.4738 25.7842 23.47 25.9876 23.262L27.4674 21.749C27.6216 21.5912 27.7053 21.3829 27.7028 21.1622C27.7003 20.9416 27.6121 20.7352 27.4543 20.581L26.3762 19.5268C26.2184 19.3725 26.0104 19.2887 25.7895 19.2913C25.5689 19.2938 25.3624 19.382 25.2082 19.5398L22.128 22.6893L21.5121 22.1057C21.3519 21.9538 21.1423 21.8733 20.9217 21.8794C20.7012 21.8853 20.4961 21.9768 20.3444 22.1369L19.3071 23.2314C18.9939 23.5619 19.0079 24.0858 19.3385 24.3992L21.0833 26.0527Z'
          fill='#1A3D37'
        />
        <path
          d='M40.7003 31.0864C42.6577 31.0864 44.5607 30.3943 46.0587 29.1375C46.2815 28.9505 46.3106 28.6184 46.1236 28.3956C45.9367 28.1728 45.6045 28.1438 45.3817 28.3306C44.0731 29.4286 42.4106 30.0332 40.7004 30.0332C36.6814 30.0332 33.4117 26.7636 33.4117 22.7446C33.4117 18.7256 36.6813 15.4559 40.7003 15.4559C44.7193 15.4559 47.9889 18.7256 47.9889 22.7445C47.9889 24.1822 47.5706 25.5731 46.7791 26.7667C46.6183 27.0091 46.6845 27.3359 46.9269 27.4967C47.1692 27.6575 47.4961 27.5912 47.6569 27.3489C48.5632 25.9821 49.0422 24.39 49.0422 22.7446C49.0422 18.1448 45.3001 14.4026 40.7003 14.4026C36.1006 14.4026 32.3584 18.1448 32.3584 22.7445C32.3584 27.3443 36.1006 31.0864 40.7003 31.0864Z'
          fill='#1A3D37'
        />
        <path
          d='M44.9849 19.7695L43.777 18.5324C43.6233 18.3751 43.4177 18.287 43.1978 18.2844C42.9779 18.2816 42.7703 18.3649 42.613 18.5185L40.7013 20.3852L38.7887 18.5176C38.6314 18.364 38.424 18.2804 38.2039 18.2836C37.984 18.2862 37.7783 18.3743 37.6248 18.5316L36.4169 19.7685C36.2632 19.9258 36.1801 20.1336 36.1827 20.3535C36.1853 20.5733 36.2734 20.7789 36.4307 20.9326L38.2857 22.744L36.4306 24.5554C36.2733 24.7091 36.1853 24.9147 36.1827 25.1345C36.1801 25.3544 36.2632 25.5621 36.4168 25.7194L37.6247 26.9563C37.7783 27.1137 37.984 27.2018 38.2039 27.2044C38.2072 27.2044 38.2106 27.2044 38.214 27.2044C38.43 27.2044 38.6338 27.1215 38.7888 26.9702L40.7013 25.1026L42.613 26.9693C42.7703 27.123 42.9791 27.2046 43.1979 27.2034C43.4177 27.2008 43.6234 27.1127 43.777 26.9554L44.9849 25.7183C45.3019 25.3936 45.2957 24.8716 44.971 24.5543L43.1169 22.7438L44.9711 20.9332C45.2957 20.6162 45.3019 20.0941 44.9849 19.7695ZM41.9952 22.3671C41.8937 22.4663 41.8365 22.6021 41.8365 22.7439C41.8365 22.8858 41.8937 23.0216 41.9952 23.1207L44.0705 25.1472L43.1841 26.0549L41.0693 23.9897C40.8646 23.7899 40.538 23.79 40.3334 23.9897L38.2176 26.0558L37.3313 25.1481L39.4075 23.1207C39.509 23.0216 39.5662 22.8858 39.5662 22.7439C39.5662 22.6021 39.509 22.4662 39.4075 22.3671L37.3313 20.3397L38.2176 19.4321L40.3334 21.4981C40.5381 21.6979 40.8646 21.6979 41.0693 21.4981L43.1841 19.433L44.0705 20.3407L41.9952 22.3671Z'
          fill='#1A3D37'
        />
      </g>
      <defs>
        <clipPath id='clip0_140_683'>
          <rect
            width='64'
            height='65'
            fill='white'
            transform='translate(14.4639 13.9573)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DecisionIcon;
