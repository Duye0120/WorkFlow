import React, { ReactNode, useState } from 'react';
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
  const router = useRouter();
  return (
    <Layout className={'w-full h-screen bg-gray-200 !p-5'}>
      <Sider className={'h-full !w-1/5 !p-6 rounded-xl bg-white'}>
        <Nav defaultOpenKeys={['State']} selectedKeys={[navSelected]} className={'!w-full !h-full border-0'}>
          <Link href={'/'}>
            <a
              onClick={() => {
                setNavSelected('');
              }}
            >
              <Nav.Header logo={<Image height={30} src={logo} alt={'头像'} />} />
            </a>
          </Link>
          {NavArray.map((item, index) => {
            const { navSub, navItem } = item;
            return (
              <Nav.Sub
                key={`${navSub}_${index}`}
                className={'text-base'}
                itemKey={navSub.itemKey}
                text={<div className={'text-base'}>{navSub.text}</div>}
                icon={<IconStar />}
              >
                {navItem.map((item, index) => {
                  return (
                    <Link key={`${item.itemKey}_${index}`} href={`/ahooks/${encodeURIComponent(item.itemKey)}`}>
                      <a>
                        <Nav.Item
                          onClick={({ itemKey }) => {
                            setNavSelected(itemKey as string);
                          }}
                          className={'text-base !h-10'}
                          itemKey={item.itemKey}
                          text={item.text}
                        />
                      </a>
                    </Link>
                  );
                })}
              </Nav.Sub>
            );
          })}
        </Nav>
      </Sider>
      <Content className={'pl-6'}>
        <div className={'border-2 bg-white w-full h-full'}>{children}</div>
      </Content>
    </Layout>
  );
};

export default ArcoLayout;
