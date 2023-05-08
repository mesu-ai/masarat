import React from 'react';

const SupportIcon = ({ width = 40, height = 40, className = '' }) => {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.9805 0.032959C31.026 0.032959 39.9805 8.98507 39.9805 20.0301C39.9805 31.0751 31.0261 40.0328 19.9805 40.0328C8.93484 40.0328 -0.0195312 31.0751 -0.0195312 20.0301C-0.0195312 8.98507 8.93484 0.032959 19.9805 0.032959Z'
        fill='#0F241E'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M15.6939 15.5298C15.7208 15.5763 15.7595 15.6149 15.8061 15.6417C15.8526 15.6685 15.9054 15.6826 15.9591 15.6826C16.0126 15.6825 16.0652 15.6683 16.1116 15.6414C16.1579 15.6145 16.1963 15.576 16.2231 15.5296C16.2498 15.4831 16.2638 15.4305 16.2638 15.377C16.2637 15.3234 16.2496 15.2708 16.2228 15.2244L14.6334 12.4698C14.5929 12.3996 14.5261 12.3484 14.4479 12.3273C14.3696 12.3063 14.2861 12.3173 14.2159 12.3578C14.1457 12.3983 14.0944 12.465 14.0734 12.5433C14.0524 12.6216 14.0634 12.705 14.1038 12.7752L15.6939 15.5298ZM23.8488 15.6411C23.8949 15.6682 23.9475 15.6825 24.001 15.6823C24.0547 15.6824 24.1074 15.6683 24.1539 15.6415C24.2003 15.6147 24.2389 15.5761 24.2656 15.5296L25.8562 12.775C25.8762 12.7403 25.8893 12.7019 25.8945 12.6621C25.8997 12.6224 25.8971 12.582 25.8867 12.5432C25.8763 12.5045 25.8584 12.4682 25.834 12.4364C25.8096 12.4046 25.7791 12.3779 25.7444 12.3578C25.7097 12.3377 25.6713 12.3247 25.6316 12.3195C25.5918 12.3143 25.5514 12.3169 25.5126 12.3273C25.4739 12.3377 25.4376 12.3556 25.4058 12.38C25.374 12.4044 25.3473 12.4349 25.3272 12.4696L23.7367 15.2242C23.7166 15.2589 23.7035 15.2973 23.6983 15.337C23.6931 15.3768 23.6957 15.4172 23.7062 15.4559C23.7166 15.4947 23.7345 15.5309 23.759 15.5627C23.7835 15.5945 23.814 15.6211 23.8488 15.6411ZM19.6749 14.2845V11.0161C19.6749 10.9351 19.707 10.8574 19.7643 10.8001C19.8216 10.7429 19.8993 10.7107 19.9803 10.7107C20.0612 10.7107 20.1389 10.7429 20.1962 10.8001C20.2535 10.8574 20.2856 10.9351 20.2856 11.0161V14.2851C20.2856 14.3661 20.2535 14.4438 20.1962 14.5011C20.1389 14.5584 20.0612 14.5905 19.9803 14.5905C19.8993 14.5905 19.8216 14.5584 19.7643 14.5011C19.707 14.4438 19.6749 14.3661 19.6749 14.2851V14.2845ZM26.8479 23.8493L28.0314 23.1039L25.4325 17.8703L24.9879 18.0853C24.9335 18.112 24.8723 18.1216 24.8124 18.113L19.6632 17.3884C19.5275 17.3665 19.3887 17.3728 19.2555 17.4068C19.1223 17.4408 18.9974 17.5018 18.8888 17.586L15.2013 20.3241C15.4393 20.9869 15.9038 21.2304 16.9067 21.2208C16.9964 21.1951 17.406 21.0111 19.1411 19.7621C19.2048 19.7163 19.2836 19.6968 19.3612 19.7074C19.4389 19.7181 19.5095 19.7582 19.5585 19.8194C20.028 20.4078 20.6345 20.8723 21.325 21.1723C22.0154 21.4722 22.7689 21.5985 23.5194 21.5401C23.5914 21.5339 23.6632 21.5539 23.7217 21.5962L26.8481 23.8493H26.8479ZM27.0281 25.6014C26.9182 25.7505 26.7537 25.8499 26.5707 25.878C26.3876 25.906 26.2009 25.8603 26.0515 25.7509L25.5778 25.403V25.4025L23.6238 23.9667C23.5585 23.9188 23.4769 23.8987 23.3968 23.911C23.3168 23.9232 23.2449 23.9668 23.1969 24.0321C23.149 24.0973 23.129 24.179 23.1412 24.259C23.1535 24.3391 23.197 24.411 23.2623 24.4589L25.216 25.8951V25.8958C25.3641 26.006 25.4625 26.1703 25.4898 26.3529C25.5171 26.5354 25.471 26.7214 25.3616 26.87C25.2522 27.0187 25.0885 27.118 24.906 27.1463C24.7236 27.1746 24.5375 27.1295 24.3882 27.0208L21.9606 25.2373C21.9283 25.2135 21.8916 25.1963 21.8527 25.1867C21.8137 25.1772 21.7733 25.1753 21.7336 25.1814C21.694 25.1874 21.6559 25.2012 21.6216 25.222C21.5873 25.2428 21.5574 25.2701 21.5336 25.3024C21.5099 25.3347 21.4927 25.3714 21.4831 25.4104C21.4735 25.4493 21.4717 25.4898 21.4778 25.5294C21.4838 25.5691 21.4976 25.6071 21.5184 25.6415C21.5391 25.6758 21.5665 25.7057 21.5988 25.7294L23.3752 27.0352C23.5244 27.145 23.624 27.3097 23.6519 27.4929C23.6798 27.6761 23.6337 27.8628 23.5239 28.0121C23.4141 28.1614 23.2495 28.2609 23.0663 28.2888C22.8831 28.3167 22.6963 28.2707 22.5471 28.1608L20.1198 26.3766C20.0874 26.3529 20.0507 26.3358 20.0118 26.3262C19.9728 26.3167 19.9323 26.3149 19.8927 26.321C19.853 26.3271 19.815 26.3409 19.7807 26.3617C19.7464 26.3825 19.7165 26.4099 19.6928 26.4423C19.669 26.4746 19.6519 26.5113 19.6424 26.5503C19.6328 26.5892 19.631 26.6297 19.6371 26.6694C19.6432 26.709 19.6571 26.7471 19.6779 26.7814C19.6987 26.8157 19.726 26.8456 19.7584 26.8693L21.4645 28.1229H21.4649C21.6138 28.2331 21.7131 28.3977 21.741 28.5809C21.7689 28.764 21.7233 28.9507 21.614 29.1003C21.3674 29.4362 20.9176 29.4016 20.6042 29.2283C17.2731 27.3855 15.1734 25.8278 11.995 23.4692L11.8135 23.3348L14.5323 17.8625C15.5302 17.6736 16.5531 17.6575 17.5565 17.8148L14.8172 19.8489C14.7181 19.9216 14.6451 20.0243 14.6087 20.1417C14.5723 20.2591 14.5746 20.3851 14.6153 20.5011C15.0313 21.702 16.071 21.8421 16.9313 21.8313C17.0807 21.8291 17.3039 21.8261 19.2681 20.4228C19.7904 21.008 20.438 21.4679 21.1627 21.7681C21.8874 22.0683 22.6705 22.2012 23.4537 22.1567L26.879 24.6255C27.0277 24.7356 27.1268 24.9001 27.1547 25.083C27.1826 25.266 27.1371 25.4525 27.0281 25.602V25.6014ZM10.6277 23.5739L7.74971 22.1449C7.66805 22.1039 7.60588 22.0323 7.57672 21.9457C7.54756 21.8591 7.55377 21.7645 7.594 21.6825L10.8028 15.2216C10.8229 15.1809 10.8508 15.1446 10.8849 15.1148C10.9191 15.0849 10.9587 15.0621 11.0017 15.0476C11.0446 15.0331 11.09 15.0272 11.1352 15.0302C11.1804 15.0333 11.2246 15.0452 11.2653 15.0653L14.1432 16.495C14.184 16.515 14.2203 16.5429 14.25 16.5772C14.2798 16.6114 14.3024 16.6513 14.3165 16.6944C14.331 16.7373 14.337 16.7826 14.3339 16.8277C14.3309 16.8729 14.319 16.917 14.2989 16.9575L11.0906 23.4184C11.0497 23.5003 10.978 23.5626 10.8912 23.5917C10.8044 23.6208 10.7097 23.6143 10.6277 23.5737V23.5739ZM25.6433 16.6948C25.6574 16.6517 25.68 16.6118 25.7097 16.5776C25.7395 16.5433 25.7758 16.5154 25.8166 16.4954L28.6946 15.0657C28.7353 15.0456 28.7795 15.0336 28.8247 15.0306C28.87 15.0276 28.9154 15.0335 28.9583 15.048C29.0013 15.0625 29.041 15.0853 29.0751 15.1152C29.1093 15.145 29.1372 15.1813 29.1573 15.2219L32.3658 21.6829C32.4063 21.7648 32.4127 21.8595 32.3836 21.9461C32.3545 22.0327 32.2924 22.1044 32.2106 22.1453L29.3328 23.5739C29.2509 23.6146 29.1561 23.6212 29.0693 23.5921C28.9825 23.5629 28.9108 23.5006 28.8699 23.4187L25.6612 16.9577C25.6411 16.9172 25.6292 16.8731 25.6262 16.828C25.6231 16.7829 25.629 16.7377 25.6435 16.6948H25.6433Z'
        fill='white'
      />
    </svg>
  );
};

export default SupportIcon;
