import React, { useState } from "react";
import { Table, Card, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default function AdminLetterLibrary() {
  const tabListNoTitle = [
    {
      key: 'DefaultTemplates',
      tab: 'Default Templates',
    },
    {
      key: 'CustomTemplates',
      tab: 'Custom Templates',
    },
    {
      key: 'LetterFlows',
      tab: 'Letter Flows',
    },
  ];
  const [activeTabKey2, setActiveTabKey2] = useState('DefaultTemplates');
  const onTab2Change = key => {
    setActiveTabKey2(key);
  };
  const contentListNoTitle = {
    DefaultTemplates: <DefaultTemplates />,
    CustomTemplates: <p>Custom content</p>,
    LetterFlows: <p>Letter content</p>,
  };
  return (
    <React.Fragment>
      <div id="dash-content">
        <div id="letter-templates-list">
          <Card
            style={{ width: '100%' }}
            tabList={tabListNoTitle}
            activeTabKey={activeTabKey2}
            tabBarExtraContent={"Available Templates"}
            onTabChange={key => {
              onTab2Change(key);
            }}
          >
            {contentListNoTitle[activeTabKey2]}
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}
function DefaultTemplates() {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Recipient',
      dataIndex: 'recipient',
    },
    {
      title: 'Item Type',
      dataIndex: 'itemType',
    },
    {
      title: 'Bulk',
      dataIndex: 'bulk',
    },
    {
      title: 'Actions',
      dataIndex: 'action',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'Bankruptcy Round 1 (bureau)',
      recipient: "Bureau",
      itemType: 'Bankruptcy	',
      bulk: 'Yes',
      action: <UploadBtn />,
    },
    {
      key: '2',
      name: 'Collection Round 1 (bureau)',
      recipient: "Bureau",
      itemType: 'Account',
      bulk: 'Yes',
      action: <UploadBtn />,
    },
    {
      key: '3',
      name: 'Inquiry Round 1 (creditor)',
      recipient: "Bureau",
      itemType: 'Inquiry',
      bulk: 'Yes',
      action: <UploadBtn />,
    },
  ];
  return (
    <Table columns={columns} dataSource={data} size="middle" />
  )
}
function UploadBtn() {
  const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    previewFile(file) {
      console.log('Your upload file:', file);
      // Your process logic. Here we just mock to the same file
      return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file,
      })
        .then(res => res.json())
        .then(({ thumbnail }) => thumbnail);
    },
  };
  return (
    <Upload {...props}>
      <Button icon={<UploadOutlined />}></Button>
    </Upload>
  )
}