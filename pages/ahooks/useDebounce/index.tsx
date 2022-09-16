import { Space, Typography, Input } from '@douyinfe/semi-ui';
import { useDebounce } from 'ahooks';
import React, { useState } from 'react';

const { Title, Text } = Typography;

const useDebounceComponent = () => {
  const [value, setValue] = useState<string>();
  const debouncedValue = useDebounce(value, { wait: 500 });

  return (
    <div className={'p-10 w-full h-full overflow-auto'}>
      <Space vertical align={'start'} className={'w-full'}>
        <Title heading={2}>基础·useDebounce</Title>
      </Space>
      <Input
        value={value}
        onChange={(e) => {
          setValue(e);
        }}
        placeholder={'enter your word'}
      />
      <p style={{ marginTop: 16 }}>DebouncedValue: {debouncedValue}</p>
      <Text type={'secondary'}>
        这里就不做详细赘述了，使用方法就是防抖和节流的使用方法，需要注意的就是后面的wait值是等待时间
      </Text>
    </div>
  );
};

export default useDebounceComponent;
