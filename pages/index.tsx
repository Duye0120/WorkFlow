import type { NextPage } from 'next';
import { Button, Divider, Form, Space, Toast, Typography } from '@douyinfe/semi-ui';
import React, { useMemo, useRef, useState } from 'react';
import Editor from '@monaco-editor/react';

const { Title, Paragraph } = Typography;

interface ITemplate {
  // 请求方式
  method: 'get' | 'post';
  // 接口地址
  endpoint: string;
  // 注释
  annotation: string;
}

const Home: NextPage = () => {
  const formApi: any = useRef();
  const [editData, setEditData] = useState('');
  const [endpointValue, setEndpointValue] = useState('');
  const methodName = useMemo(() => endpointValue.split('/').filter((item) => item !== ''), [endpointValue])[1];

  const servicesTemplate = (props: ITemplate) => {
    const { method, endpoint, annotation } = props;
    switch (method) {
      case 'get':
        return `  // ${annotation} \n  async ${methodName}(payload) {\n    return request.${method}('${endpoint}', {params: payload});\n  },\n`;
      case 'post':
        return `  // ${annotation} \n  async ${methodName}(payload) {\n    return request.${method}('${endpoint}', payload);\n  },\n`;
      default:
        return undefined;
    }
  };

  const modelsTemplate = (annotation: string) => {
    return `  // ${annotation} \n  async ${methodName}(payload) {\n    const data = await service.${methodName}(payload);\n  },`;
  };

  const monacoEditorData = (props: ITemplate) => {
    const { method, endpoint, annotation } = props;
    return `export default {\n  // models\n${modelsTemplate(annotation)}\n\n  // services\n${servicesTemplate({
      method,
      endpoint,
      annotation,
    })}}`;
  };

  return (
    <Space vertical className={'w-full h-full p-5'} align={'start'}>
      <Title>Service层和Model层自动生成</Title>
      <Divider />
      <Form
        getFormApi={(api) => (formApi.current = api)}
        labelAlign="left"
        labelPosition="left"
        labelWidth={100}
        onSubmit={(values) => {
          setEditData(monacoEditorData({ ...values }));
        }}
      >
        <Form.Input field="annotation" label="注释" rules={[{ required: true, message: '请输入注释' }]} />
        <Form.Select
          field="method"
          label="请求方式"
          style={{ width: 300 }}
          rules={[{ required: true, message: '请选择请求方式' }]}
        >
          <Form.Select.Option value="get">GET</Form.Select.Option>
          <Form.Select.Option value="post">POST</Form.Select.Option>
        </Form.Select>
        <Form.Input
          field="endpoint"
          label="接口地址"
          style={{ width: 300 }}
          rules={[
            { required: true, message: '请输入接口地址' },
            // 输入正确的接口地址
            { pattern: /^(\/\w+)+$/, message: '请输入正确的接口地址' },
          ]}
          onChange={(value) => {
            setEndpointValue(value);
          }}
          extraText={'请确保第二个参数为参数名'}
          onEnterPress={() => {
            formApi.current?.submitForm();
          }}
        />
      </Form>
      <Space>
        <Button
          theme={'solid'}
          onClick={() => {
            formApi.current?.submitForm();
          }}
        >
          生成
        </Button>
        <Button
          onClick={() => {
            formApi?.current?.reset();
            setEditData('');
          }}
        >
          重置
        </Button>
      </Space>
      <Editor height="500px" defaultLanguage="javascript" value={editData} />
      <Space>
        <Paragraph
          copyable={{
            content: modelsTemplate(formApi.current?.getValue('annotation')),
            onCopy: () => Toast.success('复制成功'),
          }}
        >
          点我复制model层
        </Paragraph>
        <Paragraph
          copyable={{
            content: formApi.current?.getValues() && servicesTemplate(formApi.current?.getValues() as ITemplate),
            onCopy: () => Toast.success('复制成功'),
          }}
        >
          点我复制service层
        </Paragraph>
      </Space>
    </Space>
  );
};

export default Home;
