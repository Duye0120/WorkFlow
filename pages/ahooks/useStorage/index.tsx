import React from 'react';
import { Typography, Space, Divider, Input } from '@douyinfe/semi-ui';
import { useCookieState } from 'ahooks';
import ReactMarkdown from '../../../components/ReactMarkdown';


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
    defaultValue: 'hello world'
  });
  return (
    <div className={'p-10 w-full h-full overflow-auto'}>
      <Space spacing={20} className={'w-full'} vertical align={'start'}>
        <Title heading={2}>基础·useStorage</Title>
        <Text>
          主要包括：
          <Text code>useLocalStorageState</Text>、
          <Text code>useSessionStorageState</Text>、
          <Text code>useCookieState</Text>
        </Text>
        <Divider align={'left'}>
          useCookieState
        </Divider>
        <Space vertical align={'start'}>
          <Text type={'secondary'}>
            一个可以将状态存储到cookie中的hook
          </Text>
          <div>
            <Text code>useCookieState(key:string,option:Cookies.CookieAttributes)</Text>接收两个参数，第一个参数为cookie的key，第二个参数为cookie的初始值
          </div>
          <Text>这里需要注意的是，每次cookie取的值都是最新的值，如果点开控制台发先值不同，可以先刷新一下cookie</Text>
          <Text>如果想要清空cookie的值，只需要使用<Text code>setCookieMessage()/setCookieMessage(undefined)</Text></Text>
        </Space>
        <Input
          placeholder={'please enter your word'}
          value={cookieMessage}
          onChange={(e) => {
            setCookieMessage(e);
          }}
          className={'w-1/3'}
        />
        <ReactMarkdown value={useCookieCode} />
        <Divider align={'left'}>
          useLocalStorageState
        </Divider>
      </Space>
    </div>
  );
};

export default UseStorage;
