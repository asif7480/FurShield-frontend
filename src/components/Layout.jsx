import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useAuth } from '../context/AuthContext'

const Layout = ({ children }) => {

  const { loading, user, profile } = useAuth()
  useEffect(() => {
    profile()
  }, [])

  if (loading) {
    return "loading...."
  }
  return (

    < >
      <Navbar />
      <main className="py-4">
        <div className="container-lg">
          {children}
        </div>
      </main>
      <Footer />

    </ >
  )
}

export default Layout