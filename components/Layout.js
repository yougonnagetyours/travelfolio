import React, { useState } from 'react'
import { Header } from '.'
import { Footer } from '.'

const Layout = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);

  const menuClick = () => {
    setActiveMenu(!activeMenu)
  }

  menuClickFalse = () => {
    setActiveMenu(false)
  }

  return (
    <div>
      <Header activeMenu={activeMenu} menuClick={menuClick} menuClickFalse={menuClickFalse}/>
        <div onClick={menuClickFalse}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
