import React, { useState } from 'react'
import { Header } from '.'
import { Footer } from '.'

const Layout = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);

  const menuClick = () => {
    setActiveMenu(!activeMenu)
  }

  return (
    <div onClick={() => setActiveMenu(false)}>
      <Header activeMenu={activeMenu} menuClick={menuClick}/>
      {children}
      <Footer />
    </div>
  )
}

export default Layout
