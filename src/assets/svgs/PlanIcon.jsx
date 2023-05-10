const PlanIcon = ({ width = 64, height = 64, className = '' }) => {
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
      <g clipPath='url(#clip0_140_650)'>
        <path
          d='M23.892 29.5225L27.1792 25.5678C27.3654 25.3438 27.3347 25.0114 27.1107 24.8252C26.8868 24.6391 26.5543 24.6697 26.3681 24.8937L23.5504 28.2835L22.9345 27.2831C22.7819 27.0351 22.4571 26.9577 22.209 27.1105C21.961 27.2632 21.8837 27.588 22.0363 27.836L23.0373 29.4618C23.2266 29.7691 23.6615 29.7998 23.892 29.5225Z'
          fill='#1A3D37'
        />
        <path
          d='M22.0364 34.797L23.0374 36.4228C23.2265 36.7301 23.6615 36.7608 23.8919 36.4834L27.1791 32.5288C27.3653 32.3048 27.3346 31.9723 27.1106 31.7861C26.8868 31.6 26.5542 31.6306 26.368 31.8546L23.5503 35.2445L22.9344 34.244C22.7818 33.9961 22.457 33.9186 22.2089 34.0714C21.9609 34.2242 21.8837 34.5491 22.0364 34.797Z'
          fill='#1A3D37'
        />
        <path
          d='M22.0364 41.8048L23.0374 43.4306C23.2265 43.7379 23.6615 43.7686 23.8919 43.4912L27.1791 39.5366C27.3653 39.3126 27.3346 38.9801 27.1106 38.7939C26.8868 38.6078 26.5542 38.6384 26.368 38.8624L23.5503 42.2523L22.9344 41.2519C22.7818 41.0039 22.457 40.9265 22.2089 41.0792C21.9609 41.232 21.8837 41.5569 22.0364 41.8048Z'
          fill='#1A3D37'
        />
        <path
          d='M45.3584 43.8959C45.0672 43.8959 44.8311 44.132 44.8311 44.4233V48.262C44.8311 48.7078 44.4683 49.0706 44.0225 49.0706H19.624C19.1782 49.0706 18.8154 48.7078 18.8154 48.262V25.1509C18.8154 24.8596 18.5793 24.6236 18.2881 24.6236C17.9969 24.6236 17.7607 24.8596 17.7607 25.1509V48.262C17.7607 49.2894 18.5966 50.1253 19.624 50.1253H44.0225C45.0499 50.1253 45.8857 49.2894 45.8857 48.262V44.4233C45.8857 44.1321 45.6496 43.8959 45.3584 43.8959Z'
          fill='#1A3D37'
        />
        <path
          d='M44.0225 18.1887H41.4428V16.0096C41.4428 14.9706 40.5975 14.1253 39.5585 14.1253C38.5194 14.1253 37.6741 14.9706 37.6741 16.0096V18.1887H33.7076V16.0096C33.7076 14.9706 32.8623 14.1253 31.8232 14.1253C30.7842 14.1253 29.9389 14.9706 29.9389 16.0096V18.1887H25.9723V16.0096C25.9723 14.9706 25.127 14.1253 24.088 14.1253C23.0489 14.1253 22.2036 14.9706 22.2036 16.0096V18.1887H19.624C18.5966 18.1887 17.7607 19.0246 17.7607 20.052V22.69C17.7607 22.9813 17.9969 23.2173 18.2881 23.2173C18.5793 23.2173 18.8154 22.9813 18.8154 22.69V20.052C18.8154 19.6061 19.1782 19.2434 19.624 19.2434H22.2036V20.0807C22.2036 21.1198 23.0489 21.9651 24.088 21.9651C25.127 21.9651 25.9723 21.1198 25.9723 20.0807V19.2434H29.9389V20.0807C29.9389 21.1198 30.7842 21.9651 31.8232 21.9651C32.8623 21.9651 33.7076 21.1198 33.7076 20.0807V19.2434H37.6742V20.0807C37.6742 21.1198 38.5195 21.9651 39.5585 21.9651C40.5975 21.9651 41.4429 21.1198 41.4429 20.0807V19.2434H44.0225C44.4683 19.2434 44.8311 19.6061 44.8311 20.052V41.9623C44.8311 42.2536 45.0672 42.4897 45.3584 42.4897C45.6496 42.4897 45.8857 42.2536 45.8857 41.9623V20.052C45.8857 19.0246 45.0499 18.1887 44.0225 18.1887ZM24.9177 20.0807C24.9177 20.5383 24.5455 20.9104 24.088 20.9104C23.6306 20.9104 23.2583 20.5383 23.2583 20.0807C23.2583 18.9567 23.2583 16.3615 23.2583 16.0096C23.2583 15.5521 23.6305 15.18 24.088 15.18C24.5455 15.18 24.9177 15.5521 24.9177 16.0096V20.0807ZM32.6529 20.0807C32.6529 20.5383 32.2808 20.9104 31.8232 20.9104C31.3657 20.9104 30.9936 20.5383 30.9936 20.0807C30.9936 18.9567 30.9936 16.3615 30.9936 16.0096C30.9936 15.5521 31.3657 15.18 31.8232 15.18C32.2808 15.18 32.6529 15.5521 32.6529 16.0096V20.0807ZM40.3882 20.0807C40.3882 20.5383 40.0161 20.9104 39.5585 20.9104C39.101 20.9104 38.7288 20.5383 38.7288 20.0807C38.7288 18.9567 38.7288 16.3615 38.7288 16.0096C38.7288 15.5521 39.101 15.18 39.5585 15.18C40.016 15.18 40.3882 15.5521 40.3882 16.0096V20.0807Z'
          fill='#1A3D37'
        />
        <path
          d='M29.4131 29.9593H40.5225C41.4336 29.9593 42.1748 29.218 42.1748 28.3069C42.1748 27.3958 41.4336 26.6546 40.5225 26.6546H29.4131C28.502 26.6546 27.7607 27.3958 27.7607 28.3069C27.7607 29.218 28.502 29.9593 29.4131 29.9593ZM29.4131 27.7093H40.5225C40.852 27.7093 41.1201 27.9774 41.1201 28.3069C41.1201 28.6365 40.852 28.9046 40.5225 28.9046H29.4131C29.0835 28.9046 28.8154 28.6365 28.8154 28.3069C28.8154 27.9774 29.0835 27.7093 29.4131 27.7093Z'
          fill='#1A3D37'
        />
        <path
          d='M29.4131 36.9339H40.5225C41.4336 36.9339 42.1748 36.1926 42.1748 35.2815C42.1748 34.3704 41.4336 33.6292 40.5225 33.6292H29.4131C28.502 33.6292 27.7607 34.3704 27.7607 35.2815C27.7607 36.1926 28.502 36.9339 29.4131 36.9339ZM29.4131 34.6839H40.5225C40.852 34.6839 41.1201 34.952 41.1201 35.2815C41.1201 35.6111 40.852 35.8792 40.5225 35.8792H29.4131C29.0835 35.8792 28.8154 35.6111 28.8154 35.2815C28.8154 34.952 29.0835 34.6839 29.4131 34.6839Z'
          fill='#1A3D37'
        />
        <path
          d='M29.415 43.9104H40.5244C41.4355 43.9104 42.1768 43.1692 42.1768 42.2581C42.1768 41.347 41.4355 40.6057 40.5244 40.6057H29.415C28.5039 40.6057 27.7627 41.347 27.7627 42.2581C27.7627 43.1692 28.5039 43.9104 29.415 43.9104ZM29.415 41.6604H40.5244C40.854 41.6604 41.1221 41.9285 41.1221 42.2581C41.1221 42.5876 40.854 42.8557 40.5244 42.8557H29.415C29.0855 42.8557 28.8174 42.5876 28.8174 42.2581C28.8174 41.9285 29.0855 41.6604 29.415 41.6604Z'
          fill='#1A3D37'
        />
      </g>
      <defs>
        <clipPath id='clip0_140_650'>
          <rect
            width='36'
            height='36'
            fill='white'
            transform='translate(14.4639 13.68)'
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlanIcon;
