import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilPencil,
  cilSpeedometer,
  cilLibrary
} from '@coreui/icons'
import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  
  },

  {
    component: CNavItem,
    name: 'New Application',
    to: '/registration',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'View Applications',
    to: '/applications',
    icon: <CIcon icon={cilLibrary} customClassName="nav-icon" />,
  },
  
]

export default _nav
