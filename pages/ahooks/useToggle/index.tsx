import { Space, Typography, Divider, TextArea, Button, RadioGroup, Radio } from '@douyinfe/semi-ui'
import React from 'react'
import { useToggle } from 'ahooks'

const { Title, Text } = Typography
const UseToggle = () => {
  const [state, { toggle, set, setLeft, setRight }] = useToggle('hello', 'World')
  const [differentState, setDifferentState] = useToggle<string, boolean>('111', false)
  const [orderState, setOrderState] = useToggle<string, string>('time', 'bedNo')
  return (
    <div className={'p-10 w-full h-full'}>
      <Space vertical align={'start'} className={'w-full'}>
        <Title heading={2}>基础·useToggle</Title>
        <Divider />
        <TextArea value={state} />
        <Space className={'w-full'}>
          <Button onClick={toggle}>切换</Button>
          <Button onClick={setLeft}>set Hello</Button>
          <Button onClick={setRight}>set World</Button>
          <Button onClick={() => set('你好')}>set 你好</Button>
        </Space>
        <Divider align='left'>不同属性案例测试</Divider>
        <Text code>
          const [differentState, setDifferentState] = useToggle<>(&apos;111&apos;,false)</>
        </Text>
        <TextArea value={differentState.toString()} />
        <Space className={'w-full'}>
          <Button onClick={setDifferentState.setRight}>set false</Button>
          <Button onClick={setDifferentState.setLeft}>set 1111</Button>
          <Button onClick={setDifferentState.toggle}>切换</Button>
          <Button onClick={() => setDifferentState.set('你好')}>设置成其他值</Button>
        </Space>
        <Divider align={'left'}>
          实际用法
        </Divider>
        <Space vertical align={'start'} className={'w-full'}>
          <RadioGroup type={'pureCard'} defaultValue={orderState} onChange={setOrderState.toggle}>
            <Radio value={'time'}>按时间排序</Radio>
            <Radio value={'bedNo'}>按床号排序排序</Radio>
          </RadioGroup>
          <TextArea value={orderState} />
        </Space>
      </Space>
    </div>
  )
}

export default UseToggle
