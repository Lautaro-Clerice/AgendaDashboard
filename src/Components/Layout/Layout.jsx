import React from 'react'
import Navbar from '../Navbar/Navbar'
import { LayoutContainer } from './LayoutStyles'

const Layout = ({children}) => {
  return (
    <>
    <LayoutContainer>
      <Navbar/>
      {children}
    </LayoutContainer>
    </>
  )
}

export default Layout