import { Space, Typography, Divider, TextArea, Button, RadioGroup, Radio } from '@douyinfe/semi-ui';
import React from 'react';
import { useToggle } from 'ahooks';
import ReactMarkdown from '../../../components/ReactMarkdown';

const { Title, Text } = Typography;

const markdown = `
  
  ~~~ts
  import { Space, RadioGroup, Radio } from '@douyinfe/semi-ui'
  import { useToggle } from 'ahooks'
  const [orderState, setOrderState] = useToggle<string, string>('time', 'bedNo')
  
  <Space vertical align={'start'} className={'w-full'}>
    <RadioGroup type={'pureCard'} defaultValue='{orderState}' onChange='{setOrderState.toggle}'>
      <Radio value={'time'}>按时间排序</Radio>
      <Radio value={'bedNo'}>按床号排序排序</Radio>
    </RadioGroup>
    <TextArea value='{orderState}' />
  </Space>
  ~~~
`;

const differentTest = `

  ~~~ts
  const [differentState, setDifferentState] = useToggle<string, boolean>('111', false)
  
  <TextArea value={differentState.toString()} />
  <Space className={'w-full my-4'}>
    <Button onClick={setDifferentState.setRight}>set false</Button>
    <Button onClick={setDifferentState.setLeft}>set 1111</Button>
    <Button onClick={setDifferentState.toggle}>切换</Button>
    <Button onClick={() => setDifferentState.set('你好')}>设置成其他值</Button>
  </Space>
  ~~~
`;

const basicUseToggle = `

  ~~~ts
  const [state, { toggle, set, setLeft, setRight }] = useToggle('hello', 'World');
  
  <TextArea value={state} />
  <Space className={'w-full my-4'}>
    <Button onClick={toggle}>切换</Button>
    <Button onClick={setLeft}>set Hello</Button>
    <Button onClick={setRight}>set World</Button>
    <Button onClick={() => set('你好')}>set 你好</Button>
  </Space>
  ~~~
`;
const UseToggle = () => {
  const [state, { toggle, set, setLeft, setRight }] = useToggle('hello', 'World');
  const [differentState, setDifferentState] = useToggle<string, boolean>('111', false);
  const [orderState, setOrderState] = useToggle<string, string>('time', 'bedNo');

  return (
    <div className={'p-10 w-full h-full overflow-auto'}>
      <Space vertical align={'start'} className={'w-full'}>
        <Title heading={2}>基础·useToggle</Title>
        <Text type={'secondary'} strong className={'my-4'}>
          <Text code>useBoolean</Text>和<Text code>useToggle</Text>的使用方法一致，
          区别在于，useBoolean只能设置true和false，而useToggle可以设置任意值
        </Text>
        <Divider align={'left'}>基本用法</Divider>
        <TextArea value={state} />
        <Space className={'w-full my-4'}>
          <Button onClick={toggle}>切换</Button>
          <Button onClick={setLeft}>set Hello</Button>
          <Button onClick={setRight}>set World</Button>
          <Button onClick={() => set('你好')}>set 你好</Button>
        </Space>
        <ReactMarkdown value={basicUseToggle} />
        <Divider align="left">不同类型案例测试</Divider>
        <Text type={'secondary'}>事实上，我们并不会用上两种不同的类型来进行切换，这里只是使用一个简单的例子来展示</Text>
        <TextArea value={differentState.toString()} />
        <Space className={'w-full my-4'}>
          <Button onClick={setDifferentState.setRight}>set false</Button>
          <Button onClick={setDifferentState.setLeft}>set 1111</Button>
          <Button onClick={setDifferentState.toggle}>切换</Button>
          <Button onClick={() => setDifferentState.set('你好')}>设置成其他值</Button>
        </Space>
        <ReactMarkdown value={differentTest} />
        <Divider align={'left'}>实际用法</Divider>
        <Text type={'secondary'}>
          当我们只想在两个值之间进行切换的时候，useToggle就是一个很好方法
          <br />
          患者360中就有这么一个场景，我们需要在按时间排序和按床号排序之间进行切换
        </Text>
        <Space vertical align={'start'} className={'w-full'}>
          <RadioGroup type={'pureCard'} defaultValue={orderState} onChange={setOrderState.toggle} className={'my-4'}>
            <Radio value={'time'}>按时间排序</Radio>
            <Radio value={'bedNo'}>按床号排序排序</Radio>
          </RadioGroup>
          <TextArea value={orderState} />
        </Space>
        <ReactMarkdown value={markdown} />
      </Space>
    </div>
  );
};

export default UseToggle;
