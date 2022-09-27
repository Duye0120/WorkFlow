import { Input, Space, Typography } from '@douyinfe/semi-ui';
import { useThrottle } from 'ahooks';
import React, { useState } from 'react';
import ReactMarkdown from '../../../components/ReactMarkdown';

const { Title, Text } = Typography;

const useThrottleMarkdown = `

~~~ts
const [value, setValue] = useState<string>();
const throttledValue = useThrottle(value, { wait: 500 });

<div className={'p-10 w-full h-full overflow-auto'}>
  <Space vertical align={'start'} className={'w-full'}>
    <Title heading={2}>基础·useThrottle</Title>
    <Text>用来处理节流值的Hook</Text>
    <Input placeholder={'enter your word'} onChange={(e) => setValue(e)} className={'w-1/3'} />
    <Text>value:{throttledValue}</Text>
    <ReactMarkdown value={useThrottleMarkdown} />
  </Space>
</div>
~~~
`;

const useThrottleComponent = () => {
  const [value, setValue] = useState<string>();
  const throttledValue = useThrottle(value, { wait: 500 });

  return (
    <div className={'p-10 w-full h-full overflow-auto'}>
      <Space vertical align={'start'} className={'w-full'}>
        <Title heading={2}>基础·useThrottle</Title>
        <Text>用来处理节流值的Hook</Text>
        <Input placeholder={'enter your word'} onChange={(e) => setValue(e)} className={'w-1/3'} />
        <Text>value:{throttledValue}</Text>
        <ReactMarkdown value={useThrottleMarkdown} />
      </Space>
    </div>
  );
};

export default useThrottleComponent;
