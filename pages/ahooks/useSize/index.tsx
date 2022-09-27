import React, { useRef } from 'react';
import { useSize } from 'ahooks';
import { Space, Typography } from '@douyinfe/semi-ui';

const { Title, Text } = Typography;

const useSizeComponent = () => {
  const ref = useRef(null);
  const size = useSize(ref);
  return (
    <div ref={ref} className={'p-10 w-full h-full overflow-auto'}>
      <Space vertical align={'start'} className={'w-full'}>
        <Title heading={2}>基础·useSize</Title>
        <Text>width:{size?.width}px</Text>
        <Text>height:{size?.height}px</Text>
        <Text type={'secondary'}>
          这个可以很好的展示组件的长宽，但是不需要使用
          <Text code>document.getElementById</Text>
        </Text>
      </Space>
    </div>
  );
};

export default useSizeComponent;
