import React, { useState } from 'react'
import { Header } from '.'
import { Footer } from '.'

const Layout = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);

  const menuClick = () => {
    setActiveMenu(!activeMenu)
  }

  return (
    <div>
      <Header activeMenu={activeMenu} menuClick={menuClick}/>
        <div onClick={() => setActiveMenu(false)}>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
