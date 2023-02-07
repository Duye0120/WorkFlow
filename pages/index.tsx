import type { NextPage } from 'next';
import { Button, Divider, Form, Space, Typography } from '@douyinfe/semi-ui';
import { useRef, useState } from 'react';
import Editor from "@monaco-editor/react";
const { Title } = Typography

const Home: NextPage = () => {
  const formApi: any = useRef();
  const [editData, setEditData] = useState('');
  const modelsTemplate = (functionName:string,annotation:string) => {
    return `
  // ${annotation}
  async ${functionName}(payload) {
    const data = await service.${functionName}(payload);
  },
    `
  }

  const servicesTemplate = (functionName: string, method: string, endpoint: string,annotation:string) => { 
    return `
  // ${annotation}
  async ${functionName}(payload) {
    return request.${method}('${endpoint}', payload);
  },
    `
  }

  const monacoEditorData = (functionName: string, method: string, endpoint: string,annotation:string) => {
    return `
export default {
// models
${modelsTemplate(functionName,annotation)}


// services
${servicesTemplate(functionName, method, endpoint,annotation)}
}
`}

  return (
    <Space vertical className={'w-full h-full p-5'} align={'start'}>
      <Title>Service层和Model层自动生成</Title>
      <Divider/>
      <Form
        getFormApi={(api) => (formApi.current = api)}
        labelAlign='left'
        labelPosition='left'
        labelWidth={100}
        onSubmit={(values) => {
          setEditData(monacoEditorData(values.functionName, values.method, values.endpoint,values.annotation))
        }}
      >
        <Form.Input field='annotation' label='注释'
          rules={[{ required: true, message:'请输入注释' }]} /> 
        <Form.Input field='functionName' label='函数名称'
          rules={[{ required: true, message: '请输入函数名称' }]}
        />
        <Form.Select
          field='method'
          label='请求方式'
          style={{ width: 300 }}
          rules={[{ required: true, message: '请选择请求方式' }]}
        >
          <Form.Select.Option value='get'>GET</Form.Select.Option>
          <Form.Select.Option value='post'>POST</Form.Select.Option>
        </Form.Select>
        <Form.Input field='endpoint' label='接口地址' style={{ width: 300 }}
          rules={[{ required: true, message: '请输入接口地址' }]}
          onEnterPress={() => { formApi.current?.submitForm() }}
        />
      </Form>
      <Space>
        <Button theme={'solid'}  onClick={() => {formApi.current?.submitForm()}}>生成</Button>
        <Button onClick={() => { formApi?.current?.reset(); setEditData('')}}>重置</Button>
      </Space>
      <Editor
        height="500px"
        defaultLanguage="javascript"
        value={editData}
      />
    </Space>
  )
}

export default Home
