import React from 'react';
import { Typography, Space, Divider } from '@douyinfe/semi-ui';

const { Title, Text } = Typography;

const UseStorage = () => {
  return (
    <div className={'p-10 w-full h-full overflow-auto'}>
      <Space className={'w-full'} vertical align={'start'}>
        <Title heading={2}>基础·useStorage</Title>
        <Text>
          主要包括：
          <Text code>useLocalStorageState</Text>、
          <Text code>useSessionStorageState</Text>、
          <Text code>useCookieState</Text>
        </Text>
        <Divider align={'left'}>
          useSessionStorageState/useLocalStorageState
        </Divider>
      </Space>
    </div>
  );
};

export default UseStorage;
