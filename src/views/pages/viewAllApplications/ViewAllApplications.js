import { CButton, CContainer } from "@coreui/react"
import React,{useState} from 'react';
import { Drawer, Space, Table, Tag,Modal } from 'antd';
import  useSWR  from'swr';
import { Link } from "react-router-dom";



  const fetcher = (url) => fetch(url).then((res) => res.json());



const ViewAllApplications = ()=>{
  

    const {
      data: applicationsData,
    
    } = useSWR(
      `http://localhost:8080/application/all?page=1&size=5&sort=idNumber`,
      fetcher,
      { revalidateOnFocus: false, revalidateOnReconnect: false }
    );
    console.log("applicationsData---",applicationsData);
    const data = applicationsData?.body?.data?.map((record, index) => {
      return  {
        key: index,
        name: record.personalDetails.firstName + ' ' + record.personalDetails.lastName,
        applicationType: record.personalDetails.applicationType,
        address: record.personalDetails.address +''+record.personalDetails.city+''+record.personalDetails.country,
        applicationStatus: 'accepted',
        applicationId: record.personalDetails.idNumber
      }})

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
         
        },
        {
          title: 'Application Type',
          dataIndex: 'applicationType',
          key: 'applicationType',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Application Status',
          key: 'applicationStatus',
          dataIndex: 'applicationStatus',
          render: (_, { applicationStatus }) => {
            let color = null;
          
            if (applicationStatus === 'accepted') {
              color = 'green';
            } else if (applicationStatus === 'rejected') {
              color = 'volcano';
            } else if (applicationStatus === 'pending') {
              color = 'geekBlue';
            }
          
            return (
              
                <Tag color={color} key={applicationStatus}>
                  {applicationStatus}
                </Tag>
             
            );
          }}
          ,
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Space size="middle">
              <Link to={`/applications/${record.applicationId}`} >View</Link>
             
            </Space>
          ),
        },
      ];
    return(
        <>
        
        <CContainer>
 <Table columns={columns} dataSource={data} />;

        </CContainer>
      
        </>
    )
}
export default ViewAllApplications




