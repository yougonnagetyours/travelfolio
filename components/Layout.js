import React, { useState } from 'react'
import { Header } from '.'
import { Footer } from '.'

const Layout = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(false);

  const menuClick = () => {
    setActiveMenu(!activeMenu)
  }

  const menuClickFalse = () => {
    setActiveMenu(false)
  }

  const subMenuClick = () => {
    setActiveSubMenu(!activeSubMenu)
  }

  return (
    <div>
      <Header 
        activeMenu={activeMenu} 
        menuClick={menuClick} 
        activeSubMenu={activeSubMenu} 
        subMenuClick={subMenuClick}
        menuClickFalse={menuClickFalse}  
      />
        <div onClick={menuClickFalse}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
