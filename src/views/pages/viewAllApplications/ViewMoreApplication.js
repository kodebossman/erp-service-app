import {
  CButton,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CCol,
  CFormSelect,
} from '@coreui/react'
import React, { useState } from 'react'
import { Drawer, Space, Table, Tabs, Tag, Card, Descriptions, Modal, message, Result } from 'antd'
import useSWR from 'swr'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const ViewMoreApplication = () => {
  const { id } = useParams()
  const [open, setOpen] = useState(false)
  const [messageApi, contextHolder] = message.useMessage()
  const [reviewFormData, setReviewFormData] = useState({
    reviewStatus: 'REJECTED',
    status: '',
    comments: '',
    description: '',
    applicationId: id,
  })

  const success = () => {
    messageApi.open({
      content: <Result status="success" title="Successfully reviewed." />,
    })
  }
  const handleChange = (e) => {
    console.log(reviewFormData)
    const { name, value } = e.target
    setReviewFormData({
      ...reviewFormData,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const raw = JSON.stringify(reviewFormData)
    console.log(raw)
    try {
      const response = await axios.post(
        `http://localhost:8080/review/create`,

        raw,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      //console.log("response---", response);

      success()
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }
  const showModal = () => {
    setOpen(true)
  }
  const handleOk = () => {
    setOpen(false)
  }
  const handleCancel = () => {
    setOpen(false)
  }

  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data: applicationsData } = useSWR(`http://localhost:8080/application/${id}`, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })
  console.log('applicationsData---', applicationsData)
  const dataSource = applicationsData?.body

  const itemss = [
    {
      key: '1',
      label: 'Tab 1',
      children: <Card></Card>,
    },
    {
      key: '2',
      label: 'Tab 2',
      children: <Card></Card>,
    },
    {
      key: '3',
      label: 'Tab 3',
      children: <Card></Card>,
    },
  ]

  return (
    <CContainer>
      <Card>
        <Descriptions title="User Info" extra={<CButton onClick={showModal}>Review</CButton>}>
          <Descriptions.Item label="Full Name">
            {dataSource?.personalDetails?.firstName + ' ' + dataSource?.personalDetails?.lastName}
          </Descriptions.Item>
          <Descriptions.Item label="Email Address">
            {dataSource?.personalDetails?.emailAddress}
          </Descriptions.Item>
          <Descriptions.Item label="Mobile Number">
            {dataSource?.personalDetails?.mobileNumber}
          </Descriptions.Item>
          <Descriptions.Item label="ID Number">
            {dataSource?.personalDetails?.idNumber}
          </Descriptions.Item>
          <Descriptions.Item label="Address">
            {dataSource?.personalDetails?.address +
              ' ' +
              dataSource?.personalDetails?.city +
              ' ' +
              dataSource?.personalDetails?.country}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Card>
        <Tabs items={itemss}></Tabs>
      </Card>

      <Modal
        open={open}
        title={`Review application for ${
          dataSource?.personalDetails?.firstName + ' ' + dataSource?.personalDetails?.lastName
        }`}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        zIndex={2000}
      >
        {contextHolder}
        <CForm onSubmit={handleSubmit}>
          <CCol>
            <div className="mb-3">
              <CFormLabel htmlFor="status">Status</CFormLabel>
              <CFormSelect
                aria-label="Default select example"
                name="status"
                value={reviewFormData.status}
                onChange={handleChange}
              >
                <option>Open to select </option>
                <option value="ACCEPTED">Accept</option>
                <option value="REJECTED">Reject</option>
              </CFormSelect>
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="comments">Comments</CFormLabel>
              <CFormInput
                type="text"
                id="comments"
                name="comments"
                value={reviewFormData.comments}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="description">Description</CFormLabel>
              <CFormInput
                type="text"
                id="description"
                name="description"
                value={reviewFormData.description}
                onChange={handleChange}
              />
            </div>

            {/* Add other fields in the first column */}
          </CCol>
          <CButton type='submit'>Submit</CButton>
        </CForm>
      </Modal>
    </CContainer>
  )
}
export default ViewMoreApplication
