import React, { useState } from 'react'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    const handleLinkClick = () => {
  return (
    <div>
      Navbar
    </div>
  )
}

export default Navbar
