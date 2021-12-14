import React from 'react'
import { Header } from '.'
import { Footer } from '.'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
