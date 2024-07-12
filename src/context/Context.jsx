'use client'

import { createContext, useState, useContext } from 'react'

const HeaderContext = createContext()

export const HeaderProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  return (
    <HeaderContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar }}>
      {children}
    </HeaderContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(HeaderContext)
}
