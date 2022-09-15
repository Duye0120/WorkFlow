import React from 'react';
import { Typography, Space, Divider, Input } from '@douyinfe/semi-ui';
import { useCookieState, useLocalStorageState } from 'ahooks';
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
        <Divider align={'left'}>useCookieState</Divider>
        <Space vertical align={'start'}>
          <Text type={'secondary'}>一个可以将状态存储到cookie中的hook</Text>
          <div>
            <Text code>useCookieState(key:string,option:Cookies.CookieAttributes)</Text>
            接收两个参数，第一个参数为cookie的key，第二个参数为cookie的初始值
          </div>
          <Text>这里需要注意的是，每次cookie取的值都是最新的值，如果点开控制台发先值不同，可以先刷新一下cookie</Text>
          <Text>
            如果想要清空cookie的值，只需要使用<Text code>setCookieMessage()/setCookieMessage(undefined)</Text>
          </Text>
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
        <Divider align={'left'}>useLocalStorageState</Divider>
        <Space vertical align={'start'}>
          <Text type={'secondary'}>
            将状态存储在<Text code>localStorage</Text>中的hook
          </Text>
          <Text>
            注意，当你写完<Text code>defaultValue</Text>,发现页面上Input里面并没有值的时候，请记得刷新页面
          </Text>
          <Text>
            这里就不放代码了，写法其实都差不多，区别就是，option里面是<Text code>localStorage</Text>
            的option,自己记得区分
          </Text>
        </Space>
        <Input
          value={localStorageState}
          placeholder={'please enter your word'}
          onChange={(e) => {
            setLocalStorageState(e);
          }}
          className={'w-1/3'}
        />
        <Divider align={'left'}>🌟useSessionStorageState🌟</Divider>
        <Space vertical align="start">
          <Text>这里要着重介绍一下sessionStorage这个方法</Text>
          <Text>
            首先,
            <Text code>useSessionStorageState</Text>的使用方法和<Text code>useLocalStorageState</Text>一样
          </Text>
          <Text>
            公司有个项目是，点击Card存储session，跳转页面以后，从session里面取数据，并且根据session中的值进行检索，那这个时候，就可以使用
            <Text code>useSessionStorageState</Text>这个方法，来存储用户数据
          </Text>
        </Space>
      </Space>
    </div>
  );
};

export default UseStorage;
