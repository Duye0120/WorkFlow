import React, { useEffect, useState } from 'react';
import { Layout, Nav } from '@douyinfe/semi-ui';
import Image from 'next/image';
import logo from '../../public/logo.svg';
import { IconStar } from '@douyinfe/semi-icons/lib/es/icons';
import { LayoutProps } from './interface';
import Link from 'next/link';
import { useRouter } from 'next/router';

const { Sider, Content } = Layout;

const ArcoLayout = ({ children, NavArray }: LayoutProps) => {
  const [navSelected, setNavSelected] = useState<string>('');
  const { route } = useRouter();
  console.log('route', route.split('/')[2]);
  useEffect(() => {
    setNavSelected(route.split('/')[2] ?? '');
  }, [route]);
  return (
    <div className={'border-2 scroll-auto bg-white w-full h-full overflow-y-hidden'}>{children}</div>
  );
};

export default ArcoLayout;
