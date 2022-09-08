import React from 'react';
import Link from 'next/link';

interface NextLinkProps {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const NextLink = (props: NextLinkProps) => {
  const { href, onClick, children } = props;
  return (
    <Link href={href}>
      <a onClick={onClick}>
        {children}
      </a>
    </Link>
  );
};

export default NextLink;