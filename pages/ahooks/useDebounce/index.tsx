import { Space, Typography } from '@douyinfe/semi-ui';
import React from 'react';

const { Title, Text } = Typography;

const useDebounce = () => {
  return (
    <div className={'p-10 w-full h-full overflow-auto'}>
      <Space vertical align={'start'} className={'w-full'}>
        <Title heading={2}>基础·useDebounce</Title>
      </Space>
    </div>
  );
};

export default useDebounce;
