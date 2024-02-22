import { CButton, CContainer } from "@coreui/react"
import React,{useState} from 'react';
import { Drawer, Space, Table, Tag } from 'antd';

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['accepted'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['rejected'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['pending'],
  },
];

const ViewAllApplications = ()=>{
    const [open, setOpen] = useState(false);
 

    const onClose = () => {
        setOpen(false);
    };
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color =  tag==='accepted' ? 'green' : null;
                if (tag === 'rejected') {
                  color = 'volcano';
                }
                if (tag === 'pending') {
                    color = 'geekBlue';
                  }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <CButton onClick={()=>setOpen(true)}>View</CButton>
             
            </Space>
          ),
        },
      ];
    return(
        <>
        
        <CContainer>
 <Table columns={columns} dataSource={data} />;

        </CContainer>
 <Drawer  title="Application Details"
                placement="right"
                onClose={onClose}
                open={open}

                width={800}
                zIndex={2000}
                extra={
                    <Space>

                        <CButton>Accept</CButton>
                        <CButton color="danger">Reject</CButton>
                    </Space>

                }>
    
 </Drawer>
        </>
    )
}
export default ViewAllApplications




