import Link from 'next/link';

const NavLink = ({ path = '#', className = '', children = {} }) => {
  return (
    <Link href={path} className={`${className}`}>
    {children}
    </Link>
  );
};

export default NavLink;