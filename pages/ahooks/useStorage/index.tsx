import React from 'react';
import { Typography, Space } from '@douyinfe/semi-ui';

const { Title, Text } = Typography;

const useCookieCode = `

 ~~~ts
 const [cookieMessage, setCookieMessage] = useCookieState('message', {
    defaultValue: 'hello world'
 });
 
 <Input
    placeholder={'please enter your word'}
    value={cookieMessage}
    onChange={(e) => {
      setCookieMessage(e);
    }}
    className={'w-1/3'}
 />
 ~~~
`;

const UseStorage = () => {
  const [cookieMessage, setCookieMessage] = useCookieState('message', {
    defaultValue: 'hello world',
  });
  const [localStorageState, setLocalStorageState] = useLocalStorageState('message', {
    defaultValue: 'localStorageDefaultValue',
  });
  return (
    <div className={'p-10 w-full h-full overflow-auto'}>
      <Space spacing={20} className={'w-full'} vertical align={'start'}>
        <Title heading={2}>基础·useStorage</Title>
        <Text>
          主要包括：
          <Text code>useLocalStorageState</Text>、<Text code>useSessionStorageState</Text>、
          <Text code>useCookieState</Text>
        </Text>
      </Space>
    </div>
  );
};

export default UseStorage;
