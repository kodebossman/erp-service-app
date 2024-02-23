import React, { useState } from 'react'
import { CFormLabel, CFormInput, CCol, CRow, CContainer, CForm, CButton } from '@coreui/react'
import { Card, Steps,message,Result } from 'antd'
import axios from 'axios'

const RegistrationForm = () => {
  const [current, setCurrent] = useState(0)
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
     
      content:  <Result
    status="success"
    title="Your application was successfully registered."
    
   
  />,})}
  const next = () => {
    setCurrent(current + 1)
  }
  const prev = () => {
    setCurrent(current - 1)
  }
  const [formData, setFormData] = useState(
    {
      personalDetailsTitle: "",
      personalDetailsFirstName: "",
      personalDetailsLastName: "",
      personalDetailsPreferredName: "",
      personalDetailsIdNumber: "",
      personalDetailsAddress: "",
      personalDetailsCity: "",
      personalDetailsProvince: "",
      personalDetailsPostalCode: "",
      personalDetailsCountry: "",
      personalDetailsMobileNumber: "",
      personalDetailsEmailAddress: "",
      personalDetailsNationality: "",
      personalDetailsGender: "",
      personalDetailsApplicationType: "",
      personalDetailsApplicationDate: "",
      nextOfKinTitle: "",
      nextOfKinFirstName: "",
      nextOfKinLastName: "",
      nextOfKinPreferredName: "",
      nextOfKinIdNumber: "",
      nextOfKinAddress: "",
      nextOfKinCity: "",
      nextOfKinProvince: "",
      nextOfKinPostalCode: "",
      nextOfKinCountry: "",
      nextOfKinMobileNumber: "",
      nextOfKinEmailAddress: "",
      nextOfKinNationality: "",
      nextOfKinGender: "",
      nextOfKinRelationshipToApplicant: "",
      documentationDocumentName: "",
      documentationDocumentURL: "",
      documentationDocumentType: "",
      employmentDetailsNameOfEmployer: "",
      employmentDetailsPosition: "",
      employmentDetailsAddress: "",
      employmentDetailsStartDate: "",
      employmentDetailsEndDate: "",
      employmentDetailsEmploymentStatus: "",
      employmentDetailsCity: "",
      employmentDetailsRegion: "",
      employmentDetailsCountry: "",
      previousQualificationsNameOfInstitution: "",
      previousQualificationsHighestQualificationObtained: "",
      previousQualificationsIsCimaRegistered: "",
      previousQualificationsCimaLevel: "",
      previousQualificationsCimaContactId: "",
      previousQualificationsCimaEmail: "",
      previousQualificationsListOfProfessionalBodies: "",
      previousQualificationsPapersLeft: "",
      previousQualificationsIsMemberOfProfessionalBody: "",
      previousQualificationsPackageStudyDuration: "",
      previousQualificationsConsentFormUrl: "",
      previousQualificationsHasConsented: ""
  }
  
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(formData)
    const reqObject = {
      personalDetails: {
          title: formData.personalDetailsTitle,
          firstName: formData.personalDetailsFirstName,
          lastName: formData.personalDetailsLastName,
          preferredName: formData.personalDetailsPreferredName,
          idNumber: formData.personalDetailsIdNumber,
          address: formData.employmentDetailsAddress,
          city: formData.personalDetailsCity,
          province: formData.personalDetailsProvince,
          postalCode: formData.personalDetailsPostalCode,
          country: formData.personalDetailsCountry,
          mobileNumber: formData.personalDetailsMobileNumber,
          emailAddress: formData.personalDetailsEmailAddress,
          nationality: formData.personalDetailsNationality,
          gender: formData.personalDetailsGender,
          applicationType: formData.personalDetailsApplicationType,
          applicationDate: formData.personalDetailsApplicationDate
      },
      nextOfKin: {
          title: formData.nextOfKinTitle,
          firstName:formData.nextOfKinFirstName,
          lastName: formData.nextOfKinLastName,
          preferredName: formData.nextOfKinPreferredName,
          idNumber: formData.nextOfKinIdNumber,
          address: formData.nextOfKinAddress,
          city: formData.nextOfKinCity,
          province: formData.nextOfKinProvince,
          postalCode: formData.nextOfKinPostalCode,
          country: formData.nextOfKinCountry,
          mobileNumber: formData.nextOfKinMobileNumber,
          emailAddress: formData.nextOfKinAddress,
          nationality: formData.nextOfKinNationality,
          gender: formData.nextOfKinGender,
          relationshipToApplicant: formData.nextOfKinRelationshipToApplicant
      },
      documentation: {
          documentName: "Document",
          documentURL: "document",
          documentType: "Type"
      },
      employmentDetails: {
          nameOfEmployer: formData.employmentDetailsNameOfEmployer,
          position: formData.employmentDetailsPosition,
          address: formData.employmentDetailsAddress,
          startDate: formData.employmentDetailsStartDate,
          endDate: formData.employmentDetailsEndDate,
          employmentStatus: formData.employmentDetailsEmploymentStatus,
          city: formData.employmentDetailsCity,
          region: formData.employmentDetailsRegion,
          country:formData.employmentDetailsCountry
      },
      previousQualifications: {
          nameOfInstitution: formData.previousQualificationsNameOfInstitution,
          highestQualificationObtained: formData.previousQualificationsHighestQualificationObtained,
          isCIMARegistered: formData.previousQualificationsIsCimaRegistered,
          cimaLevel: "Operational",
          cimaContactId: formData.previousQualificationsCimaContactId,
          cimaEmail: formData.previousQualificationsCimaEmail,
          listOfProfessionalBodies: formData.previousQualificationsListOfProfessionalBodies,
          papersLeft: formData.previousQualificationsPapersLeft,
          isMemberOfProfessionalBody: formData.previousQualificationsIsMemberOfProfessionalBody,
          packageStudyDuration: formData.previousQualificationsPackageStudyDuration,
          consentFormUrl: "https://example.co",
          hasConsented: "Yes"
      }
  };
  
    const raw = JSON.stringify(reqObject)
    console.log(raw)
    try {
      const response = await axios.post(
        `http://localhost:8080/application/create`,

        raw,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      //console.log("response---", response);
      setIsLoading(false);

      success();
      
      
    } catch (error) {
      setIsLoading(false);
      console.error("Error submitting form:", error);
    }
    
  }
  const steps = [
    {
      title: 'Personal Details',

      content: (
        <Card style={{ marginBottom: '4px' }}>
          <CRow>
            <CCol md="6">
              <div className="mb-3">
                <CFormLabel htmlFor="personalDetailsTitle">Title</CFormLabel>
                <CFormInput
                  type="text"
                  id="personalDetailsTitle"
                  name="personalDetailsTitle"
                  value={formData.personalDetailsTitle}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="personalDetailsFirstName">First Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="personalDetailsFirstName"
                  name="personalDetailsFirstName"
                  value={formData.personalDetailsFirstName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="personalDetailsIdNumber">ID Number</CFormLabel>
                <CFormInput
                  type="text"
                  id="personalDetailsIdNumber"
                  name="personalDetailsIdNumber"
                  value={formData.personalDetailsIdNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="personalDetailsAddress">Address</CFormLabel>
                <CFormInput
                  type="text"
                  id="personalDetailsAddress"
                  name="personalDetailsAddress"
                  value={formData.personalDetailsAddress}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="personalDetailsCity">City</CFormLabel>
                <CFormInput
                  type="text"
                  id="personalDetailsCity"
                  name="personalDetailsCity"
                  value={formData.personalDetailsCity}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="personalDetailsProvince">Province</CFormLabel>
                <CFormInput
                  type="text"
                  id="personalDetailsProvince"
                  name="personalDetailsProvince"
                  value={formData.personalDetailsProvince}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="personalDetailsPostalCode">Postal Code</CFormLabel>
                <CFormInput
                  type="text"
                  id="personalDetailsPostalCode"
                  name="personalDetailsPostalCode"
                  value={formData.personalDetailsPostalCode}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="personalDetailsCountry">Country</CFormLabel>
                <CFormInput
                  type="text"
                  id="personalDetailsCountry"
                  name="personalDetailsCountry"
                  value={formData.personalDetailsCountry}
                  onChange={handleChange}
                />
              </div>
            </CCol>
            <CCol md="6">
              <div className="mb-3">
                <CFormLabel htmlFor="personalDetailsLastName">Last Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="personalDetailsLastName"
                  name="personalDetailsLastName"
                  value={formData.personalDetailsLastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="preferredName">Preferred Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="preferredName"
                  name="personalDetailsPreferredName"
                  value={formData.personalDetailsPreferredName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="personalDetailsMobileNumber">Mobile Number</CFormLabel>
                <CFormInput
                  type="text"
                  id="personalDetailsMobileNumber"
                  name="personalDetailsMobileNumber"
                  value={formData.personalDetailsMobileNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="personalDetailsEmailAddress">Email Address</CFormLabel>
                <CFormInput
                  type="email"
                  id="personalDetailsEmailAddress"
                  name="personalDetailsEmailAddress"
                  value={formData.personalDetailsEmailAddress}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="personalDetailsNationality">Nationality</CFormLabel>
                <CFormInput
                  type="text"
                  id="personalDetailsNationality"
                  name="personalDetailsNationality"
                  value={formData.personalDetailsNationality}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="personalDetailsGender">Gender</CFormLabel>
                <CFormInput
                  type="text"
                  id="personalDetailsGender"
                  name="personalDetailsGender"
                  value={formData.personalDetailsGender}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="personalDetailsApplicationType">Application Type</CFormLabel>
                <CFormInput
                  type="text"
                  id="personalDetailsApplicationType"
                  name="personalDetailsApplicationType"
                  value={formData.personalDetailsApplicationType}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="personalDetailsApplicationDate">Application Date</CFormLabel>
                <CFormInput
                  type="date"
                  id="personalDetailsApplicationDate"
                  name="personalDetailsApplicationDate"
                  value={formData.personalDetailsApplicationDate}
                  onChange={handleChange}
                />
              </div>
              {/* Add ot
            {/* Add other fields in the second column */}
            </CCol>
          </CRow>
        </Card>
      ),
    },

    {
      title: 'Next of Kin',
      // icon: <MdTagFaces fontSize={"22px"} />,
      content: (
        <Card style={{ marginBottom: '4px' }}>
          <CRow>
            <CCol md="6">
              <div className="mb-3">
                <CFormLabel htmlFor="nextOfKinFirstName">First Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="nextOfKinFirstName"
                  name="nextOfKinFirstName"
                  value={formData.nextOfKinFirstName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="nextOfKinIdNumber">ID Number</CFormLabel>
                <CFormInput
                  type="text"
                  id="nextOfKinIdNumber"
                  name="nextOfKinIdNumber"
                  value={formData.nextOfKinIdNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="nextOfKinAddress">Address</CFormLabel>
                <CFormInput
                  type="text"
                  id="nextOfKinAddress"
                  name="nextOfKinAddress"
                  value={formData.nextOfKinAddress}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="nextOfKinCity">City</CFormLabel>
                <CFormInput
                  type="nextOfKinCity"
                  id="nextOfKinCity"
                  name="nextOfKinCity"
                  value={formData.nextOfKinCity}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="nextOfKinProvince">Province</CFormLabel>
                <CFormInput
                  type="text"
                  id="nextOfKinProvince"
                  name="nextOfKinProvince"
                  value={formData.nextOfKinProvince}
                  onChange={handleChange}
                />
              </div>

              {/* Add other fields in the first column */}
            </CCol>
            <CCol md="6">
              <div className="mb-3">
                <CFormLabel htmlFor="nextOfKinLastName">Last Name</CFormLabel>
                <CFormInput
                  type="text"
                  id="nextOfKinLastName"
                  name="nextOfKinLastName"
                  value={formData.nextOfKinLastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="nextOfKinPostalCode">Postal Code</CFormLabel>
                <CFormInput
                  type="text"
                  id="nextOfKinPostalCode"
                  name="nextOfKinPostalCode"
                  value={formData.nextOfKinPostalCode}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="nextOfKinCountry">Country</CFormLabel>
                <CFormInput
                  type="text"
                  id="nextOfKinCountry"
                  name="nextOfKinCountry"
                  value={formData.nextOfKinCountry}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="nextOfKinMobileNumber">Mobile Number</CFormLabel>
                <CFormInput
                  type="text"
                  id="nextOfKinMobileNumber"
                  name="nextOfKinMobileNumber"
                  value={formData.nextOfKinMobileNumber}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="nextOfKinEmailAddress">Email Address</CFormLabel>
                <CFormInput
                  type="email"
                  id="nextOfKinEmailAddress"
                  name="nextOfKinEmailAddress"
                  value={formData.nextOfKinEmailAddress}
                  onChange={handleChange}
                />
              </div>

              {/* Add other fields in the second column */}
            </CCol>
          </CRow>
        </Card>
      ),
    },
    {
      title: 'Documentation',
      content: (
        <Card style={{ marginBottom: '4px' }}>
          <CRow>
            <CCol md="6">
              <div className="mb-3">
                <CFormLabel htmlFor="province">ID/Passport copy </CFormLabel>
                <CFormInput id="province" name="province" onChange={handleChange} value={formData.documentationDocumentName} />
              </div>
             

              {/* Add other fields in the first column */}
            </CCol>
          
          </CRow>
        </Card>
      ),
    },
    {
      title: 'Employment Details',
      content: (
        <Card style={{ marginBottom: '4px' }}>
          <CRow>
            <CCol md="6">
              <div className="mb-3">
                <CFormLabel htmlFor="employmentDetailsNameOfEmployer">Name Of Employer</CFormLabel>
                <CFormInput
                  type="text"
                  id="employmentDetailsNameOfEmployer"
                  name="employmentDetailsNameOfEmployer"
                  value={formData.employmentDetailsNameOfEmployer}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="employmentDetailsPosition">Job Title</CFormLabel>
                <CFormInput
                  type="text"
                  id="employmentDetailsPosition"
                  name="employmentDetailsPosition"
                  value={formData.employmentDetailsPosition}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="employmentDetailsStartDate">Start Date </CFormLabel>
                <CFormInput
                  type="date"
                  id="employmentDetailsStartDate"
                  name="employmentDetailsStartDate"
                  value={formData.employmentDetailsStartDate}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="employmentDetailsAddress">Address</CFormLabel>
                <CFormInput
                  type="text"
                  id="address"
                  name="employmentDetailsAddress"
                  value={formData.employmentDetailsAddress}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="city">City</CFormLabel>
                <CFormInput
                  type="text"
                  id="employmentDetailsCity"
                  name="employmentDetailsCity"
                  value={formData.employmentDetailsCity}
                  onChange={handleChange}
                />
              </div>

              {/* Add other fields in the first column */}
            </CCol>
            <CCol md="6">
        
              <div className="mb-3">
                <CFormLabel htmlFor="employmentDetailsEmploymentStatus">Employment Status</CFormLabel>
                <CFormInput
                  type="text"
                  id="employmentDetailsEmploymentStatus"
                  name="employmentDetailsEmploymentStatus"
                  value={formData.employmentDetailsEmploymentStatus}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="employmentDetailsEndDate">End Date </CFormLabel>
                <CFormInput
                  type="date"
                  id="employmentDetailsEndDate"
                  name="employmentDetailsEndDate"
                  value={formData.employmentDetailsEndDate}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <CFormLabel htmlFor="employmentDetailsRegion">Province</CFormLabel>
                <CFormInput
                  type="text"
                  id="employmentDetailsRegion"
                  name="employmentDetailsRegion"
                  value={formData.employmentDetailsRegion}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <CFormLabel htmlFor="employmentDetailsCountry">Country</CFormLabel>
                <CFormInput
                  type="text"
                  id="employmentDetailsCountry"
                  name="employmentDetailsCountry"
                  value={formData.employmentDetailsCountry}
                  onChange={handleChange}
                />
              </div>
              {/* Add other fields in the second column */}
            </CCol>
          </CRow>
        </Card>
      ),
    },
    {
      title: 'Previous Qualifications',
      content: <Card style={{ marginBottom: '4px' }}>
      <CRow>
        <CCol md="6">
          <div className="mb-3">
            <CFormLabel htmlFor="previousQualificationsNameOfInstitution">Name Of Instituition</CFormLabel>
            <CFormInput
              type="text"
              id="previousQualificationsNameOfInstitution"
              name="previousQualificationsNameOfInstitution"
              value={formData.previousQualificationsNameOfInstitution}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="previousQualificationsIsCimaRegistered">CIMA Registered?</CFormLabel>
            <CFormInput
              type="text"
              id="previousQualificationsIsCimaRegistered"
              name="previousQualificationsIsCimaRegistered"
              value={formData.previousQualificationsIsCimaRegistered}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="previousQualificationsCimaLevel">CIMA Level</CFormLabel>
            <CFormInput
              type="text"
              id="personalDetailsIdNumber"
              name="previousQualificationsCimaLevel"
              value={formData.previousQualificationsCimaLevel}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="personalDetailsAddress">CIMA Contact</CFormLabel>
            <CFormInput
              type="text"
              id="personalDetailsAddress"
              name="previousQualificationsCimaContactId"
              value={formData.previousQualificationsCimaContactId}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="personalDetailsCity">CIMA Email</CFormLabel>
            <CFormInput
              type="email"
              id="personalDetailsCity"
              name="previousQualificationsCimaEmail"
              value={formData.previousQualificationsCimaEmail}
              onChange={handleChange}
            />
          </div>
         
        </CCol>
        <CCol md="6">
          <div className="mb-3">
            <CFormLabel htmlFor="previousQualificationsHighestQualificationObtained}">Highest Qualifications</CFormLabel>
            <CFormInput
              type="text"
              id="previousQualificationsHighestQualificationObtained}"
              name="previousQualificationsHighestQualificationObtained}"
              value={formData.previousQualificationsHighestQualificationObtained}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="preferredName">Package Study Duration</CFormLabel>
            <CFormInput
              type="number"
              id="preferredName"
              name="previousQualificationsPackageStudyDuration"
              value={formData.previousQualificationsPackageStudyDuration}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="previousQualificationsListOfProfessionalBodies">Professional Bodies</CFormLabel>
            <CFormInput
              type="text"
              id="personalDetailsProvince"
              name="previousQualificationsListOfProfessionalBodies"
              value={formData.previousQualificationsListOfProfessionalBodies}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="previousQualificationsPapersLeft">Papers Left</CFormLabel>
            <CFormInput
              type="number"
              id="personalDetailsPostalCode"
              name="previousQualificationsPapersLeft"
              value={formData.previousQualificationsPapersLeft}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="previousQualificationsIsMemberOfProfessionalBody">Member of professional Board?</CFormLabel>
            <CFormInput
              type="text"
              id="personalDetailsCountry"
              name="previousQualificationsIsMemberOfProfessionalBody"
              value={formData.previousQualificationsIsMemberOfProfessionalBody}
              onChange={handleChange}
            />
          </div>
       
          {/* Add ot
        {/* Add other fields in the second column */}
        </CCol>
      </CRow>
    </Card>,
    },
  ]

  return (
    
    <CContainer>
       {contextHolder}
       <Card>

      <Steps current={current} items={steps} />
       </Card>
      <CForm onSubmit={handleSubmit}>
        {steps[current].content}
        {current === steps.length - 1 && (
          <CButton color="primary" type="submit">
            Submit
          </CButton>
        ) }
        {current != steps.length - 1 && (
          <CButton color="primary" onClick={()=>next()}>
           Next
          </CButton>
        ) }
        {current > 1 && (
          <CButton p-4 color="primary" onClick={() => prev()}>
            Prev
          </CButton>
        )}
      </CForm>

      {/* You can continue adding rows and columns for other fields */}
    </CContainer>
  )
}

export default RegistrationForm
