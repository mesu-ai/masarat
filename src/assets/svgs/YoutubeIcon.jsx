// 21,15
const YoutubeIcon = ({ width = 20, height = 16, className = '' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d="M19.8711 3.18088C19.8711 3.18088 19.6875 1.83516 19.0759 1.22347C18.3418 0.42827 17.4855 0.42827 17.1185 0.367101C14.3658 0.183594 10.2675 0.183594 10.2675 0.183594C10.2675 0.183594 6.16919 0.183594 3.41658 0.367101C3.04957 0.42827 2.1932 0.42827 1.45917 1.22347C0.847483 1.83516 0.663976 3.18088 0.663976 3.18088C0.663976 3.18088 0.480469 4.77127 0.480469 6.36167V7.82973C0.480469 9.42012 0.663976 11.0105 0.663976 11.0105C0.663976 11.0105 0.847483 12.3562 1.45917 12.9679C2.1932 13.7631 3.17191 13.702 3.60009 13.8243C5.19049 13.9466 10.2675 14.0078 10.2675 14.0078C10.2675 14.0078 14.3658 14.0078 17.1185 13.8243C17.4855 13.7631 18.3418 13.7631 19.0759 12.9679C19.6875 12.3562 19.8711 11.0105 19.8711 11.0105C19.8711 11.0105 20.0546 9.42012 20.0546 7.82973V6.36167C20.0546 4.77127 19.8711 3.18088 19.8711 3.18088ZM8.24894 9.6648V4.15958L13.5095 6.91219L8.24894 9.6648Z" fill="#657791"/>
</svg>
  );
};

export default YoutubeIcon;
