import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))




//Applications
const NewApplication = React.lazy(() => import('./views/pages/registrationForm/RegistrationForm'))
const ViewApplications = React.lazy(() => import('./views/pages/viewAllApplications/ViewAllApplications'))
const ViewMoreApplications = React.lazy(() => import('./views/pages/viewAllApplications/ViewMoreApplication'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },


  //Application
  { path: '/registration', name: 'New Application', element: NewApplication,exact: true },
  { path: '/applications', name: 'View Applications', element: ViewApplications,exact: true },
  { path: '/applications/:id', name: 'View Application', element: ViewMoreApplications,exact: true },
]

export default routes
