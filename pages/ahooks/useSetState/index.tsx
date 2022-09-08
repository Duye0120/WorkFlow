import React, { useRef } from 'react';
import { Button, Divider, Form, Space, TextArea, Typography, useFormApi } from '@douyinfe/semi-ui';
import { useSetState } from 'ahooks';
React.useLayoutEffect = React.useEffect;
const { Title, Text } = Typography;

interface StateType {
  name: string;
  age: string;
}

const MyComponent = () => {
  const api = useRef<any>();
  const [state, setState] = useSetState<StateType>({
    name: 'Jack',
    age: '18'
  });

  const SetName = () => {
    const formApi = useFormApi();
    return (
      <Button
        onClick={() => {
          formApi.setValue('name', 'duye');
        }}
      >
        设置名字
      </Button>
    );
  };

  const SetAge = () => {
    const formApi = useFormApi();
    return (
      <Button
        onClick={() => {
          formApi.setValue('age', Number(state.age) + 1);
        }}
      >
        年龄+1
      </Button>
    );
  };

  const Reset = () => {
    const formApi = useFormApi();
    return (
      <Button
        onClick={() => {
          formApi.setValues({
            age: '18',
            name: 'Jack'
          });
        }}
      >
        Reset
      </Button>
    );
  };
  return (
    <div className="p-10">
      <Space align="start" vertical className={'w-full h-full'}>
        <Title heading={2}>基础·useSetState</Title>
        <Text className={'py-6'} type={'secondary'}>
          管理 object 类型 state 的 Hooks，用法与 class 组件的
          <Text code>this.setState</Text>
          基本一致。
        </Text>
        <Divider />
        <Title heading={2}>代码演示</Title>
        <div className={'w-full p-5  h-full border border-gray-300 border-solid'}>
          <Space vertical align="start">
            <Title heading={4}>Data</Title>
            <TextArea className={'h-10'} value={JSON.stringify(state)} />
            <Title heading={4}>demo</Title>
            <Form
              getFormApi={(formApi) => (api.current = formApi)}
              initValues={state}
              onValueChange={(values, field) => {
                setState(field as StateType);
              }}
            >
              <Form.Input className={'w-52'} field="name" label="姓名：" />
              <Form.Input className={'w-52'} field="age" label="年龄：" />
              <Space>
                <SetName />
                <SetAge />
                <Reset />
              </Space>
            </Form>
          </Space>
        </div>
      </Space>
    </div>
  );
};

export default MyComponent;
