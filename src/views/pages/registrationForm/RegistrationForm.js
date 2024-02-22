import React, { useState } from 'react'
import { CFormLabel, CFormInput, CCol, CRow, CContainer, CForm,CButton } from '@coreui/react'
import { Card, Steps } from 'antd'

const RegistrationForm = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const [formData, setFormData] = useState(
    {
      title: "",
      firstName: "",
      lastName: "",
      preferredName: "",
      idNumber: "",
      address: "",
      city: "",
      province: "",
      postalCode: "",
      country: "",
      mobileNumber: "",
      emailAddress: "",
      nationality: "",
      gender: "",
      applicationType: "",
      applicationDate: "",
      nextOfKin: {
        applicantId: 1,
        title: "Mr",
        firstName: "John",
        lastName: "Doe",
        preferredName: "Johnny",
        idNumber: "AB2C123",
        address: "123 Main St",
        city: "Anytown",
        province: "State",
        postalCode: "12345",
        country: "Country",
        mobileNumber: "+12234567890",
        emailAddress: "doe@lse.com",
        nationality: "National",
        gender: "Male",
        relationshipToApplicant: "Father"
    },
    documentation: {
        ownerId: 1,
        documentName: "Document",
        documentURL: "document",
        documentType: "Type"
    },
    employmentDetails: {
        applicantId: 1,
        nameOfEmployer: "ACME Corp",
        position: "Manager",
        address: "456 Elm St",
        startDate: "2023-01-01",
        endDate: "2024-01-01",
        employmentStatus: "Full-time",
        city: "Othertown",
        region: "Region",
        country: "Other Country"
    },
    previousQualifications: {
        ownerId: 1,
        nameOfInstitution: "Sample Institution",
        highestQualificationObtained: "Sample Qualification",
        isCIMARegistered: "Yes",
        cimaLevel: "Operational",
        cimaContactId: "12345",
        cimaEmail: "example@example.com",
        listOfProfessionalBodies: "Sample Body",
        papersLeft: 2,
        isMemberOfProfessionalBody: "Yes",
        packageStudyDuration: 12,
        consentFormUrl: "https://example.co",
        hasConsented: "Yes"
    }
  }
  )

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    const raw = JSON.stringify(formData)
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
      body: raw,
     
    };
    
    fetch("http://localhost:8080/application/create", requestOptions)
      .then((response) => response.text())
      .then((result) => alert(result))
      .catch((error) => console.error(error));
  }
  const steps = [
   
    {
      title: "Personal Details",
      
      content: (
        <Card  style={{marginBottom:"4px"}}>
       

        <CRow>
          <CCol md="6">
            <div className="mb-3">
              <CFormLabel htmlFor="title">Title</CFormLabel>
              <CFormInput
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="firstName">First Name</CFormLabel>
              <CFormInput
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="idNumber">ID Number</CFormLabel>
              <CFormInput
                type="text"
                id="idNumber"
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="address">Address</CFormLabel>
              <CFormInput
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="city">City</CFormLabel>
              <CFormInput
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="province">Province</CFormLabel>
              <CFormInput
                type="text"
                id="province"
                name="province"
                value={formData.province}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="postalCode">Postal Code</CFormLabel>
              <CFormInput
                type="text"
                id="postalCode"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="country">Country</CFormLabel>
              <CFormInput
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
            
          </CCol>
          <CCol md="6">
            <div className="mb-3">
              <CFormLabel htmlFor="lastName">Last Name</CFormLabel>
              <CFormInput
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="preferredName">Preferred Name</CFormLabel>
              <CFormInput
                type="text"
                id="preferredName"
                name="preferredName"
                value={formData.preferredName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="mobileNumber">Mobile Number</CFormLabel>
              <CFormInput
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="emailAddress">Email Address</CFormLabel>
              <CFormInput
                type="email"
                id="emailAddress"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="nationality">Nationality</CFormLabel>
              <CFormInput
                type="text"
                id="nationality"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="gender">Gender</CFormLabel>
              <CFormInput
                type="text"
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="applicationType">Application Type</CFormLabel>
              <CFormInput
                type="text"
                id="applicationType"
                name="applicationType"
                value={formData.applicationType}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <CFormLabel htmlFor="applicationDate">Application Date</CFormLabel>
              <CFormInput
                type="date"
                id="applicationDate"
                name="applicationDate"
                value={formData.applicationDate}
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
      title: "Next of Kin",
      // icon: <MdTagFaces fontSize={"22px"} />,
      content: (<Card  style={{marginBottom:"4px"}}>

      <CRow>
        <CCol md="6">
         
          <div className="mb-3">
            <CFormLabel htmlFor="firstName">First Name</CFormLabel>
            <CFormInput
              type="text"
              id="firstName"
              name="firstName"
              value={formData.nextOfKin.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="idNumber">ID Number</CFormLabel>
            <CFormInput
              type="text"
              id="idNumber"
              name="idNumber"
              value={formData.nextOfKin.idNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="address">Address</CFormLabel>
            <CFormInput
              type="text"
              id="address"
              name="address"
              value={formData.nextOfKin.address}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="city">City</CFormLabel>
            <CFormInput
              type="text"
              id="city"
              name="city"
              value={formData.nextOfKin.city}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="province">Province</CFormLabel>
            <CFormInput
              type="text"
              id="province"
              name="province"
              value={formData.nextOfKin.province}
              onChange={handleChange}
            />
          </div>
        
         
          
         
          {/* Add other fields in the first column */}
        </CCol>
        <CCol md="6">
          <div className="mb-3">
            <CFormLabel htmlFor="lastName">Last Name</CFormLabel>
            <CFormInput
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="postalCode">Postal Code</CFormLabel>
            <CFormInput
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.nextOfKin.postalCode}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="country">Country</CFormLabel>
            <CFormInput
              type="text"
              id="country"
              name="country"
              value={formData.nextOfKin.country}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="mobileNumber">Mobile Number</CFormLabel>
            <CFormInput
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.nextOfKin.mobileNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="emailAddress">Email Address</CFormLabel>
            <CFormInput
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.nextOfKin.emailAddress}
              onChange={handleChange}
            />
          </div>
         
          {/* Add other fields in the second column */}
        </CCol>
      </CRow>
      </Card>),
    },
    {
      title: "Documentation",
      content:(<Card  style={{marginBottom:"4px"}}>

      <CRow>
        <CCol md="6">
         
         
          <div className="mb-3">
            <CFormLabel htmlFor="province">ID/Passport copy </CFormLabel>
            <CFormInput
              type="file"
              id="province"
              name="province"
              
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="postalCode">Proof of address</CFormLabel>
            <CFormInput
              type="file"
              id="postalCode"
              name="postalCode"
              
              onChange={handleChange}
            />
          </div>
          
          {/* Add other fields in the first column */}
        </CCol>
        <CCol md="6">
          <div className="mb-3">
            <CFormLabel htmlFor="lastName">Qualifications: (certificates,diploma, degree & etc) </CFormLabel>
            <CFormInput
              type="file"
              id="lastName"
              name="lastName"
              
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="preferredName">Academic Transcripts</CFormLabel>
            <CFormInput
              type="file"
              id="preferredName"
              name="preferredName"
             
              onChange={handleChange}
            />
          </div>
          
          {/* Add other fields in the second column */}
        </CCol>
      </CRow>
      </Card>)
    },
    {
      title: "Employment Details",
      content:( <Card  style={{marginBottom:"4px"}}>

      <CRow>
        <CCol md="6">
          <div className="mb-3">
            <CFormLabel htmlFor="nameOfEmployer">Name Of Employer</CFormLabel>
            <CFormInput
              type="text"
              id="nameOfEmployer"
              name="nameOfEmployer"
              value={formData.employmentDetails.nameOfEmployer}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="position">Job Title</CFormLabel>
            <CFormInput
              type="text"
              id="position"
              name="position"
              value={formData.employmentDetails.position}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="startDate">Start Date </CFormLabel>
            <CFormInput
              type="date"
              id="startDate"
              name="startDate"
              value={formData.employmentDetails.startDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="address">Address</CFormLabel>
            <CFormInput
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="city">City</CFormLabel>
            <CFormInput
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          
         
          
         
        
          {/* Add other fields in the first column */}
        </CCol>
        <CCol md="6">
          <div className="mb-3">
            <CFormLabel htmlFor="lastName">Last Name</CFormLabel>
            <CFormInput
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="employmentStatus">Employment Status</CFormLabel>
            <CFormInput
              type="text"
              id="employmentStatus"
              name="employmentStatus"
              value={formData.employmentDetails.employmentStatus}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="endDate">End Date </CFormLabel>
            <CFormInput
              type="date"
              id="endDate"
              name="endDate"
              value={formData.employmentDetails.endDate}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <CFormLabel htmlFor="province">Province</CFormLabel>
            <CFormInput
              type="text"
              id="province"
              name="province"
              value={formData.province}
              onChange={handleChange}
            />
          </div>
          
          <div className="mb-3">
            <CFormLabel htmlFor="country">Country</CFormLabel>
            <CFormInput
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>
          {/* Add other fields in the second column */}
        </CCol>
      </CRow>
      </Card>

      )
    },
    {
      title: "Review",
      content:( <Card  style={{marginBottom:"4px"}}>

     
      </Card>

      )
    }
  ];

  return (
    <CContainer >
     
      
       <Steps      current={current} items={steps} />
       <CForm onSubmit={handleSubmit}>


      
      
       {steps[current].content}
       {
         current === steps.length - 1? (
           <CButton
             color="primary"
             
             type="submit"
             
             
           >
             Submit
           </CButton>
         ) : (<CButton
          
          
          onClick={() =>next()}
          
          
        >
          Next
        </CButton>)
       }
       {
        current> 1 &&(<CButton p-4
          color="primary"
          
          onClick={() =>prev()}
          
        >
          Prev
        </CButton>)
       }

       </CForm>



      {/* You can continue adding rows and columns for other fields */}
    </CContainer>
  )
}

export default RegistrationForm
