import type { NextPage } from 'next';
import { Divider, Space, Typography } from '@douyinfe/semi-ui';
import Image from 'next/image';

const { Title } = Typography

const Home: NextPage = () => {
  return (
    <Space vertical className={'w-full h-full'} align={'center'}>
      <div className={'mt-10'}>
        <Image src={'/logo.svg'} width={100} height={100} />
      </div>
      <Divider />
      <Title>对ahooks的相关介绍和使用</Title>
    </Space>
  )
}

export default Home
